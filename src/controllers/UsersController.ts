import { Request, Response } from "express";
import { getRepository } from "typeorm";

import { User } from "../models/User";

class UsersController {
  async create(request: Request, response: Response) {
    const { name, email } = request.body;
    const usersRepository = getRepository(User);
    const userAlreadyExists = usersRepository.findOne({ email });

    if (userAlreadyExists) {
      return response.status(322).json({ error: "User already exists" });
    }

    const user = usersRepository.create({ name, email });
    await usersRepository.save(user);

    return response.status(201).json(user);
  }
}

export { UsersController }
