import gql from "graphql-tag";
import { when } from "../resolvers/testHelpers/when";
import { getGqlClientWithMockedContext } from "../resolvers/testHelpers/getGqlClientWithMockedContext";

test("courseAdd calls the service and returns the new course", async () => {
  const { gqlClient, context } = getGqlClientWithMockedContext();
  when(context.coursesService.add("course")).thenResolve({
    id: "1",
    name: "course"
  });

  const mutation = gql`
    mutation courseAdd {
      courseAdd(name: "course") {
        id
        name
      }
    }
  `;

  const result = await gqlClient.mutate({
    mutation
  });

  // @ts-ignore
  const { courseAdd } = result.data;

  expect(courseAdd).toEqual({
    id: "1",
    name: "course",
    __typename: "Course"
  });
});


test("courseRemoveById calls the service and returns the new course", async () => {
    const { gqlClient, context } = getGqlClientWithMockedContext();
    when(context.coursesService.removeById("1")).thenResolve("1");

  const mutation = gql`
      mutation courseRemoveById {
          courseRemoveById(id: "1") 
      }
  `;

    const result = await gqlClient.mutate({
        mutation
    });

  // @ts-ignore
    const { courseRemoveById } = result.data;

    expect(courseRemoveById).toEqual("1");
});

test("courseRemoveByName calls the service and returns the new course", async () => {
    const { gqlClient, context } = getGqlClientWithMockedContext();
    when(context.coursesService.removeByName("name")).thenResolve("1");

  const mutation = gql`
      mutation courseRemoveByName {
          courseRemoveByName(name: "name")
      }
  `;

    const result = await gqlClient.mutate({
        mutation
    });

  // @ts-ignore
    const { courseRemoveByName } = result.data;

    expect(courseRemoveByName).toEqual("1");
});
