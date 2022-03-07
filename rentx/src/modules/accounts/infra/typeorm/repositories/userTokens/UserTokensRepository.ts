import {
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

  async deleteById(id: string): Promise<void> {
    await this.repository.delete(id)
  }

  async findByUserIdAndRefreshToken(
    user_id: string,
    refresh_token: string
  ): Promise<UserTokens> {
    const userToken = await this.repository.findOne({
      user_id,
      refresh_token
    })

    return userToken
  }

  async create(data: ICreateUserTokenDTO) {
    const newUserToken = this.repository.create(data)
    await this.repository.save(newUserToken)
    return newUserToken
  }
}

export { UserTokensRepository }
