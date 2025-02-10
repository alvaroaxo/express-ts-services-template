import { User } from "../../../domain/entities/user";
import { CreateUserRepository } from "../../../domain/repositories/userRepository";

export class CreateUserUseCase {
  constructor(private readonly createUserRepository: CreateUserRepository) {}

  async execute(user: User): Promise<User> {
    return this.createUserRepository.createUser(user);
  }
}
