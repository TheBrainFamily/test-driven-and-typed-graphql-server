import gql from "graphql-tag";
import { when } from "../resolvers/testHelpers/when";
import { getGqlClientWithMockedContext } from "../resolvers/testHelpers/getGqlClientWithMockedContext";

test("classAdd calls the service and returns the new class", async () => {
  const { gqlClient, context } = getGqlClientWithMockedContext();
  when(context.classsService.add("class")).thenResolve({
    id: "1",
    name: "class"
  });

  const mutation = gql`
    mutation classAdd {
      classAdd(name: "class") {
        id
        name
      }
    }
  `;

  const result = await gqlClient.mutate({
    mutation
  });

  // @ts-ignore
  const { classAdd } = result.data;

  expect(classAdd).toEqual({
    id: "1",
    name: "class",
    __typename: "Class"
  });
});


test("classRemoveById calls the service and returns the new class", async () => {
    const { gqlClient, context } = getGqlClientWithMockedContext();
    when(context.classsService.removeById("1")).thenResolve("1");

  const mutation = gql`
      mutation classRemoveById {
          classRemoveById(id: "1") 
      }
  `;

    const result = await gqlClient.mutate({
        mutation
    });

  // @ts-ignore
    const { classRemoveById } = result.data;

    expect(classRemoveById).toEqual("1");
});

test("classRemoveByName calls the service and returns the new class", async () => {
    const { gqlClient, context } = getGqlClientWithMockedContext();
    when(context.classsService.removeByName("name")).thenResolve("1");

  const mutation = gql`
      mutation classRemoveByName {
          classRemoveByName(name: "name")
      }
  `;

    const result = await gqlClient.mutate({
        mutation
    });

  // @ts-ignore
    const { classRemoveByName } = result.data;

    expect(classRemoveByName).toEqual("1");
});
