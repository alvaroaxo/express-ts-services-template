import { Post } from "domain/entities/post";
import { PostModel } from "../models/postModel";

export class PostRepository {
  async createPost(post: Post): Promise<Post> {
    const newPost = await PostModel.create(post);
    return new Post(
      newPost._id.toString(),
      newPost.title,
      newPost.content,
      newPost.userId.toString()
    );
  }

  async findPostsByUserId(userId: string): Promise<Post[]> {
    const posts = await PostModel.find({ userId }).exec();
    return posts.map(
      (post) =>
        new Post(
          post._id.toString(),
          post.title,
          post.content,
          post.userId.toString()
        )
    );
  }
}
