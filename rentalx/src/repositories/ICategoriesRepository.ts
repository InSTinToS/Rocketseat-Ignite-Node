import Category from "../models/Category";

export interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  read(): Category[];
  findByName(name: string): Category;
  create(dataToCreate: ICreateCategoryDTO): void;
}

export default ICategoriesRepository;
