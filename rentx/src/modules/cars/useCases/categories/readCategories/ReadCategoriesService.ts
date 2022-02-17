import { Category } from "../../../models/Category";
import { ICategoriesRepository } from "../../../repositories/categories/ICategoriesRepository";

class ReadCategoriesService {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute(): Category[] {
    return this.categoriesRepository.read();
  }
}

export { ReadCategoriesService };
