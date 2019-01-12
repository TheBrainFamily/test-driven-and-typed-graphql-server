import { School } from "../types";

// We can easily add another implementation of this particular repository that talks to a real db, microservice, whatever else. As long as the type stays the same, no tests need to rerun besides the one for the new repository implementation
// To do this, we would use IDE to extract interface from the class (select all - and only - the public methods!)
// interface NewSchoolsRepository {
//     findAll(): Promise<School[]>;
// }
// and then change the exported type to the interface instead of the class
// export type SchoolsRepositoryType = NewSchoolsRepository;
// At this point we could possibly move this interface and exported type to a separate file (with WebStorm you can use the Move Modules Members refactor, and select both the Interface and the Type), which will keep the app and the tests working and properly typed
let nextId = 1;

export class SchoolsRepository {
  add(name: string): Promise<School> {
    const newSchool = { id: nextId.toString(), name };
    this.schools.push(newSchool);
    nextId++;
    return Promise.resolve(newSchool);
  }
  findById(id: string): Promise<School | null> {
    return Promise.resolve(this.schools.find(i => i.id === id) || null);
  }

  removeById(id: string): Promise<string> {
    this.schools = this.schools.filter(i => i.id !== id);
    return Promise.resolve(id);
  }

  findByName(name: string): Promise<School | null> {
    return Promise.resolve(this.schools.find(i => i.name === name) || null);
  }
  schools: School[] = [];
  public findAll(): Promise<School[]> {
    return Promise.resolve(this.schools);
  }

  removeByName(name: string): Promise<string> {
    const schoolToRemove = this.schools.find(i => i.name === name) || { id: "0" };
    this.schools = this.schools.filter(i => i.name !== name);
    return Promise.resolve(schoolToRemove.id);
  }
}

export type SchoolsRepositoryType = SchoolsRepository;
