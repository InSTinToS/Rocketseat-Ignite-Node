import { ICreateUserDTO } from '../../infra/typeorm/repositories/IUsersRepository'
import { UsersRepositoryInMemory } from '../../infra/typeorm/repositories/UsersRepositoryInMemory'
import { CreateUserService } from '../users/createUser/CreateUserService'
import { AuthenticateUserService } from './AuthenticateUserService'

import { AppError } from '@shared/errors/AppError'

let authenticateUserService: AuthenticateUserService
let usersRepositoryInMemory: UsersRepositoryInMemory
let createUserService: CreateUserService

describe('Authenticate user', () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory()
    authenticateUserService = new AuthenticateUserService(
      usersRepositoryInMemory
    )
    createUserService = new CreateUserService(usersRepositoryInMemory)
  })

  it('Should be able to authenticate an user', async () => {
    const user: ICreateUserDTO = {
      name: 'user.name-test',
      email: 'user.email-test',
      password: 'user.password-test',
      driver_license: 'user.driver_license-test'
    }

    await createUserService.execute(user)

    const { token } = await authenticateUserService.execute({
      email: user.email,
      password: user.password
    })

    expect(token).toBeTruthy()
  })

  it('Should not be able to authenticate an nonexistent user', async () => {
    expect(async () => {
      await authenticateUserService.execute({ email: '', password: '' })
    }).rejects.toBeInstanceOf(AppError)
  })

  it('Should not be able to authenticate with incorrect password', async () => {
    const user: ICreateUserDTO = {
      name: 'user.name-test',
      email: 'user.email-test',
      password: 'user.password-test',
      driver_license: 'user.driver_license-test'
    }

    await createUserService.execute(user)

    expect(async () => {
      await authenticateUserService.execute({
        email: user.email,
        password: ''
      })
    }).rejects.toBeInstanceOf(AppError)
  })
})
