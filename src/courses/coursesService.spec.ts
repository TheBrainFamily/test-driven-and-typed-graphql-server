import * as td from "testdouble";
import { CoursesService } from "./coursesService";
import { when } from "../resolvers/testHelpers/when";
import { CoursesRepositoryType } from "./coursesRepository";

test("It passes all from the repository", async () => {
  const coursesRepository = td.object<CoursesRepositoryType>();
  const coursesService = new CoursesService(coursesRepository);

  when(coursesRepository.findAll()).thenResolve([
    {
      id: "1",
      name: "course"
    }
  ]);

  const result = await coursesService.findAll();
  expect(result).toEqual([{ id: "1", name: "course" }]);
});

test("Finds by name from the repository", async () => {
  const coursesRepository = td.object<CoursesRepositoryType>();
  const coursesService = new CoursesService(coursesRepository);

  when(coursesRepository.findByName("course")).thenResolve({
    id: "1",
    name: "course"
  });

  const result = await coursesService.findByName("course");
  expect(result).toEqual({ id: "1", name: "course" });
});

test("Finds by id from the repository", async () => {
  const coursesRepository = td.object<CoursesRepositoryType>();
  const coursesService = new CoursesService(coursesRepository);

  when(coursesRepository.findById("1")).thenResolve({
    id: "1",
    name: "course"
  });

  const result = await coursesService.findById("1");
  expect(result).toEqual({ id: "1", name: "course" });
});

test("Adds to the repository", async () => {
  const coursesRepository = td.object<CoursesRepositoryType>();
  const coursesService = new CoursesService(coursesRepository);

  when(coursesRepository.add("course")).thenResolve({
    id: "1",
    name: "course"
  });

  const result = await coursesService.add("course");
  expect(result).toEqual({ id: "1", name: "course" });
});

test("Removes from the repository by name", async () => {
  const coursesRepository = td.object<CoursesRepositoryType>();
  const coursesService = new CoursesService(coursesRepository);

  when(coursesRepository.removeByName("course")).thenResolve("1");

  const result = await coursesService.removeByName("course");
  expect(result).toEqual("1");
});

test("Removes from the repository by id", async () => {
  const coursesRepository = td.object<CoursesRepositoryType>();
  const coursesService = new CoursesService(coursesRepository);

  when(coursesRepository.removeById("1")).thenResolve("1");

  const result = await coursesService.removeById("1");
  expect(result).toEqual("1");
});
