import gql from "graphql-tag";
import { when } from "../resolvers/testHelpers/when";
import { getGqlClientWithMockedContext } from "../resolvers/testHelpers/getGqlClientWithMockedContext";

test("sectionAdd calls the service and returns the new section", async () => {
  const { gqlClient, context } = getGqlClientWithMockedContext();
  when(context.sectionsService.add("section")).thenResolve({
    id: "1",
    name: "section"
  });

  const mutation = gql`
    mutation sectionAdd {
      sectionAdd(name: "section") {
        id
        name
      }
    }
  `;

  const result = await gqlClient.mutate({
    mutation
  });

  // @ts-ignore
  const { sectionAdd } = result.data;

  expect(sectionAdd).toEqual({
    id: "1",
    name: "section",
    __typename: "Section"
  });
});


test("sectionRemoveById calls the service and returns the new section", async () => {
    const { gqlClient, context } = getGqlClientWithMockedContext();
    when(context.sectionsService.removeById("1")).thenResolve("1");

  const mutation = gql`
      mutation sectionRemoveById {
          sectionRemoveById(id: "1") 
      }
  `;

    const result = await gqlClient.mutate({
        mutation
    });

  // @ts-ignore
    const { sectionRemoveById } = result.data;

    expect(sectionRemoveById).toEqual("1");
});

test("sectionRemoveByName calls the service and returns the new section", async () => {
    const { gqlClient, context } = getGqlClientWithMockedContext();
    when(context.sectionsService.removeByName("name")).thenResolve("1");

  const mutation = gql`
      mutation sectionRemoveByName {
          sectionRemoveByName(name: "name")
      }
  `;

    const result = await gqlClient.mutate({
        mutation
    });

  // @ts-ignore
    const { sectionRemoveByName } = result.data;

    expect(sectionRemoveByName).toEqual("1");
});
