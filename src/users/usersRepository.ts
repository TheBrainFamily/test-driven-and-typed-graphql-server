import { User } from "../types";

// We can easily add another implementation of this particular repository that talks to a real db, microservice, whatever else. As long as the type stays the same, no tests need to rerun besides the one for the new repository implementation
// To do this, we would use IDE to extract interface from the class (select all - and only - the public methods!)
// interface NewUsersRepository {
//     findAll(): Promise<User[]>;
// }
// and then change the exported type to the interface instead of the class
// export type UsersRepositoryType = NewUsersRepository;
// At this point we could possibly move this interface and exported type to a separate file (with WebStorm you can use the Move Modules Members refactor, and select both the Interface and the Type), which will keep the app and the tests working and properly typed
let nextId = 1;

export class UsersRepository {
  add(name: string): Promise<User> {
    const newUser = { id: nextId.toString(), name };
    this.users.push(newUser);
    nextId++;
    return Promise.resolve(newUser);
  }
  findById(id: string): Promise<User | null> {
    return Promise.resolve(this.users.find(i => i.id === id) || null);
  }

  removeById(id: string): Promise<string> {
    this.users = this.users.filter(i => i.id !== id);
    return Promise.resolve(id);
  }

  findByName(name: string): Promise<User | null> {
    return Promise.resolve(this.users.find(i => i.name === name) || null);
  }
  users: User[] = [];
  public findAll(): Promise<User[]> {
    return Promise.resolve(this.users);
  }

  removeByName(name: string): Promise<string> {
    const userToRemove = this.users.find(i => i.name === name) || { id: "0" };
    this.users = this.users.filter(i => i.name !== name);
    return Promise.resolve(userToRemove.id);
  }
}

export type UsersRepositoryType = UsersRepository;
