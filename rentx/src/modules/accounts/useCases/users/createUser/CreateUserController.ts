import { CreateUserService } from './CreateUserService'

import { Request, Response } from 'express'
import { container } from 'tsyringe'

class CreateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const userData = req.body;
    const createUserService = container.resolve(CreateUserService);

    await createUserService.execute(userData);
    return res.status(201).send();
  }
}

export { CreateUserController };
