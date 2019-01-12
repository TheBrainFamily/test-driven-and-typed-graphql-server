import * as td from "testdouble";
import { ClasssService } from "./classsService";
import { when } from "../resolvers/testHelpers/when";
import { ClasssRepositoryType } from "./classsRepository";

test("It passes all from the repository", async () => {
  const classsRepository = td.object<ClasssRepositoryType>();
  const classsService = new ClasssService(classsRepository);

  when(classsRepository.findAll()).thenResolve([
    {
      id: "1",
      name: "class"
    }
  ]);

  const result = await classsService.findAll();
  expect(result).toEqual([{ id: "1", name: "class" }]);
});

test("Finds by name from the repository", async () => {
  const classsRepository = td.object<ClasssRepositoryType>();
  const classsService = new ClasssService(classsRepository);

  when(classsRepository.findByName("class")).thenResolve({
    id: "1",
    name: "class"
  });

  const result = await classsService.findByName("class");
  expect(result).toEqual({ id: "1", name: "class" });
});

test("Finds by id from the repository", async () => {
  const classsRepository = td.object<ClasssRepositoryType>();
  const classsService = new ClasssService(classsRepository);

  when(classsRepository.findById("1")).thenResolve({
    id: "1",
    name: "class"
  });

  const result = await classsService.findById("1");
  expect(result).toEqual({ id: "1", name: "class" });
});

test("Adds to the repository", async () => {
  const classsRepository = td.object<ClasssRepositoryType>();
  const classsService = new ClasssService(classsRepository);

  when(classsRepository.add("class")).thenResolve({
    id: "1",
    name: "class"
  });

  const result = await classsService.add("class");
  expect(result).toEqual({ id: "1", name: "class" });
});

test("Removes from the repository by name", async () => {
  const classsRepository = td.object<ClasssRepositoryType>();
  const classsService = new ClasssService(classsRepository);

  when(classsRepository.removeByName("class")).thenResolve("1");

  const result = await classsService.removeByName("class");
  expect(result).toEqual("1");
});

test("Removes from the repository by id", async () => {
  const classsRepository = td.object<ClasssRepositoryType>();
  const classsService = new ClasssService(classsRepository);

  when(classsRepository.removeById("1")).thenResolve("1");

  const result = await classsService.removeById("1");
  expect(result).toEqual("1");
});
