import {ItemsServiceType} from "./items/itemsService";

export interface Context {
  itemsService: ItemsServiceType;
}

export interface User {
  id: string
  name: string | null
  postIDs: string[]
}

export interface Post {
  id: string
  title: string
  content: string
  published: boolean
  authorId: string
}

export interface Data {
  posts: Post[]
  users: User[]
  idProvider: () => string
}

export interface Item {
  id: string
  name: string
}

export interface Comment {
  id: string
  name: string
}
export interface Teacher {
  id: string
  name: string
}
export interface Course {
  id: string
  name: string
}
export interface Class {
  id: string
  name: string
}
export interface School {
  id: string
  name: string
}
export interface Section {
  id: string
  name: string
}
export interface Grade {
  id: string
  name: string
}
export interface Achievement {
  id: string
  name: string
}
export interface Article {
  id: string
  name: string
}


