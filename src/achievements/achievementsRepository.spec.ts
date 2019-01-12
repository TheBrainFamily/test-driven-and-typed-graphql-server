import { AchievementsRepository } from "./achievementsRepository";

test("It gets achievements from in memory store", async () => {
  const achievementsRepository = new AchievementsRepository();

  achievementsRepository.achievements.push({ id: "1", name: "achievement" });

  const result = await achievementsRepository.findAll();
  expect(result).toEqual([{ id: "1", name: "achievement" }]);
});

test("it adds the achievement to the memory store", async () => {
  const achievementsRepository = new AchievementsRepository();

  const result = await achievementsRepository.add("achievement");

  expect(result).toEqual({ id: "1", name: "achievement" });
  expect(!!achievementsRepository.achievements.find(i => i.name === "achievement")).toEqual(true);
});

test("it returns the added achievement", async () => {
  const achievementsRepository = new AchievementsRepository();

  await achievementsRepository.add("achievement");

  expect(!!achievementsRepository.achievements.find(i => i.name === "achievement")).toEqual(true);
});

test("finds by id", async () => {
  const achievementsRepository = new AchievementsRepository();
  achievementsRepository.achievements.push({ id: "1", name: "achievement" });

  const result = await achievementsRepository.findById("1");

  expect(result).toEqual({ id: "1", name: "achievement" });
});

test("removes by id removes from the datastore", async () => {
  const achievementsRepository = new AchievementsRepository();
  achievementsRepository.achievements.push({ id: "1", name: "achievement" });

  await achievementsRepository.removeById("1");

  expect(!!achievementsRepository.achievements.find(i => i.id === "1")).toBeFalsy();
});

test("removes by id returns the id", async () => {
  const achievementsRepository = new AchievementsRepository();
  achievementsRepository.achievements.push({ id: "1", name: "achievement" });

  const result = await achievementsRepository.removeById("1");

  expect(result).toEqual("1");
});

test("removes by name removes from the datastore", async () => {
  const achievementsRepository = new AchievementsRepository();
  achievementsRepository.achievements.push({ id: "1", name: "achievement" });

  await achievementsRepository.removeByName("achievement");

  expect(!!achievementsRepository.achievements.find(i => i.id === "1")).toBeFalsy();
});

test("removes by name returns the id", async () => {
  const achievementsRepository = new AchievementsRepository();
  achievementsRepository.achievements.push({ id: "1", name: "achievement" });

  const result = await achievementsRepository.removeByName("achievement");

  expect(result).toEqual("1");
});

test("when nothing to remove return 0", async () => {
  const achievementsRepository = new AchievementsRepository();
  achievementsRepository.achievements.push({ id: "1", name: "achievement" });

  const result = await achievementsRepository.removeByName("nonexisting");

  expect(result).toEqual("0");
});

test("finds by name", async () => {
  const achievementsRepository = new AchievementsRepository();
  achievementsRepository.achievements.push({ id: "1", name: "achievement" });

  const result = await achievementsRepository.findByName("achievement");

  expect(result).toEqual({ id: "1", name: "achievement" });
});
