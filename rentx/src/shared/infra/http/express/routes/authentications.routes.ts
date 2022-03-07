import { AuthenticateUserController } from '@modules/accounts/useCases/authentications/AuthenticateUserController'
import { RefreshTokenController } from '@modules/accounts/useCases/refreshToken/RefreshTokenController'

import { Router } from 'express'

const authenticationsRoutes = Router()
const authenticateUserController = new AuthenticateUserController()
const refreshTokenController = new RefreshTokenController()

authenticationsRoutes.post('/', authenticateUserController.handle)
authenticationsRoutes.post('/refresh-token', refreshTokenController.handle)

export { authenticationsRoutes }
