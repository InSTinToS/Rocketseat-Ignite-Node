import { User } from '../models/User'

interface ICreateUserDTO {
  id?: User["id"];
  name: User["name"];
  email: User["email"];
  avatar?: User["avatar"];
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
