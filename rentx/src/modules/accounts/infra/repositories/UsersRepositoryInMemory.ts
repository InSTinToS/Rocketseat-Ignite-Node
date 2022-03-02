import { User } from '../typeorm/models/User'
import { ICreateUserDTO, IUsersRepository } from './IUsersRepository'

class UsersRepositoryInMemory implements IUsersRepository {
  private users: User[] = [];

  async read(): Promise<User[]> {
    return this.users;
  }

  async create(data: ICreateUserDTO): Promise<void> {
    const user = new User();

    this.users.push(Object.assign(user, data));
  }

  async findById(id: string): Promise<User> {
    return this.users.find((user) => user.id === id);
  }

  async findByEmail(email: string): Promise<User> {
    return this.users.find((user) => user.email === email);
  }
}

export { UsersRepositoryInMemory };
