import gql from "graphql-tag";
import { when } from "../resolvers/testHelpers/when";
import { getGqlClientWithMockedContext } from "../resolvers/testHelpers/getGqlClientWithMockedContext";

test("gradeAdd calls the service and returns the new grade", async () => {
  const { gqlClient, context } = getGqlClientWithMockedContext();
  when(context.gradesService.add("grade")).thenResolve({
    id: "1",
    name: "grade"
  });

  const mutation = gql`
    mutation gradeAdd {
      gradeAdd(name: "grade") {
        id
        name
      }
    }
  `;

  const result = await gqlClient.mutate({
    mutation
  });

  // @ts-ignore
  const { gradeAdd } = result.data;

  expect(gradeAdd).toEqual({
    id: "1",
    name: "grade",
    __typename: "Grade"
  });
});


test("gradeRemoveById calls the service and returns the new grade", async () => {
    const { gqlClient, context } = getGqlClientWithMockedContext();
    when(context.gradesService.removeById("1")).thenResolve("1");

  const mutation = gql`
      mutation gradeRemoveById {
          gradeRemoveById(id: "1") 
      }
  `;

    const result = await gqlClient.mutate({
        mutation
    });

  // @ts-ignore
    const { gradeRemoveById } = result.data;

    expect(gradeRemoveById).toEqual("1");
});

test("gradeRemoveByName calls the service and returns the new grade", async () => {
    const { gqlClient, context } = getGqlClientWithMockedContext();
    when(context.gradesService.removeByName("name")).thenResolve("1");

  const mutation = gql`
      mutation gradeRemoveByName {
          gradeRemoveByName(name: "name")
      }
  `;

    const result = await gqlClient.mutate({
        mutation
    });

  // @ts-ignore
    const { gradeRemoveByName } = result.data;

    expect(gradeRemoveByName).toEqual("1");
});
