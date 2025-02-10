import { User } from "../entities/user";

export interface CreateUserRepository {
  createUser(user: User): Promise<User>;
  findUserByEmail(email: string): Promise<User | null>;
  findUserById(id: string): Promise<User | null>;
  findAllUsers(): Promise<User[] | null>;
}
