import { ResetPasswordController } from '@modules/accounts/useCases/resetPassword/ResetPasswordController'
import { SendForgotPasswordMailController } from '@modules/accounts/useCases/sendForgotPasswordMail/SendForgotPasswordMailController'

import { Router } from 'express'

const passwordRoutes = Router()

const sendForgotPasswordMailService = new SendForgotPasswordMailController()
const resetPasswordController = new ResetPasswordController()

passwordRoutes.post('/reset', resetPasswordController.handle)
passwordRoutes.post('/forgot', sendForgotPasswordMailService.handle)

export { passwordRoutes }
