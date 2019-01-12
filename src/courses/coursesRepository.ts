import { Course } from "../types";

// We can easily add another implementation of this particular repository that talks to a real db, microservice, whatever else. As long as the type stays the same, no tests need to rerun besides the one for the new repository implementation
// To do this, we would use IDE to extract interface from the class (select all - and only - the public methods!)
// interface NewCoursesRepository {
//     findAll(): Promise<Course[]>;
// }
// and then change the exported type to the interface instead of the class
// export type CoursesRepositoryType = NewCoursesRepository;
// At this point we could possibly move this interface and exported type to a separate file (with WebStorm you can use the Move Modules Members refactor, and select both the Interface and the Type), which will keep the app and the tests working and properly typed
let nextId = 1;

export class CoursesRepository {
  add(name: string): Promise<Course> {
    const newCourse = { id: nextId.toString(), name };
    this.courses.push(newCourse);
    nextId++;
    return Promise.resolve(newCourse);
  }
  findById(id: string): Promise<Course | null> {
    return Promise.resolve(this.courses.find(i => i.id === id) || null);
  }

  removeById(id: string): Promise<string> {
    this.courses = this.courses.filter(i => i.id !== id);
    return Promise.resolve(id);
  }

  findByName(name: string): Promise<Course | null> {
    return Promise.resolve(this.courses.find(i => i.name === name) || null);
  }
  courses: Course[] = [];
  public findAll(): Promise<Course[]> {
    return Promise.resolve(this.courses);
  }

  removeByName(name: string): Promise<string> {
    const courseToRemove = this.courses.find(i => i.name === name) || { id: "0" };
    this.courses = this.courses.filter(i => i.name !== name);
    return Promise.resolve(courseToRemove.id);
  }
}

export type CoursesRepositoryType = CoursesRepository;
