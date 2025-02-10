// src/interfaces/controllers/UserController.ts
import { Request, Response } from "express";
import { CreateUserUseCase } from "../../../application/useCases/createUser/createUserUseCase";
import { UserRepository } from "../../persistence/mongoose/repositories/UserRepository";
import { User } from "../../../domain/entities/user";

export class UserController {
    private createUser: CreateUserUseCase;

    constructor() {
        const userRepository = new UserRepository();
        this.createUser = new CreateUserUseCase(userRepository);
    }

    async create(req: Request, res: Response): Promise<void> {
        const { name, email, password } = req.body;
        const user = new User("", name, email, password);

        try {
            const newUser = await this.createUser.execute(user);
            res.status(201).json(newUser);
        } catch (error) {
            res.status(500).json({ message: "Error creating user" });
        }
    }
}
