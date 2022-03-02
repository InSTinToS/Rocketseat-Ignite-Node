import { CategoriesRepository } from '../../modules/cars/infra/repositories/categories/CategoriesRepository'
import { ICategoriesRepository } from '../../modules/cars/infra/repositories/categories/ICategoriesRepository'
import { ISpecificationsRepository } from '../../modules/cars/infra/repositories/specifications/ISpecificationsRepository'
import { SpecificationsRepository } from '../../modules/cars/infra/repositories/specifications/SpecificationsRepository'
import { IUsersRepository } from '../../modules/accounts/infra/repositories/IUsersRepository'
import { UsersRepository } from '../../modules/accounts/infra/repositories/UsersRepository'

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
