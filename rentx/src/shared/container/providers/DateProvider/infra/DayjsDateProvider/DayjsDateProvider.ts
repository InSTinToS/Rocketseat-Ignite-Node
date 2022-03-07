import { IDateProvider } from '../../IDateProvider'

import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import 'reflect-metadata'

dayjs.extend(utc)

class DayjsDateProvider implements IDateProvider {
  convertToUTC(date: Date) {
    return dayjs(date).utc().local().format()
  }

  compareInHours(startDate: Date, endDate: Date): number {
    return dayjs(this.convertToUTC(endDate)).diff(
      this.convertToUTC(startDate),
      'hours'
    )
  }

  dateNow() {
    return dayjs().toDate()
  }
}

export { DayjsDateProvider }
