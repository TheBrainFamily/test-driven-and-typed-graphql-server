import { Section } from "../types";

// We can easily add another implementation of this particular repository that talks to a real db, microservice, whatever else. As long as the type stays the same, no tests need to rerun besides the one for the new repository implementation
// To do this, we would use IDE to extract interface from the class (select all - and only - the public methods!)
// interface NewSectionsRepository {
//     findAll(): Promise<Section[]>;
// }
// and then change the exported type to the interface instead of the class
// export type SectionsRepositoryType = NewSectionsRepository;
// At this point we could possibly move this interface and exported type to a separate file (with WebStorm you can use the Move Modules Members refactor, and select both the Interface and the Type), which will keep the app and the tests working and properly typed
let nextId = 1;

export class SectionsRepository {
  add(name: string): Promise<Section> {
    const newSection = { id: nextId.toString(), name };
    this.sections.push(newSection);
    nextId++;
    return Promise.resolve(newSection);
  }
  findById(id: string): Promise<Section | null> {
    return Promise.resolve(this.sections.find(i => i.id === id) || null);
  }

  removeById(id: string): Promise<string> {
    this.sections = this.sections.filter(i => i.id !== id);
    return Promise.resolve(id);
  }

  findByName(name: string): Promise<Section | null> {
    return Promise.resolve(this.sections.find(i => i.name === name) || null);
  }
  sections: Section[] = [];
  public findAll(): Promise<Section[]> {
    return Promise.resolve(this.sections);
  }

  removeByName(name: string): Promise<string> {
    const sectionToRemove = this.sections.find(i => i.name === name) || { id: "0" };
    this.sections = this.sections.filter(i => i.name !== name);
    return Promise.resolve(sectionToRemove.id);
  }
}

export type SectionsRepositoryType = SectionsRepository;
