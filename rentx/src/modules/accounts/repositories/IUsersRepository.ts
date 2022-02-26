import { User } from '../models/User'

interface ICreateUserDTO {
  name: User["name"];
  email: User["email"];
  password: User["password"];
  driver_license: User["driver_license"];
}

interface IUsersRepository {
  read(): Promise<User[]>;
  create(data: ICreateUserDTO): Promise<void>;
  findById: (id: User["id"]) => Promise<User>;
  findByEmail: (email: User["email"]) => Promise<User>;
}

export { IUsersRepository, ICreateUserDTO };
