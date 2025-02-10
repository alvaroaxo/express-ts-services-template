import { Post } from "./post";

export class User {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public password: string,
    public posts: Post[] = []
  ) {}
}
