import { Grade } from "../types";

// We can easily add another implementation of this particular repository that talks to a real db, microservice, whatever else. As long as the type stays the same, no tests need to rerun besides the one for the new repository implementation
// To do this, we would use IDE to extract interface from the class (select all - and only - the public methods!)
// interface NewGradesRepository {
//     findAll(): Promise<Grade[]>;
// }
// and then change the exported type to the interface instead of the class
// export type GradesRepositoryType = NewGradesRepository;
// At this point we could possibly move this interface and exported type to a separate file (with WebStorm you can use the Move Modules Members refactor, and select both the Interface and the Type), which will keep the app and the tests working and properly typed
let nextId = 1;

export class GradesRepository {
  add(name: string): Promise<Grade> {
    const newGrade = { id: nextId.toString(), name };
    this.grades.push(newGrade);
    nextId++;
    return Promise.resolve(newGrade);
  }
  findById(id: string): Promise<Grade | null> {
    return Promise.resolve(this.grades.find(i => i.id === id) || null);
  }

  removeById(id: string): Promise<string> {
    this.grades = this.grades.filter(i => i.id !== id);
    return Promise.resolve(id);
  }

  findByName(name: string): Promise<Grade | null> {
    return Promise.resolve(this.grades.find(i => i.name === name) || null);
  }
  grades: Grade[] = [];
  public findAll(): Promise<Grade[]> {
    return Promise.resolve(this.grades);
  }

  removeByName(name: string): Promise<string> {
    const gradeToRemove = this.grades.find(i => i.name === name) || { id: "0" };
    this.grades = this.grades.filter(i => i.name !== name);
    return Promise.resolve(gradeToRemove.id);
  }
}

export type GradesRepositoryType = GradesRepository;
