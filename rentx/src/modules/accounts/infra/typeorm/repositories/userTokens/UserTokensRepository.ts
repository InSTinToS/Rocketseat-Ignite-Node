import {
  ICreateUserTokenDTO,
  IUserTokensRepository
} from './IUserTokensRepository'
import { UserTokens } from '../../models/UserTokens'

import { getRepository, Repository } from 'typeorm'

class UsersRepository implements IUserTokensRepository {
  private repository: Repository<UserTokens>

  constructor() {
    this.repository = getRepository(UserTokens)
  }

  async create(data: ICreateUserTokenDTO) {
    const newUserToken = this.repository.create(data)
    await this.repository.save(newUserToken)
    return newUserToken
  }
}

export { UsersRepository }
