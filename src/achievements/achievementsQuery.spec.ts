import gql from "graphql-tag";
import { when } from "../resolvers/testHelpers/when";
import { getGqlClientWithMockedContext } from "../resolvers/testHelpers/getGqlClientWithMockedContext";

const {mutations} = require("../generatedQueries/index")
//
// console.log("GOZDECKI queries", mutations.)

test("achievementsFindAll query returns all achievements", async () => {
  const { gqlClient, context } = getGqlClientWithMockedContext();
  when(context.achievementsService.findAll()).thenResolve([
    {
      id: "1",
      name: "achievement"
    }
  ]);


  const result = await gqlClient.query();

  // @ts-ignore
  const { achievementsFindAll } = result.data;

  expect(achievementsFindAll[0]).toEqual({
    id: "1",
    name: "achievement",
    __typename: 'Achievement'
  });
});


test("achievementFindById query returns achievement by id", async () => {
  const { gqlClient, context } = getGqlClientWithMockedContext();
  when(context.achievementsService.findById("1")).thenResolve(
    {
      id: "1",
      name: "achievement"
    }
  );

  const query = gql`
    query achievementById {
      achievementFindById(id: "1") {
        id
        name
      }
    }
  `;

  const result = await gqlClient.query({
    query
  });

  // @ts-ignore
  const { achievementFindById } = result.data;

  expect(achievementFindById).toEqual({
    id: "1",
    name: "achievement",
    __typename: 'Achievement'
  });
});

test("achievementFindByName query returns achievement by id", async () => {
  const { gqlClient, context } = getGqlClientWithMockedContext();
  when(context.achievementsService.findByName("achievement")).thenResolve(
      {
        id: "1",
        name: "achievement"
      }
  );

  const query = gql`
    query achievementName {
      achievementFindByName(name: "achievement") {
        id
        name
      }
    }
  `;

  const result = await gqlClient.query({
    query
  });

  // @ts-ignore
  const { achievementFindByName } = result.data;

  expect(achievementFindByName).toEqual({
    id: "1",
    name: "achievement",
    __typename: 'Achievement'
  });
});

