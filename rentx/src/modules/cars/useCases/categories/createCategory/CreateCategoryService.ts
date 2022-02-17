import { ICategoriesRepository } from "../../../repositories/categories/ICategoriesRepository";

interface ICreateCategoryServiceDTO {
  name: string;
  description: string;
}

class CreateCategoryService {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  async execute({
    name,
    description,
  }: ICreateCategoryServiceDTO): Promise<void> {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(
      name
    );

    if (categoryAlreadyExists) throw new Error("Category already exists");

    await this.categoriesRepository.create({ description, name });
  }
}

export { CreateCategoryService, ICreateCategoryServiceDTO };
