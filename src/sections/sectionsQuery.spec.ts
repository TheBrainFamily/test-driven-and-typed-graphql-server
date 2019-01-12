import gql from "graphql-tag";
import { when } from "../resolvers/testHelpers/when";
import { getGqlClientWithMockedContext } from "../resolvers/testHelpers/getGqlClientWithMockedContext";

test("sectionsFindAll query returns all sections", async () => {
  const { gqlClient, context } = getGqlClientWithMockedContext();
  when(context.sectionsService.findAll()).thenResolve([
    {
      id: "1",
      name: "section"
    }
  ]);

  const query = gql`
    query sections {
      sectionsFindAll {
        id
        name
      }
    }
  `;

  const result = await gqlClient.query({
    query
  });

  // @ts-ignore
  const { sectionsFindAll } = result.data;

  expect(sectionsFindAll[0]).toEqual({
    id: "1",
    name: "section",
    __typename: 'Section'
  });
});


test("sectionFindById query returns section by id", async () => {
  const { gqlClient, context } = getGqlClientWithMockedContext();
  when(context.sectionsService.findById("1")).thenResolve(
    {
      id: "1",
      name: "section"
    }
  );

  const query = gql`
    query sectionById {
      sectionFindById(id: "1") {
        id
        name
      }
    }
  `;

  const result = await gqlClient.query({
    query
  });

  // @ts-ignore
  const { sectionFindById } = result.data;

  expect(sectionFindById).toEqual({
    id: "1",
    name: "section",
    __typename: 'Section'
  });
});

test("sectionFindByName query returns section by id", async () => {
  const { gqlClient, context } = getGqlClientWithMockedContext();
  when(context.sectionsService.findByName("section")).thenResolve(
      {
        id: "1",
        name: "section"
      }
  );

  const query = gql`
    query sectionName {
      sectionFindByName(name: "section") {
        id
        name
      }
    }
  `;

  const result = await gqlClient.query({
    query
  });

  // @ts-ignore
  const { sectionFindByName } = result.data;

  expect(sectionFindByName).toEqual({
    id: "1",
    name: "section",
    __typename: 'Section'
  });
});

