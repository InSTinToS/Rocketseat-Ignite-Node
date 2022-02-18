import { Category } from '../../models/Category'
import {
  ICategoriesRepository,
  ICreateCategoryDTO
} from './ICategoriesRepository'

import { getRepository, Repository } from 'typeorm'

class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
  }

  async create({ description, name }: ICreateCategoryDTO) {
    const newCategory = this.repository.create({ description, name });
    await this.repository.save(newCategory);
  }

  async read() {
    return await this.repository.find();
  }

  async findByName(name: string) {
    return await this.repository.findOne({ name });
  }
}

export { CategoriesRepository };
