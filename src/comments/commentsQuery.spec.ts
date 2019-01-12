import gql from "graphql-tag";
import { when } from "../resolvers/testHelpers/when";
import { getGqlClientWithMockedContext } from "../resolvers/testHelpers/getGqlClientWithMockedContext";

test("commentsFindAll query returns all comments", async () => {
  const { gqlClient, context } = getGqlClientWithMockedContext();
  when(context.commentsService.findAll()).thenResolve([
    {
      id: "1",
      name: "comment"
    }
  ]);

  const query = gql`
    query comments {
      commentsFindAll {
        id
        name
      }
    }
  `;

  const result = await gqlClient.query({
    query
  });

  // @ts-ignore
  const { commentsFindAll } = result.data;

  expect(commentsFindAll[0]).toEqual({
    id: "1",
    name: "comment",
    __typename: 'Comment'
  });
});


test("commentFindById query returns comment by id", async () => {
  const { gqlClient, context } = getGqlClientWithMockedContext();
  when(context.commentsService.findById("1")).thenResolve(
    {
      id: "1",
      name: "comment"
    }
  );

  const query = gql`
    query commentById {
      commentFindById(id: "1") {
        id
        name
      }
    }
  `;

  const result = await gqlClient.query({
    query
  });

  // @ts-ignore
  const { commentFindById } = result.data;

  expect(commentFindById).toEqual({
    id: "1",
    name: "comment",
    __typename: 'Comment'
  });
});

test("commentFindByName query returns comment by id", async () => {
  const { gqlClient, context } = getGqlClientWithMockedContext();
  when(context.commentsService.findByName("comment")).thenResolve(
      {
        id: "1",
        name: "comment"
      }
  );

  const query = gql`
    query commentName {
      commentFindByName(name: "comment") {
        id
        name
      }
    }
  `;

  const result = await gqlClient.query({
    query
  });

  // @ts-ignore
  const { commentFindByName } = result.data;

  expect(commentFindByName).toEqual({
    id: "1",
    name: "comment",
    __typename: 'Comment'
  });
});

