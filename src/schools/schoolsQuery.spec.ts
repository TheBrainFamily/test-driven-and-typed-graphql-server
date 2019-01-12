import gql from "graphql-tag";
import { when } from "../resolvers/testHelpers/when";
import { getGqlClientWithMockedContext } from "../resolvers/testHelpers/getGqlClientWithMockedContext";

test("schoolsFindAll query returns all schools", async () => {
  const { gqlClient, context } = getGqlClientWithMockedContext();
  when(context.schoolsService.findAll()).thenResolve([
    {
      id: "1",
      name: "school"
    }
  ]);

  const query = gql`
    query schools {
      schoolsFindAll {
        id
        name
      }
    }
  `;

  const result = await gqlClient.query({
    query
  });

  // @ts-ignore
  const { schoolsFindAll } = result.data;

  expect(schoolsFindAll[0]).toEqual({
    id: "1",
    name: "school",
    __typename: 'School'
  });
});


test("schoolFindById query returns school by id", async () => {
  const { gqlClient, context } = getGqlClientWithMockedContext();
  when(context.schoolsService.findById("1")).thenResolve(
    {
      id: "1",
      name: "school"
    }
  );

  const query = gql`
    query schoolById {
      schoolFindById(id: "1") {
        id
        name
      }
    }
  `;

  const result = await gqlClient.query({
    query
  });

  // @ts-ignore
  const { schoolFindById } = result.data;

  expect(schoolFindById).toEqual({
    id: "1",
    name: "school",
    __typename: 'School'
  });
});

test("schoolFindByName query returns school by id", async () => {
  const { gqlClient, context } = getGqlClientWithMockedContext();
  when(context.schoolsService.findByName("school")).thenResolve(
      {
        id: "1",
        name: "school"
      }
  );

  const query = gql`
    query schoolName {
      schoolFindByName(name: "school") {
        id
        name
      }
    }
  `;

  const result = await gqlClient.query({
    query
  });

  // @ts-ignore
  const { schoolFindByName } = result.data;

  expect(schoolFindByName).toEqual({
    id: "1",
    name: "school",
    __typename: 'School'
  });
});

