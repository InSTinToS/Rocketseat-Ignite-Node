import { Router } from "express";
import multer from "multer";

import {
  createCategoryController,
  readCategoriesController,
} from "../modules/cars/useCases/categories";
import { importCategoryController } from "../modules/cars/useCases/categories/importCategory";

const categoriesRoutes = Router();

const upload = multer({ dest: "./temp" });

categoriesRoutes.post("/", (req, res) =>
  createCategoryController().handle(req, res)
);

categoriesRoutes.get("/", (req, res) =>
  readCategoriesController().handle(req, res)
);

categoriesRoutes.post("/import", upload.single("file"), (req, res) => {
  return importCategoryController.handle(req, res);
});

export { categoriesRoutes };
