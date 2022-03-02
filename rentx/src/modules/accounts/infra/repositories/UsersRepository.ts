import { User } from '../typeorm/models/User'
import { ICreateUserDTO, IUsersRepository } from './IUsersRepository'

import { getRepository, Repository } from 'typeorm'

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  findById: (id: string) => Promise<User> = async (id) => {
    return await this.repository.findOne({ id });
  };

  async findByEmail(email: User["email"]) {
    return await this.repository.findOne({ email });
  }

  async read(): Promise<User[]> {
    return this.repository.find();
  }

  async create(data: ICreateUserDTO) {
    const newUser = this.repository.create(data);
    await this.repository.save(newUser);
  }
}

export { UsersRepository };
