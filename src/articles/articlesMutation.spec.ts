import gql from "graphql-tag";
import { when } from "../resolvers/testHelpers/when";
import { getGqlClientWithMockedContext } from "../resolvers/testHelpers/getGqlClientWithMockedContext";

test("articleAdd calls the service and returns the new article", async () => {
  const { gqlClient, context } = getGqlClientWithMockedContext();
  when(context.articlesService.add("article")).thenResolve({
    id: "1",
    name: "article"
  });

  const mutation = gql`
    mutation articleAdd {
      articleAdd(name: "article") {
        id
        name
      }
    }
  `;

  const result = await gqlClient.mutate({
    mutation
  });

  // @ts-ignore
  const { articleAdd } = result.data;

  expect(articleAdd).toEqual({
    id: "1",
    name: "article",
    __typename: "Article"
  });
});


test("articleRemoveById calls the service and returns the new article", async () => {
    const { gqlClient, context } = getGqlClientWithMockedContext();
    when(context.articlesService.removeById("1")).thenResolve("1");

  const mutation = gql`
      mutation articleRemoveById {
          articleRemoveById(id: "1") 
      }
  `;

    const result = await gqlClient.mutate({
        mutation
    });

  // @ts-ignore
    const { articleRemoveById } = result.data;

    expect(articleRemoveById).toEqual("1");
});

test("articleRemoveByName calls the service and returns the new article", async () => {
    const { gqlClient, context } = getGqlClientWithMockedContext();
    when(context.articlesService.removeByName("name")).thenResolve("1");

  const mutation = gql`
      mutation articleRemoveByName {
          articleRemoveByName(name: "name")
      }
  `;

    const result = await gqlClient.mutate({
        mutation
    });

  // @ts-ignore
    const { articleRemoveByName } = result.data;

    expect(articleRemoveByName).toEqual("1");
});
