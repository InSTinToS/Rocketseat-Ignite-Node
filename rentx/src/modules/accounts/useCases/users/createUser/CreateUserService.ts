import {
  ICreateUserDTO,
  IUsersRepository
} from '../../../repositories/IUsersRepository'
import { AppError } from '../../../../../errors/AppError'

import { hash } from 'bcrypt'
import { inject, injectable } from 'tsyringe'

@injectable()
class CreateUserService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute(data: ICreateUserDTO) {
    const emailAlreadyExists = await this.usersRepository.findByEmail(
      data.email
    );

    if (emailAlreadyExists) throw new AppError("E-mail already exists", 400);

    const passwordHash = await hash(data.password, 8);

    await this.usersRepository.create({ ...data, password: passwordHash });
  }
}

export { CreateUserService };
