import { IUsersRepository } from '../../../infra/typeorm/repositories/IUsersRepository'

import { inject, injectable } from 'tsyringe'

@injectable()
class ReadUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute() {
    const users = await this.usersRepository.read()
    return users
  }
}

export { ReadUserService }
