import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

import { CreateRentalController } from '@modules/rentals/userCases/createRental/CreateRentalController'
import { DevolutionRentalController } from '@modules/rentals/userCases/devolutionRental/DevolutionRentalController'
import { ReadRentalsByUserController } from '@modules/rentals/userCases/readRentalsByUser/ReadRentalsByUserController'

import { Router } from 'express'

const rentalRoutes = Router()

const createRentalController = new CreateRentalController()
const devolutionRentalController = new DevolutionRentalController()
const readRentalsByUserController = new ReadRentalsByUserController()

rentalRoutes.post('/', ensureAuthenticated, createRentalController.handle)

rentalRoutes.post(
  '/devolutions/:id',
  ensureAuthenticated,
  devolutionRentalController.handle
)

rentalRoutes.get(
  '/user',
  ensureAuthenticated,
  readRentalsByUserController.handle
)

export { rentalRoutes }
