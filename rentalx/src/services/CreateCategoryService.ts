import ICategoriesRepository from "../repositories/ICategoriesRepository";

interface ICreateCategoryServiceDTO {
  name: string;
  description: string;
}

class CreateCategoryService {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute({ name, description }: ICreateCategoryServiceDTO): void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) throw new Error("Category already exists");

    this.categoriesRepository.create({ description, name });
  }
}

export default CreateCategoryService;
