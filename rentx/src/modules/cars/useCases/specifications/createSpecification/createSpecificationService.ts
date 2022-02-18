import { ISpecificationsRepository } from '../../../repositories/specifications/ISpecificationsRepository'

import { inject, injectable } from 'tsyringe'

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

@injectable()
class CreateSpecificationService {
  constructor(
    @inject("SpecificationsRepository")
    private specificationsRepository: ISpecificationsRepository
  ) {}

  async execute({ name, description }: ICreateSpecificationDTO): Promise<void> {
    const specificationAlreadyExists =
      await this.specificationsRepository.findByName(name);

    if (specificationAlreadyExists)
      throw new Error("Specification already exists");

    await this.specificationsRepository.create({
      name,
      description,
    });
  }
}

export { CreateSpecificationService };
