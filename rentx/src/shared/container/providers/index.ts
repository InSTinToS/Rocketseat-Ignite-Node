import { IDateProvider } from './DateProvider/IDateProvider'
import { DayjsDateProvider } from './DateProvider/infra/DayjsDateProvider/DayjsDateProvider'
import { IMailProvider } from './MailProvider/IMailProvider'
import { EtherealMailProvider } from './MailProvider/infra/EtherealMailProvider'

import { container } from 'tsyringe'

container.registerSingleton<IDateProvider>(
  'DayjsDateProvider',
  DayjsDateProvider
)

container.registerSingleton<IMailProvider>(
  'EtherealMailProvider',
  EtherealMailProvider
)
