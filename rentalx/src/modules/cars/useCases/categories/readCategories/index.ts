import { CategoriesRepository } from "../../../repositories/categories/CategoriesRepository";
import { ReadCategoriesController } from "./ReadCategoriesController";

import { ReadCategoriesService } from "./ReadCategoriesService";

const categoriesRepository = CategoriesRepository.getInstance();

const readCategoriesService = new ReadCategoriesService(categoriesRepository);

const readCategoriesController = new ReadCategoriesController(
  readCategoriesService
);

export { readCategoriesController };
