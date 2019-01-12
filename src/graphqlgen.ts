// Code generated by github.com/prisma/graphqlgen, DO NOT EDIT.

import { GraphQLResolveInfo } from "graphql";
import {
  Item,
  Article,
  Comment,
  User,
  Teacher,
  Course,
  Class,
  School,
  Section,
  Grade,
  Achievement,
  Context
} from "./types";

export namespace QueryResolvers {
  export const defaultResolvers = {};

  export interface ArgsItemFindById {
    id: string;
  }

  export interface ArgsItemFindByName {
    name: string;
  }

  export interface ArgsArticleFindById {
    id: string;
  }

  export interface ArgsArticleFindByName {
    name: string;
  }

  export interface ArgsCommentFindById {
    id: string;
  }

  export interface ArgsCommentFindByName {
    name: string;
  }

  export interface ArgsUserFindById {
    id: string;
  }

  export interface ArgsUserFindByName {
    name: string;
  }

  export interface ArgsTeacherFindById {
    id: string;
  }

  export interface ArgsTeacherFindByName {
    name: string;
  }

  export interface ArgsCourseFindById {
    id: string;
  }

  export interface ArgsCourseFindByName {
    name: string;
  }

  export interface ArgsClassFindById {
    id: string;
  }

  export interface ArgsClassFindByName {
    name: string;
  }

  export interface ArgsSchoolFindById {
    id: string;
  }

  export interface ArgsSchoolFindByName {
    name: string;
  }

  export interface ArgsSectionFindById {
    id: string;
  }

  export interface ArgsSectionFindByName {
    name: string;
  }

  export interface ArgsGradeFindById {
    id: string;
  }

  export interface ArgsGradeFindByName {
    name: string;
  }

  export interface ArgsAchievementFindById {
    id: string;
  }

  export interface ArgsAchievementFindByName {
    name: string;
  }

