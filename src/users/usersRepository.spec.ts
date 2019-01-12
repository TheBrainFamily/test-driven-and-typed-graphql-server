import { UsersRepository } from "./usersRepository";

test("It gets users from in memory store", async () => {
  const usersRepository = new UsersRepository();

  usersRepository.users.push({ id: "1", name: "user" });

  const result = await usersRepository.findAll();
  expect(result).toEqual([{ id: "1", name: "user" }]);
});

test("it adds the user to the memory store", async () => {
  const usersRepository = new UsersRepository();

  const result = await usersRepository.add("user");

  expect(result).toEqual({ id: "1", name: "user" });
  expect(!!usersRepository.users.find(i => i.name === "user")).toEqual(true);
});

test("it returns the added user", async () => {
  const usersRepository = new UsersRepository();

  await usersRepository.add("user");

  expect(!!usersRepository.users.find(i => i.name === "user")).toEqual(true);
});

test("finds by id", async () => {
  const usersRepository = new UsersRepository();
  usersRepository.users.push({ id: "1", name: "user" });

  const result = await usersRepository.findById("1");

  expect(result).toEqual({ id: "1", name: "user" });
});

test("removes by id removes from the datastore", async () => {
  const usersRepository = new UsersRepository();
  usersRepository.users.push({ id: "1", name: "user" });

  await usersRepository.removeById("1");

  expect(!!usersRepository.users.find(i => i.id === "1")).toBeFalsy();
});

test("removes by id returns the id", async () => {
  const usersRepository = new UsersRepository();
  usersRepository.users.push({ id: "1", name: "user" });

  const result = await usersRepository.removeById("1");

  expect(result).toEqual("1");
});

test("removes by name removes from the datastore", async () => {
  const usersRepository = new UsersRepository();
  usersRepository.users.push({ id: "1", name: "user" });

  await usersRepository.removeByName("user");

  expect(!!usersRepository.users.find(i => i.id === "1")).toBeFalsy();
});

test("removes by name returns the id", async () => {
  const usersRepository = new UsersRepository();
  usersRepository.users.push({ id: "1", name: "user" });

  const result = await usersRepository.removeByName("user");

  expect(result).toEqual("1");
});

test("when nothing to remove return 0", async () => {
  const usersRepository = new UsersRepository();
  usersRepository.users.push({ id: "1", name: "user" });

  const result = await usersRepository.removeByName("nonexisting");

  expect(result).toEqual("0");
});

test("finds by name", async () => {
  const usersRepository = new UsersRepository();
  usersRepository.users.push({ id: "1", name: "user" });

  const result = await usersRepository.findByName("user");

  expect(result).toEqual({ id: "1", name: "user" });
});
