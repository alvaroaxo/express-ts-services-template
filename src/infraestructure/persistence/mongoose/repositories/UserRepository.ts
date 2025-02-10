import { User } from "../../../../domain/entities/user";
import { UserModel } from "../models/userModel";
import { CreateUserRepository } from "../../../../domain/repositories/userRepository";
import { PostRepository } from "./PostUser";
import { Post } from "../../../../domain/entities/post";

export class UserRepository implements CreateUserRepository {
  private postRepository: PostRepository;
  constructor() {
    this.postRepository = new PostRepository();
  }

  async findUserByEmail(email: string): Promise<User | null> {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return null;
    }

    const posts = await this.postRepository.findPostsByUserId(user._id.toString());

     const postsMapped = posts.map(p => new Post(p.id, p.title, p.content, p.userId))
    return new User(
      user._id.toString(),
      user.name,
      user.email,
      user.password,
      postsMapped
    );

  }
  async findUserById(id: string): Promise<User | null> {
    const user = await UserModel.findById(id);
    return new User(user.id, user.name, user.email, user.password);
  }
  async findAllUsers(): Promise<User[] | null> {
    const users = await UserModel.find();
    return users.map((u) => new User(u.id, u.name, u.email, u.password));
  }
  async createUser(user: User): Promise<User> {
    const newUser = await UserModel.create(user);
    return new User(newUser.id, newUser.name, newUser.email, newUser.password);
  }

  private mapUser(user: any): User {
    if (!user) return null;
    return new User(user._id, user.name, user.email, user.password);
  }
}
