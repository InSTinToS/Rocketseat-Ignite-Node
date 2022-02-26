import { CreateUserController } from '../modules/accounts/useCases/users/createUser/CreateUserController'
import { ReadUserController } from '../modules/accounts/useCases/users/readUser/ReadUserController'
import { UpdateUserAvatarController } from '../modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController'
import uploadConfig from '../config/upload'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

import { Router } from 'express'
import multer from 'multer'

const usersRoutes = Router();

const upload = multer(uploadConfig("./temp/avatar"));

const createUserController = new CreateUserController();
const readUserController = new ReadUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

usersRoutes.get("/", readUserController.handle);

usersRoutes.post("/", createUserController.handle);

usersRoutes.patch(
  "/avatar",
  ensureAuthenticated,
  upload.single("avatar"),
  updateUserAvatarController.handle
);

export { usersRoutes };
