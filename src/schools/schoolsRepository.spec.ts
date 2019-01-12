import { SchoolsRepository } from "./schoolsRepository";

test("It gets schools from in memory store", async () => {
  const schoolsRepository = new SchoolsRepository();

  schoolsRepository.schools.push({ id: "1", name: "school" });

  const result = await schoolsRepository.findAll();
  expect(result).toEqual([{ id: "1", name: "school" }]);
});

test("it adds the school to the memory store", async () => {
  const schoolsRepository = new SchoolsRepository();

  const result = await schoolsRepository.add("school");

  expect(result).toEqual({ id: "1", name: "school" });
  expect(!!schoolsRepository.schools.find(i => i.name === "school")).toEqual(true);
});

test("it returns the added school", async () => {
  const schoolsRepository = new SchoolsRepository();

  await schoolsRepository.add("school");

  expect(!!schoolsRepository.schools.find(i => i.name === "school")).toEqual(true);
});

test("finds by id", async () => {
  const schoolsRepository = new SchoolsRepository();
  schoolsRepository.schools.push({ id: "1", name: "school" });

  const result = await schoolsRepository.findById("1");

  expect(result).toEqual({ id: "1", name: "school" });
});

test("removes by id removes from the datastore", async () => {
  const schoolsRepository = new SchoolsRepository();
  schoolsRepository.schools.push({ id: "1", name: "school" });

  await schoolsRepository.removeById("1");

  expect(!!schoolsRepository.schools.find(i => i.id === "1")).toBeFalsy();
});

test("removes by id returns the id", async () => {
  const schoolsRepository = new SchoolsRepository();
  schoolsRepository.schools.push({ id: "1", name: "school" });

  const result = await schoolsRepository.removeById("1");

  expect(result).toEqual("1");
});

test("removes by name removes from the datastore", async () => {
  const schoolsRepository = new SchoolsRepository();
  schoolsRepository.schools.push({ id: "1", name: "school" });

  await schoolsRepository.removeByName("school");

  expect(!!schoolsRepository.schools.find(i => i.id === "1")).toBeFalsy();
});

test("removes by name returns the id", async () => {
  const schoolsRepository = new SchoolsRepository();
  schoolsRepository.schools.push({ id: "1", name: "school" });

  const result = await schoolsRepository.removeByName("school");

  expect(result).toEqual("1");
});

test("when nothing to remove return 0", async () => {
  const schoolsRepository = new SchoolsRepository();
  schoolsRepository.schools.push({ id: "1", name: "school" });

  const result = await schoolsRepository.removeByName("nonexisting");

  expect(result).toEqual("0");
});

test("finds by name", async () => {
  const schoolsRepository = new SchoolsRepository();
  schoolsRepository.schools.push({ id: "1", name: "school" });

  const result = await schoolsRepository.findByName("school");

  expect(result).toEqual({ id: "1", name: "school" });
});
