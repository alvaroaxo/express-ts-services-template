// src/domain/entities/Post.ts
export class Post {
  constructor(
    public id: string,
    public title: string,
    public content: string,
    public userId: string // Relación con User
  ) {}
}
