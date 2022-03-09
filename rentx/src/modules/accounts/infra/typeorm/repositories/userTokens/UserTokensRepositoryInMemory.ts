import {
  FindByRefreshToken,
  FindByUserIdAndRefreshToken,
  ICreateUserTokenDTO,
  IUserTokensRepository
} from './IUserTokensRepository'
import { UserTokens } from '../../models/UserTokens'

class UserTokensRepositoryInMemory implements IUserTokensRepository {
  private userTokens: UserTokens[] = []

  findByRefreshToken: FindByRefreshToken = async refresh_token =>
    this.userTokens.find(userToken => userToken.refresh_token === refresh_token)

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
    const foundUserToken = this.userTokens.find(
      userToken => userToken.id === id
    )

    this.userTokens.splice(this.userTokens.indexOf(foundUserToken))
  }

  async create(data: ICreateUserTokenDTO): Promise<UserTokens> {
    const userTokens = new UserTokens()

    this.userTokens.push(Object.assign(userTokens, data))

    return userTokens
  }
}

export { UserTokensRepositoryInMemory }
