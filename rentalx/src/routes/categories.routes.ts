import { Router } from "express";

import {
  createCategoryController,
  readCategoriesController,
} from "../modules/cars/useCases/categories";

const categoriesRoutes = Router();

categoriesRoutes.post("/", (req, res) =>
  createCategoryController.handle(req, res)
);

categoriesRoutes.get("/", (req, res) =>
  readCategoriesController.handle(req, res)
);

export { categoriesRoutes };
