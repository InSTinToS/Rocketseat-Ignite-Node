import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

import { CreateRentalController } from '@modules/rentals/userCases/createRental/CreateRentalController'

import { Router } from 'express'

const rentalRoutes = Router()

const createRentalController = new CreateRentalController()

rentalRoutes.post('/', ensureAuthenticated, createRentalController.handle)

export { rentalRoutes }
