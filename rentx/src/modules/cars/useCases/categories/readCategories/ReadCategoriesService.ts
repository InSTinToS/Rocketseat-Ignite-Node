import { inject, injectable } from "tsyringe";
import { Category } from "../../../models/Category";
import { ICategoriesRepository } from "../../../repositories/categories/ICategoriesRepository";

@injectable()
class ReadCategoriesService {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) {}

  execute(): Promise<Category[]> {
    return this.categoriesRepository.read();
  }
}

export { ReadCategoriesService };
