import { UnitTypeShort } from 'dayjs'

type DateNow = () => Date
type ConvertToUTC = (date: Date) => string
type AddDays = (days: number, unit: UnitTypeShort) => Date
type Compare = (startDate: Date, endDate: Date, unit: UnitTypeShort) => number

interface IDateProvider {
  addDays: AddDays
  compare: Compare
  dateNow: DateNow
  convertToUTC: ConvertToUTC
}

export type { IDateProvider, AddDays, Compare, ConvertToUTC, DateNow }
