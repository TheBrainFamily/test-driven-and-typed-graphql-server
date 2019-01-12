import { School } from "../types";
import { SchoolsRepositoryType } from "./schoolsRepository";

export class SchoolsService {
  constructor(private schoolsRepository: SchoolsRepositoryType) {}

  findAll(): Promise<School[]> {
    return this.schoolsRepository.findAll();
  }

  findByName(name: string): Promise<School | null> {
    return this.schoolsRepository.findByName(name);
  }

  findById(id: string): Promise<School | null> {
    return this.schoolsRepository.findById(id);
  }

  add(name: string): Promise<School> {
    return this.schoolsRepository.add(name);
  }

  removeById(id: string): Promise<string> {
    return this.schoolsRepository.removeById(id);
  }

  removeByName(name: string): Promise<string> {
    return this.schoolsRepository.removeByName(name);
  }
}
export type SchoolsServiceType = SchoolsService;
