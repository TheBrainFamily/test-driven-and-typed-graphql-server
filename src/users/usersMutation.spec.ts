import gql from "graphql-tag";
import { when } from "../resolvers/testHelpers/when";
import { getGqlClientWithMockedContext } from "../resolvers/testHelpers/getGqlClientWithMockedContext";

test("userAdd calls the service and returns the new user", async () => {
  const { gqlClient, context } = getGqlClientWithMockedContext();
  when(context.usersService.add("user")).thenResolve({
    id: "1",
    name: "user"
  });

  const mutation = gql`
    mutation userAdd {
      userAdd(name: "user") {
        id
        name
      }
    }
  `;

  const result = await gqlClient.mutate({
    mutation
  });

  // @ts-ignore
  const { userAdd } = result.data;

  expect(userAdd).toEqual({
    id: "1",
    name: "user",
    __typename: "User"
  });
});


test("userRemoveById calls the service and returns the new user", async () => {
    const { gqlClient, context } = getGqlClientWithMockedContext();
    when(context.usersService.removeById("1")).thenResolve("1");

  const mutation = gql`
      mutation userRemoveById {
          userRemoveById(id: "1") 
      }
  `;

    const result = await gqlClient.mutate({
        mutation
    });

  // @ts-ignore
    const { userRemoveById } = result.data;

    expect(userRemoveById).toEqual("1");
});

test("userRemoveByName calls the service and returns the new user", async () => {
    const { gqlClient, context } = getGqlClientWithMockedContext();
    when(context.usersService.removeByName("name")).thenResolve("1");

  const mutation = gql`
      mutation userRemoveByName {
          userRemoveByName(name: "name")
      }
  `;

    const result = await gqlClient.mutate({
        mutation
    });

  // @ts-ignore
    const { userRemoveByName } = result.data;

    expect(userRemoveByName).toEqual("1");
});
