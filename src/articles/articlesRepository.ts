import { Article } from "../types";

// We can easily add another implementation of this particular repository that talks to a real db, microservice, whatever else. As long as the type stays the same, no tests need to rerun besides the one for the new repository implementation
// To do this, we would use IDE to extract interface from the class (select all - and only - the public methods!)
// interface NewArticlesRepository {
//     findAll(): Promise<Article[]>;
// }
// and then change the exported type to the interface instead of the class
// export type ArticlesRepositoryType = NewArticlesRepository;
// At this point we could possibly move this interface and exported type to a separate file (with WebStorm you can use the Move Modules Members refactor, and select both the Interface and the Type), which will keep the app and the tests working and properly typed
let nextId = 1;

export class ArticlesRepository {
  add(name: string): Promise<Article> {
    const newArticle = { id: nextId.toString(), name };
    this.articles.push(newArticle);
    nextId++;
    return Promise.resolve(newArticle);
  }
  findById(id: string): Promise<Article | null> {
    return Promise.resolve(this.articles.find(i => i.id === id) || null);
  }

  removeById(id: string): Promise<string> {
    this.articles = this.articles.filter(i => i.id !== id);
    return Promise.resolve(id);
  }

  findByName(name: string): Promise<Article | null> {
    return Promise.resolve(this.articles.find(i => i.name === name) || null);
  }
  articles: Article[] = [];
  public findAll(): Promise<Article[]> {
    return Promise.resolve(this.articles);
  }

  removeByName(name: string): Promise<string> {
    const articleToRemove = this.articles.find(i => i.name === name) || { id: "0" };
    this.articles = this.articles.filter(i => i.name !== name);
    return Promise.resolve(articleToRemove.id);
  }
}

export type ArticlesRepositoryType = ArticlesRepository;
