import { CategoriesRepository } from '../../modules/cars/repositories/categories/CategoriesRepository'
import { ICategoriesRepository } from '../../modules/cars/repositories/categories/ICategoriesRepository'
import { ISpecificationsRepository } from '../../modules/cars/repositories/specifications/ISpecificationsRepository'
import { SpecificationsRepository } from '../../modules/cars/repositories/specifications/SpecificationsRepository'

import { container } from 'tsyringe'

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);

container.registerSingleton<ISpecificationsRepository>(
  "SpecificationsRepository",
  SpecificationsRepository
);
