import { Category } from "../../models/Category";
import {
  ICreateCategoryDTO,
  ICategoriesRepository,
} from "./ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[];
  private static INSTANCE: CategoriesRepository;

  private constructor() {
    this.categories = [];
  }

  static getInstance(): CategoriesRepository {
    if (!CategoriesRepository.INSTANCE)
      CategoriesRepository.INSTANCE = new CategoriesRepository();

    return CategoriesRepository.INSTANCE;
  }

  create(dataToCreate: ICreateCategoryDTO): void {
    const newCategory = new Category();
    Object.assign(newCategory, { ...dataToCreate, created_at: new Date() });
    this.categories.push(newCategory);
  }

  read(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category | undefined {
    return this.categories.find((category) => category.name === name);
  }
}

export { CategoriesRepository };
