import { UserTokens } from '../../models/UserTokens'

interface ICreateUserTokenDTO {
  user_id: UserTokens['id']
  expires_date: UserTokens['expires_date']
  refresh_token: UserTokens['refresh_token']
}

interface IFindByUserIdAndRefreshTokenDTO {
  user_id: UserTokens['user_id']
  refresh_token: UserTokens['refresh_token']
}

type FindByUserIdAndRefreshToken = (
  data: IFindByUserIdAndRefreshTokenDTO
) => Promise<UserTokens>

type FindByRefreshToken = (token: string) => Promise<UserTokens>

interface IUserTokensRepository {
  deleteById(id: string): Promise<void>
  findByRefreshToken: FindByRefreshToken
  create(data: ICreateUserTokenDTO): Promise<UserTokens>
  findByUserIdAndRefreshToken: FindByUserIdAndRefreshToken
}

export type {
  IUserTokensRepository,
  ICreateUserTokenDTO,
  FindByUserIdAndRefreshToken,
  FindByRefreshToken
}
