import gql from "graphql-tag";
import { when } from "../resolvers/testHelpers/when";
import { getGqlClientWithMockedContext } from "../resolvers/testHelpers/getGqlClientWithMockedContext";

test("articlesFindAll query returns all articles", async () => {
  const { gqlClient, context } = getGqlClientWithMockedContext();
  when(context.articlesService.findAll()).thenResolve([
    {
      id: "1",
      name: "article"
    }
  ]);

  const query = gql`
    query articles {
      articlesFindAll {
        id
        name
      }
    }
  `;

  const result = await gqlClient.query({
    query
  });

  // @ts-ignore
  const { articlesFindAll } = result.data;

  expect(articlesFindAll[0]).toEqual({
    id: "1",
    name: "article",
    __typename: 'Article'
  });
});


test("articleFindById query returns article by id", async () => {
  const { gqlClient, context } = getGqlClientWithMockedContext();
  when(context.articlesService.findById("1")).thenResolve(
    {
      id: "1",
      name: "article"
    }
  );

  const query = gql`
    query articleById {
      articleFindById(id: "1") {
        id
        name
      }
    }
  `;

  const result = await gqlClient.query({
    query
  });

  // @ts-ignore
  const { articleFindById } = result.data;

  expect(articleFindById).toEqual({
    id: "1",
    name: "article",
    __typename: 'Article'
  });
});

test("articleFindByName query returns article by id", async () => {
  const { gqlClient, context } = getGqlClientWithMockedContext();
  when(context.articlesService.findByName("article")).thenResolve(
      {
        id: "1",
        name: "article"
      }
  );

  const query = gql`
    query articleName {
      articleFindByName(name: "article") {
        id
        name
      }
    }
  `;

  const result = await gqlClient.query({
    query
  });

  // @ts-ignore
  const { articleFindByName } = result.data;

  expect(articleFindByName).toEqual({
    id: "1",
    name: "article",
    __typename: 'Article'
  });
});

