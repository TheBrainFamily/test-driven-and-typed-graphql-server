import { ClasssRepository } from "./classsRepository";

test("It gets classs from in memory store", async () => {
  const classsRepository = new ClasssRepository();

  classsRepository.classs.push({ id: "1", name: "class" });

  const result = await classsRepository.findAll();
  expect(result).toEqual([{ id: "1", name: "class" }]);
});

test("it adds the class to the memory store", async () => {
  const classsRepository = new ClasssRepository();

  const result = await classsRepository.add("class");

  expect(result).toEqual({ id: "1", name: "class" });
  expect(!!classsRepository.classs.find(i => i.name === "class")).toEqual(true);
});

test("it returns the added class", async () => {
  const classsRepository = new ClasssRepository();

  await classsRepository.add("class");

  expect(!!classsRepository.classs.find(i => i.name === "class")).toEqual(true);
});

test("finds by id", async () => {
  const classsRepository = new ClasssRepository();
  classsRepository.classs.push({ id: "1", name: "class" });

  const result = await classsRepository.findById("1");

  expect(result).toEqual({ id: "1", name: "class" });
});

test("removes by id removes from the datastore", async () => {
  const classsRepository = new ClasssRepository();
  classsRepository.classs.push({ id: "1", name: "class" });

  await classsRepository.removeById("1");

  expect(!!classsRepository.classs.find(i => i.id === "1")).toBeFalsy();
});

test("removes by id returns the id", async () => {
  const classsRepository = new ClasssRepository();
  classsRepository.classs.push({ id: "1", name: "class" });

  const result = await classsRepository.removeById("1");

  expect(result).toEqual("1");
});

test("removes by name removes from the datastore", async () => {
  const classsRepository = new ClasssRepository();
  classsRepository.classs.push({ id: "1", name: "class" });

  await classsRepository.removeByName("class");

  expect(!!classsRepository.classs.find(i => i.id === "1")).toBeFalsy();
});

test("removes by name returns the id", async () => {
  const classsRepository = new ClasssRepository();
  classsRepository.classs.push({ id: "1", name: "class" });

  const result = await classsRepository.removeByName("class");

  expect(result).toEqual("1");
});

test("when nothing to remove return 0", async () => {
  const classsRepository = new ClasssRepository();
  classsRepository.classs.push({ id: "1", name: "class" });

  const result = await classsRepository.removeByName("nonexisting");

  expect(result).toEqual("0");
});

test("finds by name", async () => {
  const classsRepository = new ClasssRepository();
  classsRepository.classs.push({ id: "1", name: "class" });

  const result = await classsRepository.findByName("class");

  expect(result).toEqual({ id: "1", name: "class" });
});
