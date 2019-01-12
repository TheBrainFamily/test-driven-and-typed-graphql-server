import gql from "graphql-tag";
import { when } from "../resolvers/testHelpers/when";
import { getGqlClientWithMockedContext } from "../resolvers/testHelpers/getGqlClientWithMockedContext";

test("usersFindAll query returns all users", async () => {
  const { gqlClient, context } = getGqlClientWithMockedContext();
  when(context.usersService.findAll()).thenResolve([
    {
      id: "1",
      name: "user"
    }
  ]);

  const query = gql`
    query users {
      usersFindAll {
        id
        name
      }
    }
  `;

  const result = await gqlClient.query({
    query
  });

  // @ts-ignore
  const { usersFindAll } = result.data;

  expect(usersFindAll[0]).toEqual({
    id: "1",
    name: "user",
    __typename: 'User'
  });
});


test("userFindById query returns user by id", async () => {
  const { gqlClient, context } = getGqlClientWithMockedContext();
  when(context.usersService.findById("1")).thenResolve(
    {
      id: "1",
      name: "user"
    }
  );

  const query = gql`
    query userById {
      userFindById(id: "1") {
        id
        name
      }
    }
  `;

  const result = await gqlClient.query({
    query
  });

  // @ts-ignore
  const { userFindById } = result.data;

  expect(userFindById).toEqual({
    id: "1",
    name: "user",
    __typename: 'User'
  });
});

test("userFindByName query returns user by id", async () => {
  const { gqlClient, context } = getGqlClientWithMockedContext();
  when(context.usersService.findByName("user")).thenResolve(
      {
        id: "1",
        name: "user"
      }
  );

  const query = gql`
    query userName {
      userFindByName(name: "user") {
        id
        name
      }
    }
  `;

  const result = await gqlClient.query({
    query
  });

  // @ts-ignore
  const { userFindByName } = result.data;

  expect(userFindByName).toEqual({
    id: "1",
    name: "user",
    __typename: 'User'
  });
});

