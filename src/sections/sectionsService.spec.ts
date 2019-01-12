import * as td from "testdouble";
import { SectionsService } from "./sectionsService";
import { when } from "../resolvers/testHelpers/when";
import { SectionsRepositoryType } from "./sectionsRepository";

test("It passes all from the repository", async () => {
  const sectionsRepository = td.object<SectionsRepositoryType>();
  const sectionsService = new SectionsService(sectionsRepository);

  when(sectionsRepository.findAll()).thenResolve([
    {
      id: "1",
      name: "section"
    }
  ]);

  const result = await sectionsService.findAll();
  expect(result).toEqual([{ id: "1", name: "section" }]);
});

test("Finds by name from the repository", async () => {
  const sectionsRepository = td.object<SectionsRepositoryType>();
  const sectionsService = new SectionsService(sectionsRepository);

  when(sectionsRepository.findByName("section")).thenResolve({
    id: "1",
    name: "section"
  });

  const result = await sectionsService.findByName("section");
  expect(result).toEqual({ id: "1", name: "section" });
});

test("Finds by id from the repository", async () => {
  const sectionsRepository = td.object<SectionsRepositoryType>();
  const sectionsService = new SectionsService(sectionsRepository);

  when(sectionsRepository.findById("1")).thenResolve({
    id: "1",
    name: "section"
  });

  const result = await sectionsService.findById("1");
  expect(result).toEqual({ id: "1", name: "section" });
});

test("Adds to the repository", async () => {
  const sectionsRepository = td.object<SectionsRepositoryType>();
  const sectionsService = new SectionsService(sectionsRepository);

  when(sectionsRepository.add("section")).thenResolve({
    id: "1",
    name: "section"
  });

  const result = await sectionsService.add("section");
  expect(result).toEqual({ id: "1", name: "section" });
});

test("Removes from the repository by name", async () => {
  const sectionsRepository = td.object<SectionsRepositoryType>();
  const sectionsService = new SectionsService(sectionsRepository);

  when(sectionsRepository.removeByName("section")).thenResolve("1");

  const result = await sectionsService.removeByName("section");
  expect(result).toEqual("1");
});

test("Removes from the repository by id", async () => {
  const sectionsRepository = td.object<SectionsRepositoryType>();
  const sectionsService = new SectionsService(sectionsRepository);

  when(sectionsRepository.removeById("1")).thenResolve("1");

  const result = await sectionsService.removeById("1");
  expect(result).toEqual("1");
});
