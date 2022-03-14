import { User } from '@modules/accounts/models/User'

import { instanceToInstance } from 'class-transformer'

interface IUserReponseDTO {
  email: string
  name: string
  id: string
  avatar: string
  driver_license: string
}

class UserMap {
  static toDTO({
    email,
    name,
    id,
    avatar,
    driver_license
  }: User): IUserReponseDTO {
    const user = instanceToInstance({
      email,
      name,
      id,
      avatar,
      driver_license,
      avatar_url: avatar
    })

    return user
  }
}

export { UserMap }
