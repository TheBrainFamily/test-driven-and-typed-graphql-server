// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

import { QueryResolvers } from "../graphqlgen";

export const Query: QueryResolvers.Type = {
  ...QueryResolvers.defaultResolvers,
  itemsFindAll: (parent, args, ctx) => ctx.itemsService.findAll(),
  itemFindById: (parent, args, ctx) => ctx.itemsService.findById(args.id),
  itemFindByName: (parent, args, ctx) => ctx.itemsService.findByName(args.name),
  articlesFindAll: (parent, args, ctx) => ctx.articlesService.findAll(),
  articleFindById: (parent, args, ctx) => ctx.articlesService.findById(args.id),
  articleFindByName: (parent, args, ctx) => ctx.articlesService.findByName(args.name),
  commentsFindAll: (parent, args, ctx) => ctx.commentsService.findAll(),
  commentFindById: (parent, args, ctx) => ctx.commentsService.findById(args.id),
  commentFindByName: (parent, args, ctx) => ctx.commentsService.findByName(args.name),
  usersFindAll: (parent, args, ctx) => ctx.usersService.findAll(),
  userFindById: (parent, args, ctx) => ctx.usersService.findById(args.id),
  userFindByName: (parent, args, ctx) => ctx.usersService.findByName(args.name),
  teachersFindAll: (parent, args, ctx) => ctx.teachersService.findAll(),
  teacherFindById: (parent, args, ctx) => ctx.teachersService.findById(args.id),
  teacherFindByName: (parent, args, ctx) => ctx.teachersService.findByName(args.name),
  coursesFindAll: (parent, args, ctx) => ctx.coursesService.findAll(),
  courseFindById: (parent, args, ctx) => ctx.coursesService.findById(args.id),
  courseFindByName: (parent, args, ctx) => ctx.coursesService.findByName(args.name),
  classsFindAll: (parent, args, ctx) => ctx.classsService.findAll(),
  classFindById: (parent, args, ctx) => ctx.classsService.findById(args.id),
  classFindByName: (parent, args, ctx) => ctx.classsService.findByName(args.name),
  schoolsFindAll: (parent, args, ctx) => ctx.schoolsService.findAll(),
  schoolFindById: (parent, args, ctx) => ctx.schoolsService.findById(args.id),
  schoolFindByName: (parent, args, ctx) => ctx.schoolsService.findByName(args.name),
  sectionsFindAll: (parent, args, ctx) => ctx.sectionsService.findAll(),
  sectionFindById: (parent, args, ctx) => ctx.sectionsService.findById(args.id),
  sectionFindByName: (parent, args, ctx) => ctx.sectionsService.findByName(args.name),
  gradesFindAll: (parent, args, ctx) => ctx.gradesService.findAll(),
  gradeFindById: (parent, args, ctx) => ctx.gradesService.findById(args.id),
  gradeFindByName: (parent, args, ctx) => ctx.gradesService.findByName(args.name),
  achievementsFindAll: (parent, args, ctx) => ctx.achievementsService.findAll(),
  achievementFindById: (parent, args, ctx) => ctx.achievementsService.findById(args.id),
  achievementFindByName: (parent, args, ctx) => ctx.achievementsService.findByName(args.name)
};
