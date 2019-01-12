import gql from "graphql-tag";
import { when } from "../resolvers/testHelpers/when";
import { getGqlClientWithMockedContext } from "../resolvers/testHelpers/getGqlClientWithMockedContext";

test("teacherAdd calls the service and returns the new teacher", async () => {
  const { gqlClient, context } = getGqlClientWithMockedContext();
  when(context.teachersService.add("teacher")).thenResolve({
    id: "1",
    name: "teacher"
  });

  const mutation = gql`
    mutation teacherAdd {
      teacherAdd(name: "teacher") {
        id
        name
      }
    }
  `;

  const result = await gqlClient.mutate({
    mutation
  });

  // @ts-ignore
  const { teacherAdd } = result.data;

  expect(teacherAdd).toEqual({
    id: "1",
    name: "teacher",
    __typename: "Teacher"
  });
});


test("teacherRemoveById calls the service and returns the new teacher", async () => {
    const { gqlClient, context } = getGqlClientWithMockedContext();
    when(context.teachersService.removeById("1")).thenResolve("1");

  const mutation = gql`
      mutation teacherRemoveById {
          teacherRemoveById(id: "1") 
      }
  `;

    const result = await gqlClient.mutate({
        mutation
    });

  // @ts-ignore
    const { teacherRemoveById } = result.data;

    expect(teacherRemoveById).toEqual("1");
});

test("teacherRemoveByName calls the service and returns the new teacher", async () => {
    const { gqlClient, context } = getGqlClientWithMockedContext();
    when(context.teachersService.removeByName("name")).thenResolve("1");

  const mutation = gql`
      mutation teacherRemoveByName {
          teacherRemoveByName(name: "name")
      }
  `;

    const result = await gqlClient.mutate({
        mutation
    });

  // @ts-ignore
    const { teacherRemoveByName } = result.data;

    expect(teacherRemoveByName).toEqual("1");
});
