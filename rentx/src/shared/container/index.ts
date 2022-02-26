import { CategoriesRepository } from '../../modules/cars/repositories/categories/CategoriesRepository'
import { ICategoriesRepository } from '../../modules/cars/repositories/categories/ICategoriesRepository'
import { ISpecificationsRepository } from '../../modules/cars/repositories/specifications/ISpecificationsRepository'
import { SpecificationsRepository } from '../../modules/cars/repositories/specifications/SpecificationsRepository'
import { IUsersRepository } from '../../modules/accounts/repositories/IUsersRepository'
import { UsersRepository } from '../../modules/accounts/repositories/UsersRepository'

import { container } from 'tsyringe'

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);

container.registerSingleton<ISpecificationsRepository>(
  "SpecificationsRepository",
  SpecificationsRepository
);

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);
