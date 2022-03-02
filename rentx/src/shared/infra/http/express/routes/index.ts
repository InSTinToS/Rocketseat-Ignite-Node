import { categoriesRoutes } from './categories.routes'
import { specificationsRoutes } from './specifications.routes'
import { usersRoutes } from './users.routes'
import { authenticationsRoutes } from './authentications.routes'

import { Router } from 'express'
import 'express-async-errors'

const routes = Router();

routes.use("/users", usersRoutes);
routes.use("/categories", categoriesRoutes);
routes.use("/specifications", specificationsRoutes);
routes.use(authenticationsRoutes);

export { routes };
