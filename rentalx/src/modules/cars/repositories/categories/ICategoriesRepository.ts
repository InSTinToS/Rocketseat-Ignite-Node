import { Category } from "../../models/Category";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  read(): Category[];
  findByName(name: string): Category;
  create(dataToCreate: ICreateCategoryDTO): void;
}

export { ICategoriesRepository, ICreateCategoryDTO };
