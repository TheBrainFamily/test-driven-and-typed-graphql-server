// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

import { MutationResolvers } from "../graphqlgen";

export const Mutation: MutationResolvers.Type = {
  ...MutationResolvers.defaultResolvers,
  itemAdd: (parent, args, {itemsService}) => itemsService.add(args.name),
  itemRemoveById: (parent, args, {itemsService}) => itemsService.removeById(args.id),
  itemRemoveByName: (parent, args, {itemsService}) => itemsService.removeByName(args.name),
  articleAdd: (parent, args, ctx) => ctx.articlesService.add(args.name),
  articleRemoveById: (parent, args, ctx) => ctx.articlesService.removeById(args.id),
  articleRemoveByName: (parent, args, ctx) => ctx.articlesService.removeByName(args.name),
  commentAdd: (parent, args, ctx) => ctx.commentsService.add(args.name),
  commentRemoveById: (parent, args, ctx) => ctx.commentsService.removeById(args.id),
  commentRemoveByName: (parent, args, ctx) => ctx.commentsService.removeByName(args.name),
  userAdd: (parent, args, ctx) => ctx.usersService.add(args.name),
  userRemoveById: (parent, args, ctx) => ctx.usersService.removeById(args.id),
  userRemoveByName: (parent, args, ctx) => ctx.usersService.removeByName(args.name),
  teacherAdd: (parent, args, ctx) => ctx.teachersService.add(args.name),
  teacherRemoveById: (parent, args, ctx) => ctx.teachersService.removeById(args.id),
  teacherRemoveByName: (parent, args, ctx) => ctx.teachersService.removeByName(args.name),
  courseAdd: (parent, args, ctx) => ctx.coursesService.add(args.name),
  courseRemoveById: (parent, args, ctx) => ctx.coursesService.removeById(args.id),
  courseRemoveByName: (parent, args, ctx) => ctx.coursesService.removeByName(args.name),
  classAdd: (parent, args, ctx) => ctx.classsService.add(args.name),
  classRemoveById: (parent, args, ctx) => ctx.classsService.removeById(args.id),
  classRemoveByName: (parent, args, ctx) => ctx.classsService.removeByName(args.name),
  schoolAdd: (parent, args, ctx) => ctx.schoolsService.add(args.name),
  schoolRemoveById: (parent, args, ctx) => ctx.schoolsService.removeById(args.id),
  schoolRemoveByName: (parent, args, ctx) => ctx.schoolsService.removeByName(args.name),
  sectionAdd: (parent, args, ctx) => ctx.sectionsService.add(args.name),
  sectionRemoveById: (parent, args, ctx) => ctx.sectionsService.removeById(args.id),
  sectionRemoveByName: (parent, args, ctx) => ctx.sectionsService.removeByName(args.name),
  gradeAdd: (parent, args, ctx) => ctx.gradesService.add(args.name),
  gradeRemoveById: (parent, args, ctx) => ctx.gradesService.removeById(args.id),
  gradeRemoveByName: (parent, args, ctx) => ctx.gradesService.removeByName(args.name),
  achievementAdd: (parent, args, ctx) => ctx.achievementsService.add(args.name),
  achievementRemoveById: (parent, args, ctx) => ctx.achievementsService.removeById(args.id),
  achievementRemoveByName: (parent, args, ctx) => ctx.achievementsService.removeByName(args.name)
};
