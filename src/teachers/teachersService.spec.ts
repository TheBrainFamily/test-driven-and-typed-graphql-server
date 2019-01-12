import * as td from "testdouble";
import { TeachersService } from "./teachersService";
import { when } from "../resolvers/testHelpers/when";
import { TeachersRepositoryType } from "./teachersRepository";

test("It passes all from the repository", async () => {
  const teachersRepository = td.object<TeachersRepositoryType>();
  const teachersService = new TeachersService(teachersRepository);

  when(teachersRepository.findAll()).thenResolve([
    {
      id: "1",
      name: "teacher"
    }
  ]);

  const result = await teachersService.findAll();
  expect(result).toEqual([{ id: "1", name: "teacher" }]);
});

test("Finds by name from the repository", async () => {
  const teachersRepository = td.object<TeachersRepositoryType>();
  const teachersService = new TeachersService(teachersRepository);

  when(teachersRepository.findByName("teacher")).thenResolve({
    id: "1",
    name: "teacher"
  });

  const result = await teachersService.findByName("teacher");
  expect(result).toEqual({ id: "1", name: "teacher" });
});

test("Finds by id from the repository", async () => {
  const teachersRepository = td.object<TeachersRepositoryType>();
  const teachersService = new TeachersService(teachersRepository);

  when(teachersRepository.findById("1")).thenResolve({
    id: "1",
    name: "teacher"
  });

  const result = await teachersService.findById("1");
  expect(result).toEqual({ id: "1", name: "teacher" });
});

test("Adds to the repository", async () => {
  const teachersRepository = td.object<TeachersRepositoryType>();
  const teachersService = new TeachersService(teachersRepository);

  when(teachersRepository.add("teacher")).thenResolve({
    id: "1",
    name: "teacher"
  });

  const result = await teachersService.add("teacher");
  expect(result).toEqual({ id: "1", name: "teacher" });
});

test("Removes from the repository by name", async () => {
  const teachersRepository = td.object<TeachersRepositoryType>();
  const teachersService = new TeachersService(teachersRepository);

  when(teachersRepository.removeByName("teacher")).thenResolve("1");

  const result = await teachersService.removeByName("teacher");
  expect(result).toEqual("1");
});

test("Removes from the repository by id", async () => {
  const teachersRepository = td.object<TeachersRepositoryType>();
  const teachersService = new TeachersService(teachersRepository);

  when(teachersRepository.removeById("1")).thenResolve("1");

  const result = await teachersService.removeById("1");
  expect(result).toEqual("1");
});
