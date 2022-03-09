import 'reflect-metadata'

import { SendForgotPasswordMailService } from './SendForgotPasswordMailService'

import { IDateProvider } from '@shared/container/providers/DateProvider/IDateProvider'
import { MailProviderInMemory } from '@shared/container/providers/MailProvider/MailProviderInMemory'
import { DayjsDateProvider } from '@shared/container/providers/DateProvider/infra/DayjsDateProvider/DayjsDateProvider'
import { AppError } from '@shared/errors/AppError'

import { UsersRepositoryInMemory } from '@modules/accounts/infra/typeorm/repositories/users/UsersRepositoryInMemory'
import { UserTokensRepositoryInMemory } from '@modules/accounts/infra/typeorm/repositories/userTokens/UserTokensRepositoryInMemory'

let dateProvider: IDateProvider
let mailProviderInMemory: MailProviderInMemory
let usersRepositoryInMemory: UsersRepositoryInMemory
let usersTokenRepositoryInMemory: UserTokensRepositoryInMemory
let sendForgotPasswordMailService: SendForgotPasswordMailService

describe('SendForgotPasswordMail Service', () => {
  beforeEach(() => {
    dateProvider = new DayjsDateProvider()
    mailProviderInMemory = new MailProviderInMemory()
    usersRepositoryInMemory = new UsersRepositoryInMemory()
    usersTokenRepositoryInMemory = new UserTokensRepositoryInMemory()

    sendForgotPasswordMailService = new SendForgotPasswordMailService(
      usersRepositoryInMemory,
      usersTokenRepositoryInMemory,
      dateProvider,
      mailProviderInMemory
    )
  })

  it('should be able to send a forgot password mail', async () => {
    const sendMail = jest.spyOn(mailProviderInMemory, 'sendMail')

    await usersRepositoryInMemory.create({
      email: 'caji@za.bs',
      password: 'B61MRJSL',
      name: 'Mabelle Diaz',
      driver_license: '5452'
    })

    await sendForgotPasswordMailService.execute('caji@za.bs')

    expect(sendMail).toHaveBeenCalled()
  })

  it('should not be able to sent forgot email if user does not exists', async () => {
    expect(async () => {
      await sendForgotPasswordMailService.execute('tintebin@ebafcur.qa')
    }).rejects.toBeInstanceOf(AppError)
  })

  it('should be able to create an users token', async () => {
    const generateToken = jest.spyOn(usersTokenRepositoryInMemory, 'create')

    await usersRepositoryInMemory.create({
      email: 'gace@fap.th',
      password: 'B61MRJSL',
      name: 'Mabelle Diaz',
      driver_license: '5452'
    })

    await sendForgotPasswordMailService.execute('gace@fap.th')

    expect(generateToken).toBeCalled()
  })
})
