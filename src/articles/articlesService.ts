import { Article } from "../types";
import { ArticlesRepositoryType } from "./articlesRepository";

export class ArticlesService {
  constructor(private articlesRepository: ArticlesRepositoryType) {}

  findAll(): Promise<Article[]> {
    return this.articlesRepository.findAll();
  }

  findByName(name: string): Promise<Article | null> {
    return this.articlesRepository.findByName(name);
  }

  findById(id: string): Promise<Article | null> {
    return this.articlesRepository.findById(id);
  }

  add(name: string): Promise<Article> {
    return this.articlesRepository.add(name);
  }

  removeById(id: string): Promise<string> {
    return this.articlesRepository.removeById(id);
  }

  removeByName(name: string): Promise<string> {
    return this.articlesRepository.removeByName(name);
  }
}
export type ArticlesServiceType = ArticlesService;
