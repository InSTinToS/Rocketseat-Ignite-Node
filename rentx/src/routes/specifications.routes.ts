import { CreateSpecificationController } from '../modules/cars/useCases/specifications/createSpecification/createSpecificationController'

import { Router } from 'express'

const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

specificationsRoutes.post("/", createSpecificationController.handle);

export { specificationsRoutes };
