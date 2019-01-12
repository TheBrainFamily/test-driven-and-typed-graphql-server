import { Achievement } from "../types";
import { AchievementsRepositoryType } from "./achievementsRepository";

export class AchievementsService {
  constructor(private achievementsRepository: AchievementsRepositoryType) {}

  findAll(): Promise<Achievement[]> {
    return this.achievementsRepository.findAll();
  }

  findByName(name: string): Promise<Achievement | null> {
    return this.achievementsRepository.findByName(name);
  }

  findById(id: string): Promise<Achievement | null> {
    return this.achievementsRepository.findById(id);
  }

  add(name: string): Promise<Achievement> {
    return this.achievementsRepository.add(name);
  }

  removeById(id: string): Promise<string> {
    return this.achievementsRepository.removeById(id);
  }

  removeByName(name: string): Promise<string> {
    return this.achievementsRepository.removeByName(name);
  }
}
export type AchievementsServiceType = AchievementsService;
