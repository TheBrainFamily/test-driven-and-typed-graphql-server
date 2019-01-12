import { ItemsServiceType } from "./items/itemsService";
import { AchievementsServiceType } from "./achievements/achievementsService";
import { ArticlesServiceType } from "./articles/articlesService";
import { ClasssServiceType } from "./classs/classsService";
import { CommentsServiceType } from "./comments/commentsService";
import { CoursesServiceType } from "./courses/coursesService";
import { GradesServiceType } from "./grades/gradesService";
import { SchoolsServiceType } from "./schools/schoolsService";
import { SectionsServiceType } from "./sections/sectionsService";
import { TeachersServiceType } from "./teachers/teachersService";
import { UsersServiceType } from "./users/usersService";

export interface Context {
  itemsService: ItemsServiceType;
  achievementsService: AchievementsServiceType;
  articlesService: ArticlesServiceType;
  classsService: ClasssServiceType;
  commentsService: CommentsServiceType;
  coursesService: CoursesServiceType;
  gradesService: GradesServiceType;
  schoolsService: SchoolsServiceType;
  sectionsService: SectionsServiceType;
  teachersService: TeachersServiceType;
  usersService: UsersServiceType;
}

export interface User {
  id: string;
  name: string;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  published: boolean;
  authorId: string;
}

export interface Data {
  posts: Post[];
  users: User[];
  idProvider: () => string;
}

export interface Item {
  id: string;
  name: string;
}

export interface Comment {
  id: string;
  name: string;
}
export interface Teacher {
  id: string;
  name: string;
}
export interface Course {
  id: string;
  name: string;
}
export interface Class {
  id: string;
  name: string;
}
export interface School {
  id: string;
  name: string;
}
export interface Section {
  id: string;
  name: string;
}
export interface Grade {
  id: string;
  name: string;
}
export interface Achievement {
  id: string;
  name: string;
}
export interface Article {
  id: string;
  name: string;
}
