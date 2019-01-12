import * as td from "testdouble";
import { ItemsService } from "./itemsService";
import { when } from "../resolvers/testHelpers/when";
import { ItemsRepositoryType } from "./itemsRepository";

test("It passes all from the repository", async () => {
  const itemsRepository = td.object<ItemsRepositoryType>();
  const itemsService = new ItemsService(itemsRepository);

  when(itemsRepository.findAll()).thenResolve([
    {
      id: "1",
      name: "item"
    }
  ]);

  const result = await itemsService.findAll();
  expect(result).toEqual([{ id: "1", name: "item" }]);
});

test("Finds by name from the repository", async () => {
  const itemsRepository = td.object<ItemsRepositoryType>();
  const itemsService = new ItemsService(itemsRepository);

  when(itemsRepository.findByName("item")).thenResolve({
    id: "1",
    name: "item"
  });

  const result = await itemsService.findByName("item");
  expect(result).toEqual({ id: "1", name: "item" });
});

test("Finds by id from the repository", async () => {
  const itemsRepository = td.object<ItemsRepositoryType>();
  const itemsService = new ItemsService(itemsRepository);

  when(itemsRepository.findById("1")).thenResolve({
    id: "1",
    name: "item"
  });

  const result = await itemsService.findById("1");
  expect(result).toEqual({ id: "1", name: "item" });
});

test("Adds to the repository", async () => {
  const itemsRepository = td.object<ItemsRepositoryType>();
  const itemsService = new ItemsService(itemsRepository);

  when(itemsRepository.add("item")).thenResolve({
    id: "1",
    name: "item"
  });

  const result = await itemsService.add("item");
  expect(result).toEqual({ id: "1", name: "item" });
});

test("Removes from the repository by name", async () => {
  const itemsRepository = td.object<ItemsRepositoryType>();
  const itemsService = new ItemsService(itemsRepository);

  when(itemsRepository.removeByName("item")).thenResolve("1");

  const result = await itemsService.removeByName("item");
  expect(result).toEqual("1");
});

test("Removes from the repository by id", async () => {
  const itemsRepository = td.object<ItemsRepositoryType>();
  const itemsService = new ItemsService(itemsRepository);

  when(itemsRepository.removeById("1")).thenResolve("1");

  const result = await itemsService.removeById("1");
  expect(result).toEqual("1");
});
