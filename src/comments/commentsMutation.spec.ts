import gql from "graphql-tag";
import { when } from "../resolvers/testHelpers/when";
import { getGqlClientWithMockedContext } from "../resolvers/testHelpers/getGqlClientWithMockedContext";

test("commentAdd calls the service and returns the new comment", async () => {
  const { gqlClient, context } = getGqlClientWithMockedContext();
  when(context.commentsService.add("comment")).thenResolve({
    id: "1",
    name: "comment"
  });

  const mutation = gql`
    mutation commentAdd {
      commentAdd(name: "comment") {
        id
        name
      }
    }
  `;

  const result = await gqlClient.mutate({
    mutation
  });

  // @ts-ignore
  const { commentAdd } = result.data;

  expect(commentAdd).toEqual({
    id: "1",
    name: "comment",
    __typename: "Comment"
  });
});


test("commentRemoveById calls the service and returns the new comment", async () => {
    const { gqlClient, context } = getGqlClientWithMockedContext();
    when(context.commentsService.removeById("1")).thenResolve("1");

  const mutation = gql`
      mutation commentRemoveById {
          commentRemoveById(id: "1") 
      }
  `;

    const result = await gqlClient.mutate({
        mutation
    });

  // @ts-ignore
    const { commentRemoveById } = result.data;

    expect(commentRemoveById).toEqual("1");
});

test("commentRemoveByName calls the service and returns the new comment", async () => {
    const { gqlClient, context } = getGqlClientWithMockedContext();
    when(context.commentsService.removeByName("name")).thenResolve("1");

  const mutation = gql`
      mutation commentRemoveByName {
          commentRemoveByName(name: "name")
      }
  `;

    const result = await gqlClient.mutate({
        mutation
    });

  // @ts-ignore
    const { commentRemoveByName } = result.data;

    expect(commentRemoveByName).toEqual("1");
});
