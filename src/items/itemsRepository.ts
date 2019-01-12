import { Item } from "../types";

// We can easily add another implementation of this particular repository that talks to a real db, microservice, whatever else. As long as the type stays the same, no tests need to rerun besides the one for the new repository implementation
// To do this, we would use IDE to extract interface from the class (select all - and only - the public methods!)
// interface NewItemsRepository {
//     findAll(): Promise<Item[]>;
// }
// and then change the exported type to the interface instead of the class
// export type ItemsRepositoryType = NewItemsRepository;
// At this point we could possibly move this interface and exported type to a separate file (with WebStorm you can use the Move Modules Members refactor, and select both the Interface and the Type), which will keep the app and the tests working and properly typed
let nextId = 1;

export class ItemsRepository {
  add(name: string): Promise<Item> {
    const newItem = { id: nextId.toString(), name };
    this.items.push(newItem);
    nextId++;
    return Promise.resolve(newItem);
  }
  findById(id: string): Promise<Item | null> {
    return Promise.resolve(this.items.find(i => i.id === id) || null);
  }

  removeById(id: string): Promise<string> {
    this.items = this.items.filter(i => i.id !== id);
    return Promise.resolve(id);
  }

  findByName(name: string): Promise<Item | null> {
    return Promise.resolve(this.items.find(i => i.name === name) || null);
  }
  items: Item[] = [];
  public findAll(): Promise<Item[]> {
    return Promise.resolve(this.items);
  }

  removeByName(name: string): Promise<string> {
    const itemToRemove = this.items.find(i => i.name === name) || { id: "0" };
    this.items = this.items.filter(i => i.name !== name);
    return Promise.resolve(itemToRemove.id);
  }
}

export type ItemsRepositoryType = ItemsRepository;
