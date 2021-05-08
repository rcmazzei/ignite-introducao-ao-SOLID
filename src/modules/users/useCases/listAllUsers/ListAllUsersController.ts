import { Request, Response } from "express";
import { User } from "modules/users/model/User";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) { }

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.headers;

      const users = this.listAllUsersUseCase.execute({ user_id: user_id.toString() });

      return response.status(200).json(users);
    }
    catch (err) {
      return response.status(400).json({ error: err.message });
    }

  }
}

export { ListAllUsersController };
