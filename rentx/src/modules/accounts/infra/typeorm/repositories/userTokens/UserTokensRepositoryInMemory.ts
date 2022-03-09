import {
  FindByUserIdAndRefreshToken,
  ICreateUserTokenDTO,
  IUserTokensRepository
} from './IUserTokensRepository'
import { UserTokens } from '../../models/UserTokens'

class UserTokensRepositoryInMemory implements IUserTokensRepository {
  private userTokens: UserTokens[] = []

  findByUserIdAndRefreshToken: FindByUserIdAndRefreshToken = async ({
    refresh_token,
    user_id
  }) =>
    this.userTokens.find(
      userToken =>
        userToken.user_id === user_id &&
        userToken.refresh_token === refresh_token
    )

  async deleteById(id: string): Promise<void> {
    this.userTokens = this.userTokens.filter(userToken => userToken.id !== id)
  }

  async create(data: ICreateUserTokenDTO): Promise<UserTokens> {
    const userTokens = new UserTokens()

    this.userTokens.push(Object.assign(userTokens, data))

    return userTokens
  }
}

export { UserTokensRepositoryInMemory }
