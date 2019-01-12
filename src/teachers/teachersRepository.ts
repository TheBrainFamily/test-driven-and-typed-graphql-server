import { Teacher } from "../types";

// We can easily add another implementation of this particular repository that talks to a real db, microservice, whatever else. As long as the type stays the same, no tests need to rerun besides the one for the new repository implementation
// To do this, we would use IDE to extract interface from the class (select all - and only - the public methods!)
// interface NewTeachersRepository {
//     findAll(): Promise<Teacher[]>;
// }
// and then change the exported type to the interface instead of the class
// export type TeachersRepositoryType = NewTeachersRepository;
// At this point we could possibly move this interface and exported type to a separate file (with WebStorm you can use the Move Modules Members refactor, and select both the Interface and the Type), which will keep the app and the tests working and properly typed
let nextId = 1;

export class TeachersRepository {
  add(name: string): Promise<Teacher> {
    const newTeacher = { id: nextId.toString(), name };
    this.teachers.push(newTeacher);
    nextId++;
    return Promise.resolve(newTeacher);
  }
  findById(id: string): Promise<Teacher | null> {
    return Promise.resolve(this.teachers.find(i => i.id === id) || null);
  }

  removeById(id: string): Promise<string> {
    this.teachers = this.teachers.filter(i => i.id !== id);
    return Promise.resolve(id);
  }

  findByName(name: string): Promise<Teacher | null> {
    return Promise.resolve(this.teachers.find(i => i.name === name) || null);
  }
  teachers: Teacher[] = [];
  public findAll(): Promise<Teacher[]> {
    return Promise.resolve(this.teachers);
  }

  removeByName(name: string): Promise<string> {
    const teacherToRemove = this.teachers.find(i => i.name === name) || { id: "0" };
    this.teachers = this.teachers.filter(i => i.name !== name);
    return Promise.resolve(teacherToRemove.id);
  }
}

export type TeachersRepositoryType = TeachersRepository;
