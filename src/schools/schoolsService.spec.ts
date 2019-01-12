import * as td from "testdouble";
import { SchoolsService } from "./schoolsService";
import { when } from "../resolvers/testHelpers/when";
import { SchoolsRepositoryType } from "./schoolsRepository";

test("It passes all from the repository", async () => {
  const schoolsRepository = td.object<SchoolsRepositoryType>();
  const schoolsService = new SchoolsService(schoolsRepository);

  when(schoolsRepository.findAll()).thenResolve([
    {
      id: "1",
      name: "school"
    }
  ]);

  const result = await schoolsService.findAll();
  expect(result).toEqual([{ id: "1", name: "school" }]);
});

test("Finds by name from the repository", async () => {
  const schoolsRepository = td.object<SchoolsRepositoryType>();
  const schoolsService = new SchoolsService(schoolsRepository);

  when(schoolsRepository.findByName("school")).thenResolve({
    id: "1",
    name: "school"
  });

  const result = await schoolsService.findByName("school");
  expect(result).toEqual({ id: "1", name: "school" });
});

test("Finds by id from the repository", async () => {
  const schoolsRepository = td.object<SchoolsRepositoryType>();
  const schoolsService = new SchoolsService(schoolsRepository);

  when(schoolsRepository.findById("1")).thenResolve({
    id: "1",
    name: "school"
  });

  const result = await schoolsService.findById("1");
  expect(result).toEqual({ id: "1", name: "school" });
});

test("Adds to the repository", async () => {
  const schoolsRepository = td.object<SchoolsRepositoryType>();
  const schoolsService = new SchoolsService(schoolsRepository);

  when(schoolsRepository.add("school")).thenResolve({
    id: "1",
    name: "school"
  });

  const result = await schoolsService.add("school");
  expect(result).toEqual({ id: "1", name: "school" });
});

test("Removes from the repository by name", async () => {
  const schoolsRepository = td.object<SchoolsRepositoryType>();
  const schoolsService = new SchoolsService(schoolsRepository);

  when(schoolsRepository.removeByName("school")).thenResolve("1");

  const result = await schoolsService.removeByName("school");
  expect(result).toEqual("1");
});

test("Removes from the repository by id", async () => {
  const schoolsRepository = td.object<SchoolsRepositoryType>();
  const schoolsService = new SchoolsService(schoolsRepository);

  when(schoolsRepository.removeById("1")).thenResolve("1");

  const result = await schoolsService.removeById("1");
  expect(result).toEqual("1");
});
