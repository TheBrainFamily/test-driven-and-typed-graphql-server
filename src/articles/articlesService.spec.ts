import * as td from "testdouble";
import { ArticlesService } from "./articlesService";
import { when } from "../resolvers/testHelpers/when";
import { ArticlesRepositoryType } from "./articlesRepository";

test("It passes all from the repository", async () => {
  const articlesRepository = td.object<ArticlesRepositoryType>();
  const articlesService = new ArticlesService(articlesRepository);

  when(articlesRepository.findAll()).thenResolve([
    {
      id: "1",
      name: "article"
    }
  ]);

  const result = await articlesService.findAll();
  expect(result).toEqual([{ id: "1", name: "article" }]);
});

test("Finds by name from the repository", async () => {
  const articlesRepository = td.object<ArticlesRepositoryType>();
  const articlesService = new ArticlesService(articlesRepository);

  when(articlesRepository.findByName("article")).thenResolve({
    id: "1",
    name: "article"
  });

  const result = await articlesService.findByName("article");
  expect(result).toEqual({ id: "1", name: "article" });
});

test("Finds by id from the repository", async () => {
  const articlesRepository = td.object<ArticlesRepositoryType>();
  const articlesService = new ArticlesService(articlesRepository);

  when(articlesRepository.findById("1")).thenResolve({
    id: "1",
    name: "article"
  });

  const result = await articlesService.findById("1");
  expect(result).toEqual({ id: "1", name: "article" });
});

test("Adds to the repository", async () => {
  const articlesRepository = td.object<ArticlesRepositoryType>();
  const articlesService = new ArticlesService(articlesRepository);

  when(articlesRepository.add("article")).thenResolve({
    id: "1",
    name: "article"
  });

  const result = await articlesService.add("article");
  expect(result).toEqual({ id: "1", name: "article" });
});

test("Removes from the repository by name", async () => {
  const articlesRepository = td.object<ArticlesRepositoryType>();
  const articlesService = new ArticlesService(articlesRepository);

  when(articlesRepository.removeByName("article")).thenResolve("1");

  const result = await articlesService.removeByName("article");
  expect(result).toEqual("1");
});

test("Removes from the repository by id", async () => {
  const articlesRepository = td.object<ArticlesRepositoryType>();
  const articlesService = new ArticlesService(articlesRepository);

  when(articlesRepository.removeById("1")).thenResolve("1");

  const result = await articlesService.removeById("1");
  expect(result).toEqual("1");
});
