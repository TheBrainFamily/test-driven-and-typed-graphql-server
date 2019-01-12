import gql from "graphql-tag";
import { when } from "../resolvers/testHelpers/when";
import { getGqlClientWithMockedContext } from "../resolvers/testHelpers/getGqlClientWithMockedContext";

test("classsFindAll query returns all classs", async () => {
  const { gqlClient, context } = getGqlClientWithMockedContext();
  when(context.classsService.findAll()).thenResolve([
    {
      id: "1",
      name: "class"
    }
  ]);

  const query = gql`
    query classs {
      classsFindAll {
        id
        name
      }
    }
  `;

  const result = await gqlClient.query({
    query
  });

  // @ts-ignore
  const { classsFindAll } = result.data;

  expect(classsFindAll[0]).toEqual({
    id: "1",
    name: "class",
    __typename: 'Class'
  });
});


test("classFindById query returns class by id", async () => {
  const { gqlClient, context } = getGqlClientWithMockedContext();
  when(context.classsService.findById("1")).thenResolve(
    {
      id: "1",
      name: "class"
    }
  );

  const query = gql`
    query classById {
      classFindById(id: "1") {
        id
        name
      }
    }
  `;

  const result = await gqlClient.query({
    query
  });

  // @ts-ignore
  const { classFindById } = result.data;

  expect(classFindById).toEqual({
    id: "1",
    name: "class",
    __typename: 'Class'
  });
});

test("classFindByName query returns class by id", async () => {
  const { gqlClient, context } = getGqlClientWithMockedContext();
  when(context.classsService.findByName("class")).thenResolve(
      {
        id: "1",
        name: "class"
      }
  );

  const query = gql`
    query className {
      classFindByName(name: "class") {
        id
        name
      }
    }
  `;

  const result = await gqlClient.query({
    query
  });

  // @ts-ignore
  const { classFindByName } = result.data;

  expect(classFindByName).toEqual({
    id: "1",
    name: "class",
    __typename: 'Class'
  });
});

