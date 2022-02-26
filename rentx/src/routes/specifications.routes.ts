import { CreateSpecificationController } from '../modules/cars/useCases/specifications/createSpecification/createSpecificationController'
import { ensureAuthenticated } from '../middleware/ensureAuthenticated'

import { Router } from 'express'

const specificationsRoutes = Router();

specificationsRoutes.use(ensureAuthenticated);

const createSpecificationController = new CreateSpecificationController();

specificationsRoutes.post("/", createSpecificationController.handle);

export { specificationsRoutes };
