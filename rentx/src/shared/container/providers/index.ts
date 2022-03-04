import { IDateProvider } from './DateProvider/IDateProvider'
import { DayjsDateProvider } from './DateProvider/infra/DayjsDateProvider/DayjsDateProvider'

import { container } from 'tsyringe'

container.registerSingleton<IDateProvider>(
  'DayjsDateProvider',
  DayjsDateProvider
)
