import {
  ICreateUserTokenDTO,
  IUserTokensRepository
} from './IUserTokensRepository'
import { UserTokens } from '../../models/UserTokens'

class UsersRepositoryInMemory implements IUserTokensRepository {
  private userTokens: UserTokens[] = []

  async create(data: ICreateUserTokenDTO): Promise<UserTokens> {
    const userTokens = new UserTokens()

    this.userTokens.push(Object.assign(userTokens, data))

    return userTokens
  }
}

export { UsersRepositoryInMemory }
