import { Specification } from '../../typeorm/models/Specification'
import {
  ICreateSpecificationDTO,
  ISpecificationsRepository
} from './ISpecificationsRepository'

import { getRepository, Repository } from 'typeorm'

class SpecificationsRepository implements ISpecificationsRepository {
  private repository: Repository<Specification>;

  constructor() {
    this.repository = getRepository(Specification);
  }

  async create(data: ICreateSpecificationDTO) {
    const specification = this.repository.create(data);
    await this.repository.save(specification);
  }

  async findByName(name: string) {
    const found = await this.repository.findOne({ name });

    return found;
  }
}

export { SpecificationsRepository };
