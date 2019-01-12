import { Achievement } from "../types";

// We can easily add another implementation of this particular repository that talks to a real db, microservice, whatever else. As long as the type stays the same, no tests need to rerun besides the one for the new repository implementation
// To do this, we would use IDE to extract interface from the class (select all - and only - the public methods!)
// interface NewAchievementsRepository {
//     findAll(): Promise<Achievement[]>;
// }
// and then change the exported type to the interface instead of the class
// export type AchievementsRepositoryType = NewAchievementsRepository;
// At this point we could possibly move this interface and exported type to a separate file (with WebStorm you can use the Move Modules Members refactor, and select both the Interface and the Type), which will keep the app and the tests working and properly typed
let nextId = 1;

export class AchievementsRepository {
  add(name: string): Promise<Achievement> {
    const newAchievement = { id: nextId.toString(), name };
    this.achievements.push(newAchievement);
    nextId++;
    return Promise.resolve(newAchievement);
  }
  findById(id: string): Promise<Achievement | null> {
    return Promise.resolve(this.achievements.find(i => i.id === id) || null);
  }

  removeById(id: string): Promise<string> {
    this.achievements = this.achievements.filter(i => i.id !== id);
    return Promise.resolve(id);
  }

  findByName(name: string): Promise<Achievement | null> {
    return Promise.resolve(this.achievements.find(i => i.name === name) || null);
  }
  achievements: Achievement[] = [];
  public findAll(): Promise<Achievement[]> {
    return Promise.resolve(this.achievements);
  }

  removeByName(name: string): Promise<string> {
    const achievementToRemove = this.achievements.find(i => i.name === name) || { id: "0" };
    this.achievements = this.achievements.filter(i => i.name !== name);
    return Promise.resolve(achievementToRemove.id);
  }
}

export type AchievementsRepositoryType = AchievementsRepository;
