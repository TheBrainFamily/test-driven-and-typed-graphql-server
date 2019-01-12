import { Class } from "../types";
import { ClasssRepositoryType } from "./classsRepository";

export class ClasssService {
  constructor(private classsRepository: ClasssRepositoryType) {}

  findAll(): Promise<Class[]> {
    return this.classsRepository.findAll();
  }

  findByName(name: string): Promise<Class | null> {
    return this.classsRepository.findByName(name);
  }

  findById(id: string): Promise<Class | null> {
    return this.classsRepository.findById(id);
  }

  add(name: string): Promise<Class> {
    return this.classsRepository.add(name);
  }

  removeById(id: string): Promise<string> {
    return this.classsRepository.removeById(id);
  }

  removeByName(name: string): Promise<string> {
    return this.classsRepository.removeByName(name);
  }
}
export type ClasssServiceType = ClasssService;
