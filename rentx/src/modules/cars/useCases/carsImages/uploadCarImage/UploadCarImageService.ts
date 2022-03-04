import { CarsImagesRepository } from '@modules/cars/infra/typeorm/repositories/carsImages/CarsImagesRepository'

import { inject, injectable } from 'tsyringe'

interface IRequest {
  car_id: string
  images_name: string[]
}

@injectable()
class UploadCarImageService {
  constructor(
    @inject('CarsImagesRepository')
    private carsImagesRepository: CarsImagesRepository
  ) {}

  async execute({ car_id, images_name }: IRequest) {
    images_name.map(async image => {
      await this.carsImagesRepository.create({ car_id, image_name: image })
    })
  }
}

export { UploadCarImageService }