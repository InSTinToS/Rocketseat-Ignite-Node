import { ReadCarsService } from './ReadCarsService'

import { Request, Response } from 'express'
import { container } from 'tsyringe'

class ReadCarsController {
  async handle(req: Request, res: Response) {
    const readCarsService = container.resolve(ReadCarsService)

    const cars = await readCarsService.execute()

    return res.status(200).json(cars)
  }
}

export { ReadCarsController }
