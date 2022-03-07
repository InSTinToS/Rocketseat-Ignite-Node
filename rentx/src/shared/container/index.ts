import './providers'

import { CategoriesRepository } from '@modules/cars/infra/typeorm/repositories/categories/CategoriesRepository'
import { ICategoriesRepository } from '@modules/cars/infra/typeorm/repositories/categories/ICategoriesRepository'
import { ISpecificationsRepository } from '@modules/cars/infra/typeorm/repositories/specifications/ISpecificationsRepository'
import { SpecificationsRepository } from '@modules/cars/infra/typeorm/repositories/specifications/SpecificationsRepository'
import { IUsersRepository } from '@modules/accounts/infra/typeorm/repositories/users/IUsersRepository'
import { UsersRepository } from '@modules/accounts/infra/typeorm/repositories/users/UsersRepository'
import { ICarsRepository } from '@modules/cars/infra/typeorm/repositories/cars/ICarsRepository'
import { CarsRepository } from '@modules/cars/infra/typeorm/repositories/cars/CarsRepository'
import { ICarsImagesRepository } from '@modules/cars/infra/typeorm/repositories/carsImages/ICarsImagesRepository'
import { CarsImagesRepository } from '@modules/cars/infra/typeorm/repositories/carsImages/CarsImagesRepository'
import { IRentalRepository } from '@modules/rentals/infra/typeorm/repositories/IRentalRepository'
import { RentalRepository } from '@modules/rentals/infra/typeorm/repositories/RentalRepository'
import { IUserTokensRepository } from '@modules/accounts/infra/typeorm/repositories/userTokens/IUserTokensRepository'
import { UserTokensRepository } from '@modules/accounts/infra/typeorm/repositories/userTokens/UserTokensRepository'

import { container } from 'tsyringe'

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository
)

container.registerSingleton<ISpecificationsRepository>(
  'SpecificationsRepository',
  SpecificationsRepository
)

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
)

container.registerSingleton<ICarsRepository>('CarsRepository', CarsRepository)

container.registerSingleton<ICarsImagesRepository>(
  'CarsImagesRepository',
  CarsImagesRepository
)

container.registerSingleton<IRentalRepository>(
  'RentalRepository',
  RentalRepository
)

container.registerSingleton<IUserTokensRepository>(
  'UserTokensRepository',
  UserTokensRepository
)
