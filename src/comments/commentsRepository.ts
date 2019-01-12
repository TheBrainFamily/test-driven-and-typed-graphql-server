import { Comment } from "../types";

// We can easily add another implementation of this particular repository that talks to a real db, microservice, whatever else. As long as the type stays the same, no tests need to rerun besides the one for the new repository implementation
// To do this, we would use IDE to extract interface from the class (select all - and only - the public methods!)
// interface NewCommentsRepository {
//     findAll(): Promise<Comment[]>;
// }
// and then change the exported type to the interface instead of the class
// export type CommentsRepositoryType = NewCommentsRepository;
// At this point we could possibly move this interface and exported type to a separate file (with WebStorm you can use the Move Modules Members refactor, and select both the Interface and the Type), which will keep the app and the tests working and properly typed
let nextId = 1;

export class CommentsRepository {
  add(name: string): Promise<Comment> {
    const newComment = { id: nextId.toString(), name };
    this.comments.push(newComment);
    nextId++;
    return Promise.resolve(newComment);
  }
  findById(id: string): Promise<Comment | null> {
    return Promise.resolve(this.comments.find(i => i.id === id) || null);
  }

  removeById(id: string): Promise<string> {
    this.comments = this.comments.filter(i => i.id !== id);
    return Promise.resolve(id);
  }

  findByName(name: string): Promise<Comment | null> {
    return Promise.resolve(this.comments.find(i => i.name === name) || null);
  }
  comments: Comment[] = [];
  public findAll(): Promise<Comment[]> {
    return Promise.resolve(this.comments);
  }

  removeByName(name: string): Promise<string> {
    const commentToRemove = this.comments.find(i => i.name === name) || { id: "0" };
    this.comments = this.comments.filter(i => i.name !== name);
    return Promise.resolve(commentToRemove.id);
  }
}

export type CommentsRepositoryType = CommentsRepository;
