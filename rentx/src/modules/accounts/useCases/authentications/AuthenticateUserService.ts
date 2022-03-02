import { User } from '../../infra/typeorm/models/User'
import { IUsersRepository } from '../../infra/repositories/IUsersRepository'

import { AppError } from '@shared/errors/AppError'
import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import { inject, injectable } from 'tsyringe'

interface IRequest {
  email: User["email"];
  password: User["password"];
}

interface IResponse {
  token: string;
  user: {
    name: User["name"];
    email: User["email"];
  };
}

@injectable()
class AuthenticateUserService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) throw new AppError("E-mail or password incorrect", 401);

    const passwordIsValid = await compare(password, user.password);

    if (!passwordIsValid)
      throw new AppError("E-mail or password incorrect", 401);

    const token = sign({}, "secret", { subject: user.id, expiresIn: "1d" });

    return {
      token,
      user: { name: user.name, email: user.email },
    };
  }
}
export { AuthenticateUserService };
