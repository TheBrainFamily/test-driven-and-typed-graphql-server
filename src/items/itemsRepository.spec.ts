import { ItemsRepository } from "./itemsRepository";

test("It gets items from in memory store", async () => {
  const itemsRepository = new ItemsRepository();

  itemsRepository.items.push({ id: "1", name: "item" });

  const result = await itemsRepository.findAll();
  expect(result).toEqual([{ id: "1", name: "item" }]);
});

test("it adds the item to the memory store", async () => {
  const itemsRepository = new ItemsRepository();

  const result = await itemsRepository.add("item");

  expect(result).toEqual({ id: "1", name: "item" });
  expect(!!itemsRepository.items.find(i => i.name === "item")).toEqual(true);
});

test("it returns the added item", async () => {
  const itemsRepository = new ItemsRepository();

  await itemsRepository.add("item");

  expect(!!itemsRepository.items.find(i => i.name === "item")).toEqual(true);
});

test("finds by id", async () => {
  const itemsRepository = new ItemsRepository();
  itemsRepository.items.push({ id: "1", name: "item" });

  const result = await itemsRepository.findById("1");

  expect(result).toEqual({ id: "1", name: "item" });
});

test("removes by id removes from the datastore", async () => {
  const itemsRepository = new ItemsRepository();
  itemsRepository.items.push({ id: "1", name: "item" });

  await itemsRepository.removeById("1");

  expect(!!itemsRepository.items.find(i => i.id === "1")).toBeFalsy();
});

test("removes by id returns the id", async () => {
  const itemsRepository = new ItemsRepository();
  itemsRepository.items.push({ id: "1", name: "item" });

  const result = await itemsRepository.removeById("1");

  expect(result).toEqual("1");
});

test("removes by name removes from the datastore", async () => {
  const itemsRepository = new ItemsRepository();
  itemsRepository.items.push({ id: "1", name: "item" });

  await itemsRepository.removeByName("item");

  expect(!!itemsRepository.items.find(i => i.id === "1")).toBeFalsy();
});

test("removes by name returns the id", async () => {
  const itemsRepository = new ItemsRepository();
  itemsRepository.items.push({ id: "1", name: "item" });

  const result = await itemsRepository.removeByName("item");

  expect(result).toEqual("1");
});

test("when nothing to remove return 0", async () => {
  const itemsRepository = new ItemsRepository();
  itemsRepository.items.push({ id: "1", name: "item" });

  const result = await itemsRepository.removeByName("nonexisting");

  expect(result).toEqual("0");
});

test("finds by name", async () => {
  const itemsRepository = new ItemsRepository();
  itemsRepository.items.push({ id: "1", name: "item" });

  const result = await itemsRepository.findByName("item");

  expect(result).toEqual({ id: "1", name: "item" });
});
