import { Item } from "../types";
import { ItemsRepositoryType } from "./itemsRepository";

export class ItemsService {
  constructor(private itemsRepository: ItemsRepositoryType) {}

  findAll(): Promise<Item[]> {
    return this.itemsRepository.findAll();
  }

  findByName(name: string): Promise<Item | null> {
    return this.itemsRepository.findByName(name);
  }

  findById(id: string): Promise<Item | null> {
    return this.itemsRepository.findById(id);
  }

  add(name: string): Promise<Item> {
    return this.itemsRepository.add(name);
  }

  removeById(id: string): Promise<string> {
    return this.itemsRepository.removeById(id);
  }

  removeByName(name: string): Promise<{}> {
    return this.itemsRepository.removeByName(name);
  }
}
export type ItemsServiceType = ItemsService;
