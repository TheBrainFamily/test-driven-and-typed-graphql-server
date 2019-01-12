import { Comment } from "../types";
import { CommentsRepositoryType } from "./commentsRepository";

export class CommentsService {
  constructor(private commentsRepository: CommentsRepositoryType) {}

  findAll(): Promise<Comment[]> {
    return this.commentsRepository.findAll();
  }

  findByName(name: string): Promise<Comment | null> {
    return this.commentsRepository.findByName(name);
  }

  findById(id: string): Promise<Comment | null> {
    return this.commentsRepository.findById(id);
  }

  add(name: string): Promise<Comment> {
    return this.commentsRepository.add(name);
  }

  removeById(id: string): Promise<string> {
    return this.commentsRepository.removeById(id);
  }

  removeByName(name: string): Promise<string> {
    return this.commentsRepository.removeByName(name);
  }
}
export type CommentsServiceType = CommentsService;
