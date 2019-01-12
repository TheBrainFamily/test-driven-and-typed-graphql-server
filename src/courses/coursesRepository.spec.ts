import { CoursesRepository } from "./coursesRepository";

test("It gets courses from in memory store", async () => {
  const coursesRepository = new CoursesRepository();

  coursesRepository.courses.push({ id: "1", name: "course" });

  const result = await coursesRepository.findAll();
  expect(result).toEqual([{ id: "1", name: "course" }]);
});

test("it adds the course to the memory store", async () => {
  const coursesRepository = new CoursesRepository();

  const result = await coursesRepository.add("course");

  expect(result).toEqual({ id: "1", name: "course" });
  expect(!!coursesRepository.courses.find(i => i.name === "course")).toEqual(true);
});

test("it returns the added course", async () => {
  const coursesRepository = new CoursesRepository();

  await coursesRepository.add("course");

  expect(!!coursesRepository.courses.find(i => i.name === "course")).toEqual(true);
});

test("finds by id", async () => {
  const coursesRepository = new CoursesRepository();
  coursesRepository.courses.push({ id: "1", name: "course" });

  const result = await coursesRepository.findById("1");

  expect(result).toEqual({ id: "1", name: "course" });
});

test("removes by id removes from the datastore", async () => {
  const coursesRepository = new CoursesRepository();
  coursesRepository.courses.push({ id: "1", name: "course" });

  await coursesRepository.removeById("1");

  expect(!!coursesRepository.courses.find(i => i.id === "1")).toBeFalsy();
});

test("removes by id returns the id", async () => {
  const coursesRepository = new CoursesRepository();
  coursesRepository.courses.push({ id: "1", name: "course" });

  const result = await coursesRepository.removeById("1");

  expect(result).toEqual("1");
});

test("removes by name removes from the datastore", async () => {
  const coursesRepository = new CoursesRepository();
  coursesRepository.courses.push({ id: "1", name: "course" });

  await coursesRepository.removeByName("course");

  expect(!!coursesRepository.courses.find(i => i.id === "1")).toBeFalsy();
});

test("removes by name returns the id", async () => {
  const coursesRepository = new CoursesRepository();
  coursesRepository.courses.push({ id: "1", name: "course" });

  const result = await coursesRepository.removeByName("course");

  expect(result).toEqual("1");
});

test("when nothing to remove return 0", async () => {
  const coursesRepository = new CoursesRepository();
  coursesRepository.courses.push({ id: "1", name: "course" });

  const result = await coursesRepository.removeByName("nonexisting");

  expect(result).toEqual("0");
});

test("finds by name", async () => {
  const coursesRepository = new CoursesRepository();
  coursesRepository.courses.push({ id: "1", name: "course" });

  const result = await coursesRepository.findByName("course");

  expect(result).toEqual({ id: "1", name: "course" });
});
