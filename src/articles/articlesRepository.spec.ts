import { ArticlesRepository } from "./articlesRepository";

test("It gets articles from in memory store", async () => {
  const articlesRepository = new ArticlesRepository();

  articlesRepository.articles.push({ id: "1", name: "article" });

  const result = await articlesRepository.findAll();
  expect(result).toEqual([{ id: "1", name: "article" }]);
});

test("it adds the article to the memory store", async () => {
  const articlesRepository = new ArticlesRepository();

  const result = await articlesRepository.add("article");

  expect(result).toEqual({ id: "1", name: "article" });
  expect(!!articlesRepository.articles.find(i => i.name === "article")).toEqual(true);
});

test("it returns the added article", async () => {
  const articlesRepository = new ArticlesRepository();

  await articlesRepository.add("article");

  expect(!!articlesRepository.articles.find(i => i.name === "article")).toEqual(true);
});

test("finds by id", async () => {
  const articlesRepository = new ArticlesRepository();
  articlesRepository.articles.push({ id: "1", name: "article" });

  const result = await articlesRepository.findById("1");

  expect(result).toEqual({ id: "1", name: "article" });
});

test("removes by id removes from the datastore", async () => {
  const articlesRepository = new ArticlesRepository();
  articlesRepository.articles.push({ id: "1", name: "article" });

  await articlesRepository.removeById("1");

  expect(!!articlesRepository.articles.find(i => i.id === "1")).toBeFalsy();
});

test("removes by id returns the id", async () => {
  const articlesRepository = new ArticlesRepository();
  articlesRepository.articles.push({ id: "1", name: "article" });

  const result = await articlesRepository.removeById("1");

  expect(result).toEqual("1");
});

test("removes by name removes from the datastore", async () => {
  const articlesRepository = new ArticlesRepository();
  articlesRepository.articles.push({ id: "1", name: "article" });

  await articlesRepository.removeByName("article");

  expect(!!articlesRepository.articles.find(i => i.id === "1")).toBeFalsy();
});

test("removes by name returns the id", async () => {
  const articlesRepository = new ArticlesRepository();
  articlesRepository.articles.push({ id: "1", name: "article" });

  const result = await articlesRepository.removeByName("article");

  expect(result).toEqual("1");
});

test("when nothing to remove return 0", async () => {
  const articlesRepository = new ArticlesRepository();
  articlesRepository.articles.push({ id: "1", name: "article" });

  const result = await articlesRepository.removeByName("nonexisting");

  expect(result).toEqual("0");
});

test("finds by name", async () => {
  const articlesRepository = new ArticlesRepository();
  articlesRepository.articles.push({ id: "1", name: "article" });

  const result = await articlesRepository.findByName("article");

  expect(result).toEqual({ id: "1", name: "article" });
});
