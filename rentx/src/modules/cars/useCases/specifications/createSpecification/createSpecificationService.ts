import { ISpecificationsRepository } from "../../../repositories/specifications/ISpecificationsRepository";

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

class CreateSpecificationService {
  constructor(private specificationsRepository: ISpecificationsRepository) {}

  execute({ name, description }: ICreateSpecificationDTO): void {
    const specificationAlreadyExists =
      this.specificationsRepository.findByName(name);

    if (specificationAlreadyExists)
      throw new Error("specification already exists");

    this.specificationsRepository.create({
      name,
      description,
    });
  }
}

export { CreateSpecificationService };
