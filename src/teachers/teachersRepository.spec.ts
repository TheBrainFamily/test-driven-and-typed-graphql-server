import { TeachersRepository } from "./teachersRepository";

test("It gets teachers from in memory store", async () => {
  const teachersRepository = new TeachersRepository();

  teachersRepository.teachers.push({ id: "1", name: "teacher" });

  const result = await teachersRepository.findAll();
  expect(result).toEqual([{ id: "1", name: "teacher" }]);
});

test("it adds the teacher to the memory store", async () => {
  const teachersRepository = new TeachersRepository();

  const result = await teachersRepository.add("teacher");

  expect(result).toEqual({ id: "1", name: "teacher" });
  expect(!!teachersRepository.teachers.find(i => i.name === "teacher")).toEqual(true);
});

test("it returns the added teacher", async () => {
  const teachersRepository = new TeachersRepository();

  await teachersRepository.add("teacher");

  expect(!!teachersRepository.teachers.find(i => i.name === "teacher")).toEqual(true);
});

test("finds by id", async () => {
  const teachersRepository = new TeachersRepository();
  teachersRepository.teachers.push({ id: "1", name: "teacher" });

  const result = await teachersRepository.findById("1");

  expect(result).toEqual({ id: "1", name: "teacher" });
});

test("removes by id removes from the datastore", async () => {
  const teachersRepository = new TeachersRepository();
  teachersRepository.teachers.push({ id: "1", name: "teacher" });

  await teachersRepository.removeById("1");

  expect(!!teachersRepository.teachers.find(i => i.id === "1")).toBeFalsy();
});

test("removes by id returns the id", async () => {
  const teachersRepository = new TeachersRepository();
  teachersRepository.teachers.push({ id: "1", name: "teacher" });

  const result = await teachersRepository.removeById("1");

  expect(result).toEqual("1");
});

test("removes by name removes from the datastore", async () => {
  const teachersRepository = new TeachersRepository();
  teachersRepository.teachers.push({ id: "1", name: "teacher" });

  await teachersRepository.removeByName("teacher");

  expect(!!teachersRepository.teachers.find(i => i.id === "1")).toBeFalsy();
});

test("removes by name returns the id", async () => {
  const teachersRepository = new TeachersRepository();
  teachersRepository.teachers.push({ id: "1", name: "teacher" });

  const result = await teachersRepository.removeByName("teacher");

  expect(result).toEqual("1");
});

test("when nothing to remove return 0", async () => {
  const teachersRepository = new TeachersRepository();
  teachersRepository.teachers.push({ id: "1", name: "teacher" });

  const result = await teachersRepository.removeByName("nonexisting");

  expect(result).toEqual("0");
});

test("finds by name", async () => {
  const teachersRepository = new TeachersRepository();
  teachersRepository.teachers.push({ id: "1", name: "teacher" });

  const result = await teachersRepository.findByName("teacher");

  expect(result).toEqual({ id: "1", name: "teacher" });
});
