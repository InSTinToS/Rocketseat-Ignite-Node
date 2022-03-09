import { AppError } from '@shared/errors/AppError'
import { IDateProvider } from '@shared/container/providers/DateProvider/IDateProvider'
import { IMailProvider } from '@shared/container/providers/MailProvider/IMailProvider'

import { IUsersRepository } from '@modules/accounts/infra/typeorm/repositories/users/IUsersRepository'
import { IUserTokensRepository } from '@modules/accounts/infra/typeorm/repositories/userTokens/IUserTokensRepository'

import { resolve } from 'path'
import { inject, injectable } from 'tsyringe'
import { v4 } from 'uuid'

@injectable()
class SendForgotPasswordMailService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('UserTokensRepository')
    private userTokensRepository: IUserTokensRepository,

    @inject('DayjsDateProvider')
    private dateProvider: IDateProvider,

    @inject('EtherealMailProvider')
    private mailProvider: IMailProvider
  ) {}

  async execute(email: string) {
    const user = await this.usersRepository.findByEmail(email)

    if (!user) throw new AppError('User with this email is not found', 404)

    const token = v4()

    await this.userTokensRepository.create({
      user_id: user.id,
      refresh_token: token,
      expires_date: this.dateProvider.addTime(3, 'h')
    })

    const templatePath = resolve(
      __dirname,
      '../../views/emails/forgotPassword.hbs'
    )

    await this.mailProvider.sendMail({
      subject: 'Recuperação de senha',
      to: email,
      path: templatePath,
      variables: {
        name: user.name,
        link: `${process.env.FORGOT_URL}${token}`
      }
    })
  }
}

export { SendForgotPasswordMailService }