  export type ItemsFindAllResolver = (
    parent: undefined,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Item[] | null | Promise<Item[] | null>;

  export type ItemFindByIdResolver = (
    parent: undefined,
    args: ArgsItemFindById,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Item | null | Promise<Item | null>;

  export type ItemFindByNameResolver = (
    parent: undefined,
    args: ArgsItemFindByName,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Item | null | Promise<Item | null>;

  export type ArticlesFindAllResolver = (
    parent: undefined,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Article[] | null | Promise<Article[] | null>;

  export type ArticleFindByIdResolver = (
    parent: undefined,
    args: ArgsArticleFindById,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Article | null | Promise<Article | null>;

  export type ArticleFindByNameResolver = (
    parent: undefined,
    args: ArgsArticleFindByName,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Article | null | Promise<Article | null>;

  export type CommentsFindAllResolver = (
    parent: undefined,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Comment[] | null | Promise<Comment[] | null>;

  export type CommentFindByIdResolver = (
    parent: undefined,
    args: ArgsCommentFindById,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Comment | null | Promise<Comment | null>;

  export type CommentFindByNameResolver = (
    parent: undefined,
    args: ArgsCommentFindByName,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Comment | null | Promise<Comment | null>;

  export type UsersFindAllResolver = (
    parent: undefined,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => User[] | null | Promise<User[] | null>;

  export type UserFindByIdResolver = (
    parent: undefined,
    args: ArgsUserFindById,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => User | null | Promise<User | null>;

  export type UserFindByNameResolver = (
    parent: undefined,
    args: ArgsUserFindByName,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => User | null | Promise<User | null>;

  export type TeachersFindAllResolver = (
    parent: undefined,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Teacher[] | null | Promise<Teacher[] | null>;

  export type TeacherFindByIdResolver = (
    parent: undefined,
    args: ArgsTeacherFindById,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Teacher | null | Promise<Teacher | null>;

  export type TeacherFindByNameResolver = (
    parent: undefined,
    args: ArgsTeacherFindByName,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Teacher | null | Promise<Teacher | null>;

  export type CoursesFindAllResolver = (
    parent: undefined,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Course[] | null | Promise<Course[] | null>;

  export type CourseFindByIdResolver = (
    parent: undefined,
    args: ArgsCourseFindById,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Course | null | Promise<Course | null>;

  export type CourseFindByNameResolver = (
    parent: undefined,
    args: ArgsCourseFindByName,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Course | null | Promise<Course | null>;

  export type ClasssFindAllResolver = (
    parent: undefined,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Class[] | null | Promise<Class[] | null>;

  export type ClassFindByIdResolver = (
    parent: undefined,
    args: ArgsClassFindById,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Class | null | Promise<Class | null>;

  export type ClassFindByNameResolver = (
    parent: undefined,
    args: ArgsClassFindByName,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Class | null | Promise<Class | null>;

  export type SchoolsFindAllResolver = (
    parent: undefined,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => School[] | null | Promise<School[] | null>;

  export type SchoolFindByIdResolver = (
    parent: undefined,
    args: ArgsSchoolFindById,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => School | null | Promise<School | null>;

  export type SchoolFindByNameResolver = (
    parent: undefined,
    args: ArgsSchoolFindByName,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => School | null | Promise<School | null>;

  export type SectionsFindAllResolver = (
    parent: undefined,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Section[] | null | Promise<Section[] | null>;

  export type SectionFindByIdResolver = (
    parent: undefined,
    args: ArgsSectionFindById,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Section | null | Promise<Section | null>;

  export type SectionFindByNameResolver = (
    parent: undefined,
    args: ArgsSectionFindByName,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Section | null | Promise<Section | null>;

  export type GradesFindAllResolver = (
    parent: undefined,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Grade[] | null | Promise<Grade[] | null>;

  export type GradeFindByIdResolver = (
    parent: undefined,
    args: ArgsGradeFindById,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Grade | null | Promise<Grade | null>;

  export type GradeFindByNameResolver = (
    parent: undefined,
    args: ArgsGradeFindByName,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Grade | null | Promise<Grade | null>;

  export type AchievementsFindAllResolver = (
    parent: undefined,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Achievement[] | null | Promise<Achievement[] | null>;

  export type AchievementFindByIdResolver = (
    parent: undefined,
    args: ArgsAchievementFindById,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Achievement | null | Promise<Achievement | null>;

  export type AchievementFindByNameResolver = (
    parent: undefined,
    args: ArgsAchievementFindByName,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Achievement | null | Promise<Achievement | null>;

  export interface Type {
    itemsFindAll: (
      parent: undefined,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Item[] | null | Promise<Item[] | null>;

    itemFindById: (
      parent: undefined,
      args: ArgsItemFindById,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Item | null | Promise<Item | null>;

    itemFindByName: (
      parent: undefined,
      args: ArgsItemFindByName,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Item | null | Promise<Item | null>;

    articlesFindAll: (
      parent: undefined,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Article[] | null | Promise<Article[] | null>;

    articleFindById: (
      parent: undefined,
      args: ArgsArticleFindById,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Article | null | Promise<Article | null>;

    articleFindByName: (
      parent: undefined,
      args: ArgsArticleFindByName,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Article | null | Promise<Article | null>;

    commentsFindAll: (
      parent: undefined,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Comment[] | null | Promise<Comment[] | null>;

    commentFindById: (
      parent: undefined,
      args: ArgsCommentFindById,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Comment | null | Promise<Comment | null>;

    commentFindByName: (
      parent: undefined,
      args: ArgsCommentFindByName,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Comment | null | Promise<Comment | null>;

    usersFindAll: (
      parent: undefined,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => User[] | null | Promise<User[] | null>;

    userFindById: (
      parent: undefined,
      args: ArgsUserFindById,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => User | null | Promise<User | null>;

    userFindByName: (
      parent: undefined,
      args: ArgsUserFindByName,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => User | null | Promise<User | null>;

    teachersFindAll: (
      parent: undefined,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Teacher[] | null | Promise<Teacher[] | null>;

    teacherFindById: (
      parent: undefined,
      args: ArgsTeacherFindById,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Teacher | null | Promise<Teacher | null>;

    teacherFindByName: (
      parent: undefined,
      args: ArgsTeacherFindByName,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Teacher | null | Promise<Teacher | null>;

    coursesFindAll: (
      parent: undefined,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Course[] | null | Promise<Course[] | null>;

    courseFindById: (
      parent: undefined,
      args: ArgsCourseFindById,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Course | null | Promise<Course | null>;

    courseFindByName: (
      parent: undefined,
      args: ArgsCourseFindByName,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Course | null | Promise<Course | null>;

    classsFindAll: (
      parent: undefined,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Class[] | null | Promise<Class[] | null>;

    classFindById: (
      parent: undefined,
      args: ArgsClassFindById,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Class | null | Promise<Class | null>;

    classFindByName: (
      parent: undefined,
      args: ArgsClassFindByName,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Class | null | Promise<Class | null>;

    schoolsFindAll: (
      parent: undefined,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => School[] | null | Promise<School[] | null>;

    schoolFindById: (
      parent: undefined,
      args: ArgsSchoolFindById,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => School | null | Promise<School | null>;

    schoolFindByName: (
      parent: undefined,
      args: ArgsSchoolFindByName,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => School | null | Promise<School | null>;

    sectionsFindAll: (
      parent: undefined,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Section[] | null | Promise<Section[] | null>;

    sectionFindById: (
      parent: undefined,
      args: ArgsSectionFindById,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Section | null | Promise<Section | null>;

    sectionFindByName: (
      parent: undefined,
      args: ArgsSectionFindByName,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Section | null | Promise<Section | null>;

    gradesFindAll: (
      parent: undefined,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Grade[] | null | Promise<Grade[] | null>;

    gradeFindById: (
      parent: undefined,
      args: ArgsGradeFindById,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Grade | null | Promise<Grade | null>;

    gradeFindByName: (
      parent: undefined,
      args: ArgsGradeFindByName,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Grade | null | Promise<Grade | null>;

    achievementsFindAll: (
      parent: undefined,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Achievement[] | null | Promise<Achievement[] | null>;

    achievementFindById: (
      parent: undefined,
      args: ArgsAchievementFindById,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Achievement | null | Promise<Achievement | null>;

    achievementFindByName: (
      parent: undefined,
      args: ArgsAchievementFindByName,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Achievement | null | Promise<Achievement | null>;
  }
}

export namespace ItemResolvers {
  export const defaultResolvers = {
    id: (parent: Item) => parent.id,
    name: (parent: Item) => parent.name
  };

  export type IdResolver = (
    parent: Item,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type NameResolver = (
    parent: Item,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export interface Type {
    id: (
      parent: Item,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    name: (
      parent: Item,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
  }
}

export namespace ArticleResolvers {
  export const defaultResolvers = {
    id: (parent: Article) => parent.id,
    name: (parent: Article) => parent.name
  };

  export type IdResolver = (
    parent: Article,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type NameResolver = (
    parent: Article,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export interface Type {
    id: (
      parent: Article,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    name: (
      parent: Article,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
  }
}

export namespace CommentResolvers {
  export const defaultResolvers = {
    id: (parent: Comment) => parent.id,
    name: (parent: Comment) => parent.name
  };

  export type IdResolver = (
    parent: Comment,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type NameResolver = (
    parent: Comment,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export interface Type {
    id: (
      parent: Comment,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    name: (
      parent: Comment,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
  }
}

export namespace UserResolvers {
  export const defaultResolvers = {
    id: (parent: User) => parent.id,
    name: (parent: User) => parent.name
  };

  export type IdResolver = (
    parent: User,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type NameResolver = (
    parent: User,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export interface Type {
    id: (
      parent: User,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    name: (
      parent: User,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
  }
}

export namespace TeacherResolvers {
  export const defaultResolvers = {
    id: (parent: Teacher) => parent.id,
    name: (parent: Teacher) => parent.name
  };

  export type IdResolver = (
    parent: Teacher,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type NameResolver = (
    parent: Teacher,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export interface Type {
    id: (
      parent: Teacher,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    name: (
      parent: Teacher,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
  }
}

export namespace CourseResolvers {
  export const defaultResolvers = {
    id: (parent: Course) => parent.id,
    name: (parent: Course) => parent.name
  };

  export type IdResolver = (
    parent: Course,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type NameResolver = (
    parent: Course,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export interface Type {
    id: (
      parent: Course,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    name: (
      parent: Course,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
  }
}

export namespace ClassResolvers {
  export const defaultResolvers = {
    id: (parent: Class) => parent.id,
    name: (parent: Class) => parent.name
  };

  export type IdResolver = (
    parent: Class,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type NameResolver = (
    parent: Class,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export interface Type {
    id: (
      parent: Class,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    name: (
      parent: Class,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
  }
}

export namespace SchoolResolvers {
  export const defaultResolvers = {
    id: (parent: School) => parent.id,
    name: (parent: School) => parent.name
  };

  export type IdResolver = (
    parent: School,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type NameResolver = (
    parent: School,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export interface Type {
    id: (
      parent: School,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    name: (
      parent: School,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
  }
}

export namespace SectionResolvers {
  export const defaultResolvers = {
    id: (parent: Section) => parent.id,
    name: (parent: Section) => parent.name
  };

  export type IdResolver = (
    parent: Section,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type NameResolver = (
    parent: Section,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export interface Type {
    id: (
      parent: Section,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    name: (
      parent: Section,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
  }
}

export namespace GradeResolvers {
  export const defaultResolvers = {
    id: (parent: Grade) => parent.id,
    name: (parent: Grade) => parent.name
  };

  export type IdResolver = (
    parent: Grade,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type NameResolver = (
    parent: Grade,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export interface Type {
    id: (
      parent: Grade,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    name: (
      parent: Grade,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
  }
}

export namespace AchievementResolvers {
  export const defaultResolvers = {
    id: (parent: Achievement) => parent.id,
    name: (parent: Achievement) => parent.name
  };

  export type IdResolver = (
    parent: Achievement,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type NameResolver = (
    parent: Achievement,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export interface Type {
    id: (
      parent: Achievement,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    name: (
      parent: Achievement,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
  }
}

export namespace MutationResolvers {
  export const defaultResolvers = {};

  export interface ArgsItemAdd {
    name: string;
  }

  export interface ArgsItemRemoveById {
    id: string;
  }

  export interface ArgsItemRemoveByName {
    name: string;
  }

  export interface ArgsArticleAdd {
    name: string;
  }

  export interface ArgsArticleRemoveById {
    id: string;
  }

  export interface ArgsArticleRemoveByName {
    name: string;
  }

  export interface ArgsCommentAdd {
    name: string;
  }

  export interface ArgsCommentRemoveById {
    id: string;
  }

  export interface ArgsCommentRemoveByName {
    name: string;
  }

  export interface ArgsUserAdd {
    name: string;
  }

  export interface ArgsUserRemoveById {
    id: string;
  }

  export interface ArgsUserRemoveByName {
    name: string;
  }

  export interface ArgsTeacherAdd {
    name: string;
  }

  export interface ArgsTeacherRemoveById {
    id: string;
  }

  export interface ArgsTeacherRemoveByName {
    name: string;
  }

  export interface ArgsCourseAdd {
    name: string;
  }

  export interface ArgsCourseRemoveById {
    id: string;
  }

  export interface ArgsCourseRemoveByName {
    name: string;
  }

  export interface ArgsClassAdd {
    name: string;
  }

  export interface ArgsClassRemoveById {
    id: string;
  }

  export interface ArgsClassRemoveByName {
    name: string;
  }

  export interface ArgsSchoolAdd {
    name: string;
  }

  export interface ArgsSchoolRemoveById {
    id: string;
  }

  export interface ArgsSchoolRemoveByName {
    name: string;
  }

  export interface ArgsSectionAdd {
    name: string;
  }

  export interface ArgsSectionRemoveById {
    id: string;
  }

  export interface ArgsSectionRemoveByName {
    name: string;
  }

  export interface ArgsGradeAdd {
    name: string;
  }

  export interface ArgsGradeRemoveById {
    id: string;
  }

  export interface ArgsGradeRemoveByName {
    name: string;
  }

  export interface ArgsAchievementAdd {
    name: string;
  }

  export interface ArgsAchievementRemoveById {
    id: string;
  }

  export interface ArgsAchievementRemoveByName {
    name: string;
  }

  export type ItemAddResolver = (
    parent: undefined,
    args: ArgsItemAdd,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Item | null | Promise<Item | null>;

  export type ItemRemoveByIdResolver = (
    parent: undefined,
    args: ArgsItemRemoveById,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export type ItemRemoveByNameResolver = (
    parent: undefined,
    args: ArgsItemRemoveByName,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export type ArticleAddResolver = (
    parent: undefined,
    args: ArgsArticleAdd,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Article | null | Promise<Article | null>;

  export type ArticleRemoveByIdResolver = (
    parent: undefined,
    args: ArgsArticleRemoveById,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export type ArticleRemoveByNameResolver = (
    parent: undefined,
    args: ArgsArticleRemoveByName,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export type CommentAddResolver = (
    parent: undefined,
    args: ArgsCommentAdd,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Comment | null | Promise<Comment | null>;

  export type CommentRemoveByIdResolver = (
    parent: undefined,
    args: ArgsCommentRemoveById,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export type CommentRemoveByNameResolver = (
    parent: undefined,
    args: ArgsCommentRemoveByName,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export type UserAddResolver = (
    parent: undefined,
    args: ArgsUserAdd,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => User | null | Promise<User | null>;

  export type UserRemoveByIdResolver = (
    parent: undefined,
    args: ArgsUserRemoveById,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export type UserRemoveByNameResolver = (
    parent: undefined,
    args: ArgsUserRemoveByName,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export type TeacherAddResolver = (
    parent: undefined,
    args: ArgsTeacherAdd,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Teacher | null | Promise<Teacher | null>;

  export type TeacherRemoveByIdResolver = (
    parent: undefined,
    args: ArgsTeacherRemoveById,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export type TeacherRemoveByNameResolver = (
    parent: undefined,
    args: ArgsTeacherRemoveByName,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export type CourseAddResolver = (
    parent: undefined,
    args: ArgsCourseAdd,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Course | null | Promise<Course | null>;

  export type CourseRemoveByIdResolver = (
    parent: undefined,
    args: ArgsCourseRemoveById,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export type CourseRemoveByNameResolver = (
    parent: undefined,
    args: ArgsCourseRemoveByName,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export type ClassAddResolver = (
    parent: undefined,
    args: ArgsClassAdd,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Class | null | Promise<Class | null>;

  export type ClassRemoveByIdResolver = (
    parent: undefined,
    args: ArgsClassRemoveById,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export type ClassRemoveByNameResolver = (
    parent: undefined,
    args: ArgsClassRemoveByName,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export type SchoolAddResolver = (
    parent: undefined,
    args: ArgsSchoolAdd,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => School | null | Promise<School | null>;

  export type SchoolRemoveByIdResolver = (
    parent: undefined,
    args: ArgsSchoolRemoveById,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export type SchoolRemoveByNameResolver = (
    parent: undefined,
    args: ArgsSchoolRemoveByName,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export type SectionAddResolver = (
    parent: undefined,
    args: ArgsSectionAdd,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Section | null | Promise<Section | null>;

  export type SectionRemoveByIdResolver = (
    parent: undefined,
    args: ArgsSectionRemoveById,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export type SectionRemoveByNameResolver = (
    parent: undefined,
    args: ArgsSectionRemoveByName,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export type GradeAddResolver = (
    parent: undefined,
    args: ArgsGradeAdd,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Grade | null | Promise<Grade | null>;

  export type GradeRemoveByIdResolver = (
    parent: undefined,
    args: ArgsGradeRemoveById,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export type GradeRemoveByNameResolver = (
    parent: undefined,
    args: ArgsGradeRemoveByName,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export type AchievementAddResolver = (
    parent: undefined,
    args: ArgsAchievementAdd,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Achievement | null | Promise<Achievement | null>;

  export type AchievementRemoveByIdResolver = (
    parent: undefined,
    args: ArgsAchievementRemoveById,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export type AchievementRemoveByNameResolver = (
    parent: undefined,
    args: ArgsAchievementRemoveByName,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export interface Type {
    itemAdd: (
      parent: undefined,
      args: ArgsItemAdd,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Item | null | Promise<Item | null>;

    itemRemoveById: (
      parent: undefined,
      args: ArgsItemRemoveById,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;

    itemRemoveByName: (
      parent: undefined,
      args: ArgsItemRemoveByName,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;

    articleAdd: (
      parent: undefined,
      args: ArgsArticleAdd,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Article | null | Promise<Article | null>;

    articleRemoveById: (
      parent: undefined,
      args: ArgsArticleRemoveById,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;

    articleRemoveByName: (
      parent: undefined,
      args: ArgsArticleRemoveByName,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;

    commentAdd: (
      parent: undefined,
      args: ArgsCommentAdd,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Comment | null | Promise<Comment | null>;

    commentRemoveById: (
      parent: undefined,
      args: ArgsCommentRemoveById,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;

    commentRemoveByName: (
      parent: undefined,
      args: ArgsCommentRemoveByName,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;

    userAdd: (
      parent: undefined,
      args: ArgsUserAdd,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => User | null | Promise<User | null>;

    userRemoveById: (
      parent: undefined,
      args: ArgsUserRemoveById,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;

    userRemoveByName: (
      parent: undefined,
      args: ArgsUserRemoveByName,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;

    teacherAdd: (
      parent: undefined,
      args: ArgsTeacherAdd,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Teacher | null | Promise<Teacher | null>;

    teacherRemoveById: (
      parent: undefined,
      args: ArgsTeacherRemoveById,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;

    teacherRemoveByName: (
      parent: undefined,
      args: ArgsTeacherRemoveByName,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;

    courseAdd: (
      parent: undefined,
      args: ArgsCourseAdd,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Course | null | Promise<Course | null>;

    courseRemoveById: (
      parent: undefined,
      args: ArgsCourseRemoveById,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;

    courseRemoveByName: (
      parent: undefined,
      args: ArgsCourseRemoveByName,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;

    classAdd: (
      parent: undefined,
      args: ArgsClassAdd,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Class | null | Promise<Class | null>;

    classRemoveById: (
      parent: undefined,
      args: ArgsClassRemoveById,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;

    classRemoveByName: (
      parent: undefined,
      args: ArgsClassRemoveByName,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;

    schoolAdd: (
      parent: undefined,
      args: ArgsSchoolAdd,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => School | null | Promise<School | null>;

    schoolRemoveById: (
      parent: undefined,
      args: ArgsSchoolRemoveById,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;

    schoolRemoveByName: (
      parent: undefined,
      args: ArgsSchoolRemoveByName,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;

    sectionAdd: (
      parent: undefined,
      args: ArgsSectionAdd,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Section | null | Promise<Section | null>;

    sectionRemoveById: (
      parent: undefined,
      args: ArgsSectionRemoveById,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;

    sectionRemoveByName: (
      parent: undefined,
      args: ArgsSectionRemoveByName,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;

    gradeAdd: (
      parent: undefined,
      args: ArgsGradeAdd,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Grade | null | Promise<Grade | null>;

    gradeRemoveById: (
      parent: undefined,
      args: ArgsGradeRemoveById,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;

    gradeRemoveByName: (
      parent: undefined,
      args: ArgsGradeRemoveByName,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;

    achievementAdd: (
      parent: undefined,
      args: ArgsAchievementAdd,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Achievement | null | Promise<Achievement | null>;

    achievementRemoveById: (
      parent: undefined,
      args: ArgsAchievementRemoveById,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;

    achievementRemoveByName: (
      parent: undefined,
      args: ArgsAchievementRemoveByName,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;
  }
}

export interface Resolvers {
  Query: QueryResolvers.Type;
  Item: ItemResolvers.Type;
  Article: ArticleResolvers.Type;
  Comment: CommentResolvers.Type;
  User: UserResolvers.Type;
  Teacher: TeacherResolvers.Type;
  Course: CourseResolvers.Type;
  Class: ClassResolvers.Type;
  School: SchoolResolvers.Type;
  Section: SectionResolvers.Type;
  Grade: GradeResolvers.Type;
  Achievement: AchievementResolvers.Type;
  Mutation: MutationResolvers.Type;
}
