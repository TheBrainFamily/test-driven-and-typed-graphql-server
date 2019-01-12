import * as td from "testdouble";
import { CommentsService } from "./commentsService";
import { when } from "../resolvers/testHelpers/when";
import { CommentsRepositoryType } from "./commentsRepository";

test("It passes all from the repository", async () => {
  const commentsRepository = td.object<CommentsRepositoryType>();
  const commentsService = new CommentsService(commentsRepository);

  when(commentsRepository.findAll()).thenResolve([
    {
      id: "1",
      name: "comment"
    }
  ]);

  const result = await commentsService.findAll();
  expect(result).toEqual([{ id: "1", name: "comment" }]);
});

test("Finds by name from the repository", async () => {
  const commentsRepository = td.object<CommentsRepositoryType>();
  const commentsService = new CommentsService(commentsRepository);

  when(commentsRepository.findByName("comment")).thenResolve({
    id: "1",
    name: "comment"
  });

  const result = await commentsService.findByName("comment");
  expect(result).toEqual({ id: "1", name: "comment" });
});

test("Finds by id from the repository", async () => {
  const commentsRepository = td.object<CommentsRepositoryType>();
  const commentsService = new CommentsService(commentsRepository);

  when(commentsRepository.findById("1")).thenResolve({
    id: "1",
    name: "comment"
  });

  const result = await commentsService.findById("1");
  expect(result).toEqual({ id: "1", name: "comment" });
});

test("Adds to the repository", async () => {
  const commentsRepository = td.object<CommentsRepositoryType>();
  const commentsService = new CommentsService(commentsRepository);

  when(commentsRepository.add("comment")).thenResolve({
    id: "1",
    name: "comment"
  });

  const result = await commentsService.add("comment");
  expect(result).toEqual({ id: "1", name: "comment" });
});

test("Removes from the repository by name", async () => {
  const commentsRepository = td.object<CommentsRepositoryType>();
  const commentsService = new CommentsService(commentsRepository);

  when(commentsRepository.removeByName("comment")).thenResolve("1");

  const result = await commentsService.removeByName("comment");
  expect(result).toEqual("1");
});

test("Removes from the repository by id", async () => {
  const commentsRepository = td.object<CommentsRepositoryType>();
  const commentsService = new CommentsService(commentsRepository);

  when(commentsRepository.removeById("1")).thenResolve("1");

  const result = await commentsService.removeById("1");
  expect(result).toEqual("1");
});
