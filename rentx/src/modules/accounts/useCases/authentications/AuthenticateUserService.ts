import { User } from '../../infra/typeorm/models/User'
import { IUsersRepository } from '../../infra/typeorm/repositories/users/IUsersRepository'

import { AppError } from '@shared/errors/AppError'
import { IDateProvider } from '@shared/container/providers/DateProvider/IDateProvider'

import { UserTokensRepository } from '@modules/accounts/infra/typeorm/repositories/userTokens/UserTokensRepository'
import { IUserTokensRepository } from '@modules/accounts/infra/typeorm/repositories/userTokens/IUserTokensRepository'

import auth from '@config/auth'

import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import { inject, injectable } from 'tsyringe'

interface IRequest {
  email: User['email']
  password: User['password']
}

interface IResponse {
  token: string
  refresh_token: string
  user: {
    name: User['name']
    email: User['email']
  }
}

@injectable()
class AuthenticateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('UserTokensRepository')
    private usersTokensRepository: IUserTokensRepository,

    @inject('DayjsDateProvider')
    private dateProvider: IDateProvider
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email)

    if (!user) throw new AppError('E-mail or password incorrect', 401)

    const passwordIsValid = await compare(password, user.password)

    if (!passwordIsValid)
      throw new AppError('E-mail or password incorrect', 401)

    const token = sign({}, auth.token.secret, {
      subject: user.id,
      expiresIn: auth.token.expires_in
    })

    const refresh_token = sign({ email }, auth.refresh_token.secret, {
      subject: user.id,
      expiresIn: auth.refresh_token.expires_in
    })

    await this.usersTokensRepository.create({
      id: user.id,
      expires_date: this.dateProvider.addDays(
        auth.refresh_token.expires_in_days
      ),
      refresh_token
    })

    return {
      token,
      refresh_token,
      user: { name: user.name, email: user.email }
    }
  }
}
export { AuthenticateUserService }
