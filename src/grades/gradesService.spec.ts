import * as td from "testdouble";
import { GradesService } from "./gradesService";
import { when } from "../resolvers/testHelpers/when";
import { GradesRepositoryType } from "./gradesRepository";

test("It passes all from the repository", async () => {
  const gradesRepository = td.object<GradesRepositoryType>();
  const gradesService = new GradesService(gradesRepository);

  when(gradesRepository.findAll()).thenResolve([
    {
      id: "1",
      name: "grade"
    }
  ]);

  const result = await gradesService.findAll();
  expect(result).toEqual([{ id: "1", name: "grade" }]);
});

test("Finds by name from the repository", async () => {
  const gradesRepository = td.object<GradesRepositoryType>();
  const gradesService = new GradesService(gradesRepository);

  when(gradesRepository.findByName("grade")).thenResolve({
    id: "1",
    name: "grade"
  });

  const result = await gradesService.findByName("grade");
  expect(result).toEqual({ id: "1", name: "grade" });
});

test("Finds by id from the repository", async () => {
  const gradesRepository = td.object<GradesRepositoryType>();
  const gradesService = new GradesService(gradesRepository);

  when(gradesRepository.findById("1")).thenResolve({
    id: "1",
    name: "grade"
  });

  const result = await gradesService.findById("1");
  expect(result).toEqual({ id: "1", name: "grade" });
});

test("Adds to the repository", async () => {
  const gradesRepository = td.object<GradesRepositoryType>();
  const gradesService = new GradesService(gradesRepository);

  when(gradesRepository.add("grade")).thenResolve({
    id: "1",
    name: "grade"
  });

  const result = await gradesService.add("grade");
  expect(result).toEqual({ id: "1", name: "grade" });
});

test("Removes from the repository by name", async () => {
  const gradesRepository = td.object<GradesRepositoryType>();
  const gradesService = new GradesService(gradesRepository);

  when(gradesRepository.removeByName("grade")).thenResolve("1");

  const result = await gradesService.removeByName("grade");
  expect(result).toEqual("1");
});

test("Removes from the repository by id", async () => {
  const gradesRepository = td.object<GradesRepositoryType>();
  const gradesService = new GradesService(gradesRepository);

  when(gradesRepository.removeById("1")).thenResolve("1");

  const result = await gradesService.removeById("1");
  expect(result).toEqual("1");
});
