import { AuthenticateUserController } from '../modules/accounts/useCases/authentications/AuthenticateUserController'

import { Router } from 'express'

const authenticationsRoutes = Router();

const authenticateUserController = new AuthenticateUserController();

authenticationsRoutes.post("/sessions", authenticateUserController.handle);

export { authenticationsRoutes };
