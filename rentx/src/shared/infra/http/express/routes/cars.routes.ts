import { ensureAdmin } from '../middlewares/ensureAdmin'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'
import { verifyAuthenticated } from '../middlewares/verifyAuthenticated'

import { CreateCarController } from '@modules/cars/useCases/cars/createCar/CreateCarController'
import { ReadCarsController } from '@modules/cars/useCases/cars/readCars/ReadCarsController'
import { CreateCarSpecificationsController } from '@modules/cars/useCases/carsSpecifications/createCarSpecifications/CreateCarSpecificationsController'

import { Router } from 'express'

const carsRoutes = Router()

const createCarController = new CreateCarController()
const readCarsController = new ReadCarsController()
const createCarSpecificationsController =
  new CreateCarSpecificationsController()

carsRoutes.get('/', verifyAuthenticated, readCarsController.handle)

carsRoutes.post(
  '/specifications/:id',
  ensureAuthenticated,
  ensureAdmin,
  createCarSpecificationsController.handle
)

carsRoutes.post(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  createCarController.handle
)

export { carsRoutes }
