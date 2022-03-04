import { CreateRentalService } from './CreateRentalService'

import { AppError } from '@shared/errors/AppError'
import { DayjsDateProvider } from '@shared/container/providers/DateProvider/infra/DayjsDateProvider/DayjsDateProvider'

import { RentalRepositoryInMemory } from '@modules/rentals/infra/typeorm/repositories/RentalRepositoryInMemory'

import dayjs from 'dayjs'

let createRentalService: CreateRentalService
let rentalsRepositoryInMemory: RentalRepositoryInMemory
let dayjsDateProvider: DayjsDateProvider

describe('Create rental', () => {
  const actualDatePlus24h = dayjs().add(1, 'day').toDate()

  beforeEach(() => {
    rentalsRepositoryInMemory = new RentalRepositoryInMemory()
    dayjsDateProvider = new DayjsDateProvider()
    createRentalService = new CreateRentalService(
      rentalsRepositoryInMemory,
      dayjsDateProvider
    )
  })

  it('should be able to create a rental', async () => {
    const rental = await createRentalService.execute({
      user_id: '1',
      car_id: '1',
      expected_date: actualDatePlus24h
    })

    expect(rental).toHaveProperty('id')
    expect(rental).toHaveProperty('start_date')
  })

  it('should not be able to create a rental if there is another open to the same user', async () => {
    const rental = await createRentalService.execute({
      user_id: '2',
      car_id: '2',
      expected_date: actualDatePlus24h
    })

    expect(async () => {
      await createRentalService.execute({
        user_id: '2',
        car_id: '2.1',
        expected_date: actualDatePlus24h
      })
    }).rejects.toBeInstanceOf(AppError)

    expect(rental).toHaveProperty('id')
    expect(rental).toHaveProperty('start_date')
  })

  it('should not be able to create a rental if there is another open to the same car', async () => {
    const rental = await createRentalService.execute({
      user_id: '3',
      car_id: '3',
      expected_date: actualDatePlus24h
    })

    expect(async () => {
      await createRentalService.execute({
        user_id: '3.1',
        car_id: '3',
        expected_date: new Date()
      })
    }).rejects.toBeInstanceOf(AppError)

    expect(rental).toHaveProperty('id')
    expect(rental).toHaveProperty('start_date')
  })

  it("should not be able to create a rental if min time is'nt satisfied'", async () => {
    expect(async () => {
      await createRentalService.execute({
        user_id: '3.1',
        car_id: '3',
        expected_date: dayjs().toDate()
      })
    }).rejects.toBeInstanceOf(AppError)
  })
})
