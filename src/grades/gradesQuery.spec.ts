import gql from "graphql-tag";
import { when } from "../resolvers/testHelpers/when";
import { getGqlClientWithMockedContext } from "../resolvers/testHelpers/getGqlClientWithMockedContext";

test("gradesFindAll query returns all grades", async () => {
  const { gqlClient, context } = getGqlClientWithMockedContext();
  when(context.gradesService.findAll()).thenResolve([
    {
      id: "1",
      name: "grade"
    }
  ]);

  const query = gql`
    query grades {
      gradesFindAll {
        id
        name
      }
    }
  `;

  const result = await gqlClient.query({
    query
  });

  // @ts-ignore
  const { gradesFindAll } = result.data;

  expect(gradesFindAll[0]).toEqual({
    id: "1",
    name: "grade",
    __typename: 'Grade'
  });
});


test("gradeFindById query returns grade by id", async () => {
  const { gqlClient, context } = getGqlClientWithMockedContext();
  when(context.gradesService.findById("1")).thenResolve(
    {
      id: "1",
      name: "grade"
    }
  );

  const query = gql`
    query gradeById {
      gradeFindById(id: "1") {
        id
        name
      }
    }
  `;

  const result = await gqlClient.query({
    query
  });

  // @ts-ignore
  const { gradeFindById } = result.data;

  expect(gradeFindById).toEqual({
    id: "1",
    name: "grade",
    __typename: 'Grade'
  });
});

test("gradeFindByName query returns grade by id", async () => {
  const { gqlClient, context } = getGqlClientWithMockedContext();
  when(context.gradesService.findByName("grade")).thenResolve(
      {
        id: "1",
        name: "grade"
      }
  );

  const query = gql`
    query gradeName {
      gradeFindByName(name: "grade") {
        id
        name
      }
    }
  `;

  const result = await gqlClient.query({
    query
  });

  // @ts-ignore
  const { gradeFindByName } = result.data;

  expect(gradeFindByName).toEqual({
    id: "1",
    name: "grade",
    __typename: 'Grade'
  });
});

