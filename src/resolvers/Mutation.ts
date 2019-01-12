// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

import { MutationResolvers } from "../graphqlgen";

export const Mutation: MutationResolvers.Type = {
  ...MutationResolvers.defaultResolvers,
  itemAdd: (parent, args, {itemsService}) => itemsService.add(args.name),
  itemRemoveById: (parent, args, {itemsService}) => itemsService.removeById(args.id),
  itemRemoveByName: (parent, args, {itemsService}) => itemsService.removeByName(args.name),
  articleAdd: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  },
  articleRemoveById: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  },
  articleRemoveByName: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  },
  commentAdd: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  },
  commentRemoveById: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  },
  commentRemoveByName: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  },
  userAdd: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  },
  userRemoveById: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  },
  userRemoveByName: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  },
  teacherAdd: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  },
  teacherRemoveById: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  },
  teacherRemoveByName: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  },
  courseAdd: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  },
  courseRemoveById: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  },
  courseRemoveByName: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  },
  classAdd: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  },
  classRemoveById: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  },
  classRemoveByName: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  },
  schoolAdd: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  },
  schoolRemoveById: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  },
  schoolRemoveByName: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  },
  sectionAdd: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  },
  sectionRemoveById: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  },
  sectionRemoveByName: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  },
  gradeAdd: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  },
  gradeRemoveById: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  },
  gradeRemoveByName: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  },
  achievementAdd: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  },
  achievementRemoveById: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  },
  achievementRemoveByName: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  }
};
