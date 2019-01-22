import { GraphQLServer } from "graphql-yoga";
import { resolvers } from "./resolvers";
import { Context } from "./types";
import { ItemsService } from "./items/itemsService";
import { ItemsRepository } from "./items/itemsRepository";
import { AchievementsService } from "./achievements/achievementsService";
import { AchievementsRepository } from "./achievements/achievementsRepository";
import { ArticlesService } from "./articles/articlesService";
import { ArticlesRepository } from "./articles/articlesRepository";
import { ClasssService } from "./classs/classsService";
import { ClasssRepository } from "./classs/classsRepository";
import { CommentsService } from "./comments/commentsService";
import { CommentsRepository } from "./comments/commentsRepository";
import { CoursesRepository } from "./courses/coursesRepository";
import { CoursesService } from "./courses/coursesService";
import { GradesService } from "./grades/gradesService";
import { GradesRepository } from "./grades/gradesRepository";
import { SchoolsRepository } from "./schools/schoolsRepository";
import { SchoolsService } from "./schools/schoolsService";
import { SectionsService } from "./sections/sectionsService";
import { SectionsRepository } from "./sections/sectionsRepository";
import { TeachersRepository } from "./teachers/teachersRepository";
import { TeachersService } from "./teachers/teachersService";
import { UsersRepository } from "./users/usersRepository";
import { UsersService } from "./users/usersService";

const context: Context = {
  itemsService: new ItemsService(new ItemsRepository()),
  achievementsService: new AchievementsService(new AchievementsRepository()),
  articlesService: new ArticlesService(new ArticlesRepository()),
  classsService: new ClasssService(new ClasssRepository()),
  commentsService: new CommentsService(new CommentsRepository()),
  coursesService: new CoursesService(new CoursesRepository()),
  gradesService: new GradesService(new GradesRepository()),
  schoolsService: new SchoolsService(new SchoolsRepository()),
  sectionsService: new SectionsService(new SectionsRepository()),
  teachersService: new TeachersService(new TeachersRepository()),
  usersService: new UsersService(new UsersRepository())
};

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context
} as any);

server.start(() => console.log("Server is running on http://localhost:4000"));
