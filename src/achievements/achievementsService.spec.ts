import * as td from "testdouble";
import { AchievementsService } from "./achievementsService";
import { when } from "../resolvers/testHelpers/when";
import { AchievementsRepositoryType } from "./achievementsRepository";

test("It passes all from the repository", async () => {
  const achievementsRepository = td.object<AchievementsRepositoryType>();
  const achievementsService = new AchievementsService(achievementsRepository);

  when(achievementsRepository.findAll()).thenResolve([
    {
      id: "1",
      name: "achievement"
    }
  ]);

  const result = await achievementsService.findAll();
  expect(result).toEqual([{ id: "1", name: "achievement" }]);
});

test("Finds by name from the repository", async () => {
  const achievementsRepository = td.object<AchievementsRepositoryType>();
  const achievementsService = new AchievementsService(achievementsRepository);

  when(achievementsRepository.findByName("achievement")).thenResolve({
    id: "1",
    name: "achievement"
  });

  const result = await achievementsService.findByName("achievement");
  expect(result).toEqual({ id: "1", name: "achievement" });
});

test("Finds by id from the repository", async () => {
  const achievementsRepository = td.object<AchievementsRepositoryType>();
  const achievementsService = new AchievementsService(achievementsRepository);

  when(achievementsRepository.findById("1")).thenResolve({
    id: "1",
    name: "achievement"
  });

  const result = await achievementsService.findById("1");
  expect(result).toEqual({ id: "1", name: "achievement" });
});

test("Adds to the repository", async () => {
  const achievementsRepository = td.object<AchievementsRepositoryType>();
  const achievementsService = new AchievementsService(achievementsRepository);

  when(achievementsRepository.add("achievement")).thenResolve({
    id: "1",
    name: "achievement"
  });

  const result = await achievementsService.add("achievement");
  expect(result).toEqual({ id: "1", name: "achievement" });
});

test("Removes from the repository by name", async () => {
  const achievementsRepository = td.object<AchievementsRepositoryType>();
  const achievementsService = new AchievementsService(achievementsRepository);

  when(achievementsRepository.removeByName("achievement")).thenResolve("1");

  const result = await achievementsService.removeByName("achievement");
  expect(result).toEqual("1");
});

test("Removes from the repository by id", async () => {
  const achievementsRepository = td.object<AchievementsRepositoryType>();
  const achievementsService = new AchievementsService(achievementsRepository);

  when(achievementsRepository.removeById("1")).thenResolve("1");

  const result = await achievementsService.removeById("1");
  expect(result).toEqual("1");
});
