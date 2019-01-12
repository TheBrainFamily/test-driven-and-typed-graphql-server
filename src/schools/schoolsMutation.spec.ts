import gql from "graphql-tag";
import { when } from "../resolvers/testHelpers/when";
import { getGqlClientWithMockedContext } from "../resolvers/testHelpers/getGqlClientWithMockedContext";

test("schoolAdd calls the service and returns the new school", async () => {
  const { gqlClient, context } = getGqlClientWithMockedContext();
  when(context.schoolsService.add("school")).thenResolve({
    id: "1",
    name: "school"
  });

  const mutation = gql`
    mutation schoolAdd {
      schoolAdd(name: "school") {
        id
        name
      }
    }
  `;

  const result = await gqlClient.mutate({
    mutation
  });

  // @ts-ignore
  const { schoolAdd } = result.data;

  expect(schoolAdd).toEqual({
    id: "1",
    name: "school",
    __typename: "School"
  });
});


test("schoolRemoveById calls the service and returns the new school", async () => {
    const { gqlClient, context } = getGqlClientWithMockedContext();
    when(context.schoolsService.removeById("1")).thenResolve("1");

  const mutation = gql`
      mutation schoolRemoveById {
          schoolRemoveById(id: "1") 
      }
  `;

    const result = await gqlClient.mutate({
        mutation
    });

  // @ts-ignore
    const { schoolRemoveById } = result.data;

    expect(schoolRemoveById).toEqual("1");
});

test("schoolRemoveByName calls the service and returns the new school", async () => {
    const { gqlClient, context } = getGqlClientWithMockedContext();
    when(context.schoolsService.removeByName("name")).thenResolve("1");

  const mutation = gql`
      mutation schoolRemoveByName {
          schoolRemoveByName(name: "name")
      }
  `;

    const result = await gqlClient.mutate({
        mutation
    });

  // @ts-ignore
    const { schoolRemoveByName } = result.data;

    expect(schoolRemoveByName).toEqual("1");
});
