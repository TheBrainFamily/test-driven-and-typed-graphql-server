// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

import { UserResolvers } from "../graphqlgen";

export const User: UserResolvers.Type = {
  ...UserResolvers.defaultResolvers,

  name: (parent, args, ctx) => {
    return parent.name
  }
};
