import { User } from "../types";
import { UsersRepositoryType } from "./usersRepository";

export class UsersService {
  constructor(private usersRepository: UsersRepositoryType) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.findAll();
  }

  findByName(name: string): Promise<User | null> {
    return this.usersRepository.findByName(name);
  }

  findById(id: string): Promise<User | null> {
    return this.usersRepository.findById(id);
  }

  add(name: string): Promise<User> {
    return this.usersRepository.add(name);
  }

  removeById(id: string): Promise<string> {
    return this.usersRepository.removeById(id);
  }

  removeByName(name: string): Promise<string> {
    return this.usersRepository.removeByName(name);
  }
}
export type UsersServiceType = UsersService;
