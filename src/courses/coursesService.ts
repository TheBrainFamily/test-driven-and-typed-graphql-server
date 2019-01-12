import { Course } from "../types";
import { CoursesRepositoryType } from "./coursesRepository";

export class CoursesService {
  constructor(private coursesRepository: CoursesRepositoryType) {}

  findAll(): Promise<Course[]> {
    return this.coursesRepository.findAll();
  }

  findByName(name: string): Promise<Course | null> {
    return this.coursesRepository.findByName(name);
  }

  findById(id: string): Promise<Course | null> {
    return this.coursesRepository.findById(id);
  }

  add(name: string): Promise<Course> {
    return this.coursesRepository.add(name);
  }

  removeById(id: string): Promise<string> {
    return this.coursesRepository.removeById(id);
  }

  removeByName(name: string): Promise<string> {
    return this.coursesRepository.removeByName(name);
  }
}
export type CoursesServiceType = CoursesService;
