import { CreateCategoryController } from '../modules/cars/useCases/categories/createCategory/CreateCategoryController'
import { ImportCategoryController } from '../modules/cars/useCases/categories/importCategory/ImportCategoryController'
import { ReadCategoriesController } from '../modules/cars/useCases/categories/readCategories/ReadCategoriesController'

import { Router } from 'express'
import multer from 'multer'

const categoriesRoutes = Router();
const upload = multer({ dest: "./temp" });

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const readCategoriesController = new ReadCategoriesController();

categoriesRoutes.post("/", createCategoryController.handle);

categoriesRoutes.get("/", readCategoriesController.handle);

categoriesRoutes.post(
  "/import",
  upload.single("file"),
  importCategoryController.handle
);

export { categoriesRoutes };
