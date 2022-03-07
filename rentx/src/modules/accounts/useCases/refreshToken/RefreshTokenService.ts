import { AppError } from '@shared/errors/AppError'
import { DayjsDateProvider } from '@shared/container/providers/DateProvider/infra/DayjsDateProvider/DayjsDateProvider'
import { IDateProvider } from '@shared/container/providers/DateProvider/IDateProvider'

import { UserTokensRepository } from '@modules/accounts/infra/typeorm/repositories/userTokens/UserTokensRepository'
import { IUserTokensRepository } from '@modules/accounts/infra/typeorm/repositories/userTokens/IUserTokensRepository'

import auth from '@config/auth'

import { sign, verify } from 'jsonwebtoken'
import { inject, injectable } from 'tsyringe'

@injectable()
class RefreshTokenService {
  constructor(
    @inject('UserTokensRepository')
    private userTokensRepository: IUserTokensRepository,

    @inject('DayjsDateProvider')
    private dateProvider: IDateProvider
  ) {}

  async execute(token: string) {
    const { sub, email } = verify(token, auth.refresh_token.secret) as {
      sub: string
      email: string
    }

    const user_id = sub

    const userToken =
      await this.userTokensRepository.findByUserIdAndRefreshToken(
        user_id,
        token
      )

    if (!userToken) throw new AppError('Refresh Token does not exists!')

    this.userTokensRepository.deleteById(userToken.id)

    const expires_date = this.dateProvider.addDays(
      auth.refresh_token.expires_in_days
    )

    const refresh_token = sign({ email }, auth.refresh_token.secret, {
      subject: user_id,
      expiresIn: auth.refresh_token.expires_in
    })

    await this.userTokensRepository.create({
      expires_date,
      id: user_id,
      refresh_token
    })

    return refresh_token
  }
}

export { RefreshTokenService }
