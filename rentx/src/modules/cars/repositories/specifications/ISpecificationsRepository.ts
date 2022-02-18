import { Specification } from '../../models/Specification'

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  findByName(name: string): Promise<Specification | undefined>;
  create({ description, name }: ICreateSpecificationDTO): Promise<void>;
}

export { ISpecificationsRepository, ICreateSpecificationDTO };
