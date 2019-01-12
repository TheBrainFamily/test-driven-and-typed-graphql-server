import { Grade } from "../types";
import { GradesRepositoryType } from "./gradesRepository";

export class GradesService {
  constructor(private gradesRepository: GradesRepositoryType) {}

  findAll(): Promise<Grade[]> {
    return this.gradesRepository.findAll();
  }

  findByName(name: string): Promise<Grade | null> {
    return this.gradesRepository.findByName(name);
  }

  findById(id: string): Promise<Grade | null> {
    return this.gradesRepository.findById(id);
  }

  add(name: string): Promise<Grade> {
    return this.gradesRepository.add(name);
  }

  removeById(id: string): Promise<string> {
    return this.gradesRepository.removeById(id);
  }

  removeByName(name: string): Promise<string> {
    return this.gradesRepository.removeByName(name);
  }
}
export type GradesServiceType = GradesService;
