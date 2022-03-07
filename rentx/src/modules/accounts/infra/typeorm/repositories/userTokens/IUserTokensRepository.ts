import { UserTokens } from '../../models/UserTokens'

interface ICreateUserTokenDTO {
  id: string
  expires_date: Date
  refresh_token: string
}

interface IUserTokensRepository {
  create(data: ICreateUserTokenDTO): Promise<UserTokens>
}

export { IUserTokensRepository, ICreateUserTokenDTO }
