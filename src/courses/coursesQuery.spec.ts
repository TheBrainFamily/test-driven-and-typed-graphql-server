import gql from "graphql-tag";
import { when } from "../resolvers/testHelpers/when";
import { getGqlClientWithMockedContext } from "../resolvers/testHelpers/getGqlClientWithMockedContext";

test("coursesFindAll query returns all courses", async () => {
  const { gqlClient, context } = getGqlClientWithMockedContext();
  when(context.coursesService.findAll()).thenResolve([
    {
      id: "1",
      name: "course"
    }
  ]);

  const query = gql`
    query courses {
      coursesFindAll {
        id
        name
      }
    }
  `;

  const result = await gqlClient.query({
    query
  });

  // @ts-ignore
  const { coursesFindAll } = result.data;

  expect(coursesFindAll[0]).toEqual({
    id: "1",
    name: "course",
    __typename: 'Course'
  });
});


test("courseFindById query returns course by id", async () => {
  const { gqlClient, context } = getGqlClientWithMockedContext();
  when(context.coursesService.findById("1")).thenResolve(
    {
      id: "1",
      name: "course"
    }
  );

  const query = gql`
    query courseById {
      courseFindById(id: "1") {
        id
        name
      }
    }
  `;

  const result = await gqlClient.query({
    query
  });

  // @ts-ignore
  const { courseFindById } = result.data;

  expect(courseFindById).toEqual({
    id: "1",
    name: "course",
    __typename: 'Course'
  });
});

test("courseFindByName query returns course by id", async () => {
  const { gqlClient, context } = getGqlClientWithMockedContext();
  when(context.coursesService.findByName("course")).thenResolve(
      {
        id: "1",
        name: "course"
      }
  );

  const query = gql`
    query courseName {
      courseFindByName(name: "course") {
        id
        name
      }
    }
  `;

  const result = await gqlClient.query({
    query
  });

  // @ts-ignore
  const { courseFindByName } = result.data;

  expect(courseFindByName).toEqual({
    id: "1",
    name: "course",
    __typename: 'Course'
  });
});

