import { Teacher } from "../types";
import { TeachersRepositoryType } from "./teachersRepository";

export class TeachersService {
  constructor(private teachersRepository: TeachersRepositoryType) {}

  findAll(): Promise<Teacher[]> {
    return this.teachersRepository.findAll();
  }

  findByName(name: string): Promise<Teacher | null> {
    return this.teachersRepository.findByName(name);
  }

  findById(id: string): Promise<Teacher | null> {
    return this.teachersRepository.findById(id);
  }

  add(name: string): Promise<Teacher> {
    return this.teachersRepository.add(name);
  }

  removeById(id: string): Promise<string> {
    return this.teachersRepository.removeById(id);
  }

  removeByName(name: string): Promise<string> {
    return this.teachersRepository.removeByName(name);
  }
}
export type TeachersServiceType = TeachersService;
