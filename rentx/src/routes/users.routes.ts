import { CreateUserController } from '../modules/accounts/useCases/users/createUser/CreateUserController'
import { ReadUserController } from '../modules/accounts/useCases/users/readUser/ReadUserController'

import { Router } from 'express'

const usersRoutes = Router();

const createUserController = new CreateUserController();
const readUserController = new ReadUserController();

usersRoutes.get("/", readUserController.handle);
usersRoutes.post("/", createUserController.handle);

export { usersRoutes };
