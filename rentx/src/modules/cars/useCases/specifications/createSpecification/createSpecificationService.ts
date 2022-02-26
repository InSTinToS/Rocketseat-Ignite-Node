import { ISpecificationsRepository } from '../../../repositories/specifications/ISpecificationsRepository'
import { AppError } from '../../../../../errors/AppError'

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
      throw new AppError("Specification already exists", 400);

    await this.specificationsRepository.create({
      name,
      description,
    });
  }
}

export { CreateSpecificationService };
