import { Repository } from "typeorm";
import { Specification } from "../../models/Specification";
import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from "./ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
  private repository: Repository<Specification>;

  private constructor() {}

  async create({ description, name }: ICreateSpecificationDTO): Promise<void> {
    const specification = this.repository.create({ description, name });

    await this.repository.save(specification);
  }

  async findByName(name: string): Promise<Specification> {
    return await this.repository.findOne({ name });
  }
}

export { SpecificationsRepository };
