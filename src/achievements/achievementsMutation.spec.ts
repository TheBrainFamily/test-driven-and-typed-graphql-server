import gql from "graphql-tag";
import { when } from "../resolvers/testHelpers/when";
import { getGqlClientWithMockedContext } from "../resolvers/testHelpers/getGqlClientWithMockedContext";

test("achievementAdd calls the service and returns the new achievement", async () => {
  const { gqlClient, context } = getGqlClientWithMockedContext();
  when(context.achievementsService.add("achievement")).thenResolve({
    id: "1",
    name: "achievement"
  });

  const mutation = gql`
    mutation achievementAdd {
      achievementAdd(name: "achievement") {
        id
        name
      }
    }
  `;

  const result = await gqlClient.mutate({
    mutation
  });

  // @ts-ignore
  const { achievementAdd } = result.data;

  expect(achievementAdd).toEqual({
    id: "1",
    name: "achievement",
    __typename: "Achievement"
  });
});


test("achievementRemoveById calls the service and returns the new achievement", async () => {
    const { gqlClient, context } = getGqlClientWithMockedContext();
    when(context.achievementsService.removeById("1")).thenResolve("1");

  const mutation = gql`
      mutation achievementRemoveById {
          achievementRemoveById(id: "1") 
      }
  `;

    const result = await gqlClient.mutate({
        mutation
    });

  // @ts-ignore
    const { achievementRemoveById } = result.data;

    expect(achievementRemoveById).toEqual("1");
});

test("achievementRemoveByName calls the service and returns the new achievement", async () => {
    const { gqlClient, context } = getGqlClientWithMockedContext();
    when(context.achievementsService.removeByName("name")).thenResolve("1");

  const mutation = gql`
      mutation achievementRemoveByName {
          achievementRemoveByName(name: "name")
      }
  `;

    const result = await gqlClient.mutate({
        mutation
    });

  // @ts-ignore
    const { achievementRemoveByName } = result.data;

    expect(achievementRemoveByName).toEqual("1");
});
