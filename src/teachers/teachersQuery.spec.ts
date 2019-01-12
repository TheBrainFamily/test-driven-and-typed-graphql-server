import gql from "graphql-tag";
import { when } from "../resolvers/testHelpers/when";
import { getGqlClientWithMockedContext } from "../resolvers/testHelpers/getGqlClientWithMockedContext";

test("teachersFindAll query returns all teachers", async () => {
  const { gqlClient, context } = getGqlClientWithMockedContext();
  when(context.teachersService.findAll()).thenResolve([
    {
      id: "1",
      name: "teacher"
    }
  ]);

  const query = gql`
    query teachers {
      teachersFindAll {
        id
        name
      }
    }
  `;

  const result = await gqlClient.query({
    query
  });

  // @ts-ignore
  const { teachersFindAll } = result.data;

  expect(teachersFindAll[0]).toEqual({
    id: "1",
    name: "teacher",
    __typename: 'Teacher'
  });
});


test("teacherFindById query returns teacher by id", async () => {
  const { gqlClient, context } = getGqlClientWithMockedContext();
  when(context.teachersService.findById("1")).thenResolve(
    {
      id: "1",
      name: "teacher"
    }
  );

  const query = gql`
    query teacherById {
      teacherFindById(id: "1") {
        id
        name
      }
    }
  `;

  const result = await gqlClient.query({
    query
  });

  // @ts-ignore
  const { teacherFindById } = result.data;

  expect(teacherFindById).toEqual({
    id: "1",
    name: "teacher",
    __typename: 'Teacher'
  });
});

test("teacherFindByName query returns teacher by id", async () => {
  const { gqlClient, context } = getGqlClientWithMockedContext();
  when(context.teachersService.findByName("teacher")).thenResolve(
      {
        id: "1",
        name: "teacher"
      }
  );

  const query = gql`
    query teacherName {
      teacherFindByName(name: "teacher") {
        id
        name
      }
    }
  `;

  const result = await gqlClient.query({
    query
  });

  // @ts-ignore
  const { teacherFindByName } = result.data;

  expect(teacherFindByName).toEqual({
    id: "1",
    name: "teacher",
    __typename: 'Teacher'
  });
});

