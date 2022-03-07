import { UserTokens } from '../../models/UserTokens'

interface ICreateUserTokenDTO {
  id: string
  expires_date: Date
  refresh_token: string
}

interface IUserTokensRepository {
  create(data: ICreateUserTokenDTO): Promise<UserTokens>
  findByUserIdAndRefreshToken(
    user_id: string,
    refresh_token: string
  ): Promise<UserTokens>
  deleteById(id: string): Promise<void>
}

export { IUserTokensRepository, ICreateUserTokenDTO }
