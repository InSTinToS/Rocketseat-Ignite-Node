import {
  FindByRefreshToken,
  FindByUserIdAndRefreshToken,
  ICreateUserTokenDTO,
  IUserTokensRepository
} from './IUserTokensRepository'
import { UserTokens } from '../../models/UserTokens'

import { getRepository, Repository } from 'typeorm'

class UserTokensRepository implements IUserTokensRepository {
  private repository: Repository<UserTokens>

  constructor() {
    this.repository = getRepository(UserTokens)
  }

  findByRefreshToken: FindByRefreshToken = async refresh_token =>
    await this.repository.findOne({ refresh_token })

  async deleteById(id: string): Promise<void> {
    await this.repository.delete(id)
  }

  findByUserIdAndRefreshToken: FindByUserIdAndRefreshToken = async data =>
    await this.repository.findOne(data)

  async create(data: ICreateUserTokenDTO) {
    const newUserToken = this.repository.create(data)
    await this.repository.save(newUserToken)
    return newUserToken
  }
}

export { UserTokensRepository }
