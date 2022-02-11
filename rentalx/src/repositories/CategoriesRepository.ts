import Category from "../models/Category";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

class CategoriesRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
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

export default CategoriesRepository;