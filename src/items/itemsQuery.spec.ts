import gql from "graphql-tag";
import { when } from "../resolvers/testHelpers/when";
import { getGqlClientWithMockedContext } from "../resolvers/testHelpers/getGqlClientWithMockedContext";

test("itemsFindAll query returns all items", async () => {
  const { gqlClient, context } = getGqlClientWithMockedContext();
  when(context.itemsService.findAll()).thenResolve([
    {
      id: "1",
      name: "item"
    }
  ]);

  const query = gql`
    query items {
      itemsFindAll {
        id
        name
      }
    }
  `;

  const result = await gqlClient.query({
    query
  });

  // @ts-ignore
  const { itemsFindAll } = result.data;

  expect(itemsFindAll[0]).toEqual({
    id: "1",
    name: "item",
    __typename: 'Item'
  });
});


test("itemFindById query returns item by id", async () => {
  const { gqlClient, context } = getGqlClientWithMockedContext();
  when(context.itemsService.findById("1")).thenResolve(
    {
      id: "1",
      name: "item"
    }
  );

  const query = gql`
    query itemById {
      itemFindById(id: "1") {
        id
        name
      }
    }
  `;

  const result = await gqlClient.query({
    query
  });

  // @ts-ignore
  const { itemFindById } = result.data;

  expect(itemFindById).toEqual({
    id: "1",
    name: "item",
    __typename: 'Item'
  });
});

test("itemFindByName query returns item by id", async () => {
  const { gqlClient, context } = getGqlClientWithMockedContext();
  when(context.itemsService.findByName("item")).thenResolve(
      {
        id: "1",
        name: "item"
      }
  );

  const query = gql`
    query itemName {
      itemFindByName(name: "item") {
        id
        name
      }
    }
  `;

  const result = await gqlClient.query({
    query
  });

  // @ts-ignore
  const { itemFindByName } = result.data;

  expect(itemFindByName).toEqual({
    id: "1",
    name: "item",
    __typename: 'Item'
  });
});

