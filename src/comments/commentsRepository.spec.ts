import { CommentsRepository } from "./commentsRepository";

test("It gets comments from in memory store", async () => {
  const commentsRepository = new CommentsRepository();

  commentsRepository.comments.push({ id: "1", name: "comment" });

  const result = await commentsRepository.findAll();
  expect(result).toEqual([{ id: "1", name: "comment" }]);
});

test("it adds the comment to the memory store", async () => {
  const commentsRepository = new CommentsRepository();

  const result = await commentsRepository.add("comment");

  expect(result).toEqual({ id: "1", name: "comment" });
  expect(!!commentsRepository.comments.find(i => i.name === "comment")).toEqual(true);
});

test("it returns the added comment", async () => {
  const commentsRepository = new CommentsRepository();

  await commentsRepository.add("comment");

  expect(!!commentsRepository.comments.find(i => i.name === "comment")).toEqual(true);
});

test("finds by id", async () => {
  const commentsRepository = new CommentsRepository();
  commentsRepository.comments.push({ id: "1", name: "comment" });

  const result = await commentsRepository.findById("1");

  expect(result).toEqual({ id: "1", name: "comment" });
});

test("removes by id removes from the datastore", async () => {
  const commentsRepository = new CommentsRepository();
  commentsRepository.comments.push({ id: "1", name: "comment" });

  await commentsRepository.removeById("1");

  expect(!!commentsRepository.comments.find(i => i.id === "1")).toBeFalsy();
});

test("removes by id returns the id", async () => {
  const commentsRepository = new CommentsRepository();
  commentsRepository.comments.push({ id: "1", name: "comment" });

  const result = await commentsRepository.removeById("1");

  expect(result).toEqual("1");
});

test("removes by name removes from the datastore", async () => {
  const commentsRepository = new CommentsRepository();
  commentsRepository.comments.push({ id: "1", name: "comment" });

  await commentsRepository.removeByName("comment");

  expect(!!commentsRepository.comments.find(i => i.id === "1")).toBeFalsy();
});

test("removes by name returns the id", async () => {
  const commentsRepository = new CommentsRepository();
  commentsRepository.comments.push({ id: "1", name: "comment" });

  const result = await commentsRepository.removeByName("comment");

  expect(result).toEqual("1");
});

test("when nothing to remove return 0", async () => {
  const commentsRepository = new CommentsRepository();
  commentsRepository.comments.push({ id: "1", name: "comment" });

  const result = await commentsRepository.removeByName("nonexisting");

  expect(result).toEqual("0");
});

test("finds by name", async () => {
  const commentsRepository = new CommentsRepository();
  commentsRepository.comments.push({ id: "1", name: "comment" });

  const result = await commentsRepository.findByName("comment");

  expect(result).toEqual({ id: "1", name: "comment" });
});
