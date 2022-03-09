import { AuthenticateUserController } from '@modules/accounts/useCases/authentications/AuthenticateUserController'
import { RefreshTokenController } from '@modules/accounts/useCases/refreshToken/RefreshTokenController'

import { Router } from 'express'
import 'express-async-errors'

const authenticationsRoutes = Router()
const refreshTokenController = new RefreshTokenController()
const authenticateUserController = new AuthenticateUserController()

authenticationsRoutes.post('/', authenticateUserController.handle)
authenticationsRoutes.post('/refresh-token', refreshTokenController.handle)

export { authenticationsRoutes }
