import { categoriesRoutes } from './categories.routes'
import { specificationsRoutes } from './specifications.routes'

import { Router } from 'express'

const routes = Router();

routes.use("/categories", categoriesRoutes);
routes.use("/specifications", specificationsRoutes);

export { routes };
