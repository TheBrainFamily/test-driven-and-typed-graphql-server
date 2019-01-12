import gql from "graphql-tag";
import { when } from "../resolvers/testHelpers/when";
import { getGqlClientWithMockedContext } from "../resolvers/testHelpers/getGqlClientWithMockedContext";

test("itemAdd calls the service and returns the new item", async () => {
  const { gqlClient, context } = getGqlClientWithMockedContext();
  when(context.itemsService.add("item")).thenResolve({
    id: "1",
    name: "item"
  });

  const mutation = gql`
    mutation itemAdd {
      itemAdd(name: "item") {
        id
        name
      }
    }
  `;

  const result = await gqlClient.mutate({
    mutation
  });

  // @ts-ignore
  const { itemAdd } = result.data;

  expect(itemAdd).toEqual({
    id: "1",
    name: "item",
    __typename: "Item"
  });
});


test("itemRemoveById calls the service and returns the new item", async () => {
    const { gqlClient, context } = getGqlClientWithMockedContext();
    when(context.itemsService.removeById("1")).thenResolve("1");

  const mutation = gql`
      mutation itemRemoveById {
          itemRemoveById(id: "1") 
      }
  `;

    const result = await gqlClient.mutate({
        mutation
    });

  // @ts-ignore
    const { itemRemoveById } = result.data;

    expect(itemRemoveById).toEqual("1");
});

test("itemRemoveByName calls the service and returns the new item", async () => {
    const { gqlClient, context } = getGqlClientWithMockedContext();
    when(context.itemsService.removeByName("name")).thenResolve("1");

  const mutation = gql`
      mutation itemRemoveByName {
          itemRemoveByName(name: "name")
      }
  `;

    const result = await gqlClient.mutate({
        mutation
    });

  // @ts-ignore
    const { itemRemoveByName } = result.data;

    expect(itemRemoveByName).toEqual("1");
});
