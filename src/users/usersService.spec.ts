import * as td from "testdouble";
import { UsersService } from "./usersService";
import { when } from "../resolvers/testHelpers/when";
import { UsersRepositoryType } from "./usersRepository";

test("It passes all from the repository", async () => {
  const usersRepository = td.object<UsersRepositoryType>();
  const usersService = new UsersService(usersRepository);

  when(usersRepository.findAll()).thenResolve([
    {
      id: "1",
      name: "user"
    }
  ]);

  const result = await usersService.findAll();
  expect(result).toEqual([{ id: "1", name: "user" }]);
});

test("Finds by name from the repository", async () => {
  const usersRepository = td.object<UsersRepositoryType>();
  const usersService = new UsersService(usersRepository);

  when(usersRepository.findByName("user")).thenResolve({
    id: "1",
    name: "user"
  });

  const result = await usersService.findByName("user");
  expect(result).toEqual({ id: "1", name: "user" });
});

test("Finds by id from the repository", async () => {
  const usersRepository = td.object<UsersRepositoryType>();
  const usersService = new UsersService(usersRepository);

  when(usersRepository.findById("1")).thenResolve({
    id: "1",
    name: "user"
  });

  const result = await usersService.findById("1");
  expect(result).toEqual({ id: "1", name: "user" });
});

test("Adds to the repository", async () => {
  const usersRepository = td.object<UsersRepositoryType>();
  const usersService = new UsersService(usersRepository);

  when(usersRepository.add("user")).thenResolve({
    id: "1",
    name: "user"
  });

  const result = await usersService.add("user");
  expect(result).toEqual({ id: "1", name: "user" });
});

test("Removes from the repository by name", async () => {
  const usersRepository = td.object<UsersRepositoryType>();
  const usersService = new UsersService(usersRepository);

  when(usersRepository.removeByName("user")).thenResolve("1");

  const result = await usersService.removeByName("user");
  expect(result).toEqual("1");
});

test("Removes from the repository by id", async () => {
  const usersRepository = td.object<UsersRepositoryType>();
  const usersService = new UsersService(usersRepository);

  when(usersRepository.removeById("1")).thenResolve("1");

  const result = await usersService.removeById("1");
  expect(result).toEqual("1");
});
