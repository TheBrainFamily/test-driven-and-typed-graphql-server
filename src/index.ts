import { GraphQLServer } from "graphql-yoga";
import { resolvers } from "./resolvers";
import { Context } from "./types";
import { ItemsService } from "./items/itemsService";
import { ItemsRepository } from "./items/itemsRepository";

const context: Context = {
  itemsService: new ItemsService(new ItemsRepository())
};

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context
} as any);

server.start(() => console.log("Server is running on http://localhost:4000"));
