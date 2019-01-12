import { GradesRepository } from "./gradesRepository";

test("It gets grades from in memory store", async () => {
  const gradesRepository = new GradesRepository();

  gradesRepository.grades.push({ id: "1", name: "grade" });

  const result = await gradesRepository.findAll();
  expect(result).toEqual([{ id: "1", name: "grade" }]);
});

test("it adds the grade to the memory store", async () => {
  const gradesRepository = new GradesRepository();

  const result = await gradesRepository.add("grade");

  expect(result).toEqual({ id: "1", name: "grade" });
  expect(!!gradesRepository.grades.find(i => i.name === "grade")).toEqual(true);
});

test("it returns the added grade", async () => {
  const gradesRepository = new GradesRepository();

  await gradesRepository.add("grade");

  expect(!!gradesRepository.grades.find(i => i.name === "grade")).toEqual(true);
});

test("finds by id", async () => {
  const gradesRepository = new GradesRepository();
  gradesRepository.grades.push({ id: "1", name: "grade" });

  const result = await gradesRepository.findById("1");

  expect(result).toEqual({ id: "1", name: "grade" });
});

test("removes by id removes from the datastore", async () => {
  const gradesRepository = new GradesRepository();
  gradesRepository.grades.push({ id: "1", name: "grade" });

  await gradesRepository.removeById("1");

  expect(!!gradesRepository.grades.find(i => i.id === "1")).toBeFalsy();
});

test("removes by id returns the id", async () => {
  const gradesRepository = new GradesRepository();
  gradesRepository.grades.push({ id: "1", name: "grade" });

  const result = await gradesRepository.removeById("1");

  expect(result).toEqual("1");
});

test("removes by name removes from the datastore", async () => {
  const gradesRepository = new GradesRepository();
  gradesRepository.grades.push({ id: "1", name: "grade" });

  await gradesRepository.removeByName("grade");

  expect(!!gradesRepository.grades.find(i => i.id === "1")).toBeFalsy();
});

test("removes by name returns the id", async () => {
  const gradesRepository = new GradesRepository();
  gradesRepository.grades.push({ id: "1", name: "grade" });

  const result = await gradesRepository.removeByName("grade");

  expect(result).toEqual("1");
});

test("when nothing to remove return 0", async () => {
  const gradesRepository = new GradesRepository();
  gradesRepository.grades.push({ id: "1", name: "grade" });

  const result = await gradesRepository.removeByName("nonexisting");

  expect(result).toEqual("0");
});

test("finds by name", async () => {
  const gradesRepository = new GradesRepository();
  gradesRepository.grades.push({ id: "1", name: "grade" });

  const result = await gradesRepository.findByName("grade");

  expect(result).toEqual({ id: "1", name: "grade" });
});
