import { User } from '../../infra/typeorm/models/User'
import { IUsersRepository } from '../../infra/typeorm/repositories/users/IUsersRepository'

import { deleteFile } from '@shared/utils/file'

import { inject, injectable } from 'tsyringe'

interface IRequest {
  userId: User['id']
  avatar: User['avatar']
}

@injectable()
class UpdateUserAvatarService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute({ avatar, userId }: IRequest): Promise<void> {
    const user = await this.usersRepository.findById(userId)
    user?.avatar && (await deleteFile(user.avatar))

    user.avatar = avatar

    await this.usersRepository.create(user)
  }
}

export { UpdateUserAvatarService }
