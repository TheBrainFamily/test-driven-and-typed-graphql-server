import { Section } from "../types";
import { SectionsRepositoryType } from "./sectionsRepository";

export class SectionsService {
  constructor(private sectionsRepository: SectionsRepositoryType) {}

  findAll(): Promise<Section[]> {
    return this.sectionsRepository.findAll();
  }

  findByName(name: string): Promise<Section | null> {
    return this.sectionsRepository.findByName(name);
  }

  findById(id: string): Promise<Section | null> {
    return this.sectionsRepository.findById(id);
  }

  add(name: string): Promise<Section> {
    return this.sectionsRepository.add(name);
  }

  removeById(id: string): Promise<string> {
    return this.sectionsRepository.removeById(id);
  }

  removeByName(name: string): Promise<string> {
    return this.sectionsRepository.removeByName(name);
  }
}
export type SectionsServiceType = SectionsService;
