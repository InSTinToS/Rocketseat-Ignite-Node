import { CategoriesRepository } from "../../../repositories/categories/CategoriesRepository";
import { ReadCategoriesController } from "./ReadCategoriesController";

import { ReadCategoriesService } from "./ReadCategoriesService";

export default (): ReadCategoriesController => {
  const categoriesRepository = new CategoriesRepository();

  const readCategoriesService = new ReadCategoriesService(categoriesRepository);

  const readCategoriesController = new ReadCategoriesController(
    readCategoriesService
  );

  return readCategoriesController;
};
