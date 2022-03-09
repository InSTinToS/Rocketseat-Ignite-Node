import {
  AddDays,
  Compare,
  ConvertToUTC,
  DateNow,
  IDateProvider
} from '../../IDateProvider'

import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import 'reflect-metadata'

dayjs.extend(utc)

class DayjsDateProvider implements IDateProvider {
  dateNow: DateNow = () => dayjs().toDate()

  addDays: AddDays = (days, unit) => dayjs().add(days, unit).toDate()

  convertToUTC: ConvertToUTC = date => dayjs(date).utc().local().format()

  compare: Compare = (startDate, endDate, unit) =>
    dayjs(this.convertToUTC(endDate)).diff(this.convertToUTC(startDate), unit)
}

export { DayjsDateProvider }
