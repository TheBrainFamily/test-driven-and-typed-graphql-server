import { SectionsRepository } from "./sectionsRepository";

test("It gets sections from in memory store", async () => {
  const sectionsRepository = new SectionsRepository();

  sectionsRepository.sections.push({ id: "1", name: "section" });

  const result = await sectionsRepository.findAll();
  expect(result).toEqual([{ id: "1", name: "section" }]);
});

test("it adds the section to the memory store", async () => {
  const sectionsRepository = new SectionsRepository();

  const result = await sectionsRepository.add("section");

  expect(result).toEqual({ id: "1", name: "section" });
  expect(!!sectionsRepository.sections.find(i => i.name === "section")).toEqual(true);
});

test("it returns the added section", async () => {
  const sectionsRepository = new SectionsRepository();

  await sectionsRepository.add("section");

  expect(!!sectionsRepository.sections.find(i => i.name === "section")).toEqual(true);
});

test("finds by id", async () => {
  const sectionsRepository = new SectionsRepository();
  sectionsRepository.sections.push({ id: "1", name: "section" });

  const result = await sectionsRepository.findById("1");

  expect(result).toEqual({ id: "1", name: "section" });
});

test("removes by id removes from the datastore", async () => {
  const sectionsRepository = new SectionsRepository();
  sectionsRepository.sections.push({ id: "1", name: "section" });

  await sectionsRepository.removeById("1");

  expect(!!sectionsRepository.sections.find(i => i.id === "1")).toBeFalsy();
});

test("removes by id returns the id", async () => {
  const sectionsRepository = new SectionsRepository();
  sectionsRepository.sections.push({ id: "1", name: "section" });

  const result = await sectionsRepository.removeById("1");

  expect(result).toEqual("1");
});

test("removes by name removes from the datastore", async () => {
  const sectionsRepository = new SectionsRepository();
  sectionsRepository.sections.push({ id: "1", name: "section" });

  await sectionsRepository.removeByName("section");

  expect(!!sectionsRepository.sections.find(i => i.id === "1")).toBeFalsy();
});

test("removes by name returns the id", async () => {
  const sectionsRepository = new SectionsRepository();
  sectionsRepository.sections.push({ id: "1", name: "section" });

  const result = await sectionsRepository.removeByName("section");

  expect(result).toEqual("1");
});

test("when nothing to remove return 0", async () => {
  const sectionsRepository = new SectionsRepository();
  sectionsRepository.sections.push({ id: "1", name: "section" });

  const result = await sectionsRepository.removeByName("nonexisting");

  expect(result).toEqual("0");
});

test("finds by name", async () => {
  const sectionsRepository = new SectionsRepository();
  sectionsRepository.sections.push({ id: "1", name: "section" });

  const result = await sectionsRepository.findByName("section");

  expect(result).toEqual({ id: "1", name: "section" });
});
