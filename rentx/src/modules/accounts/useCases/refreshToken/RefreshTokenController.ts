import { RefreshTokenService } from './RefreshTokenService'

import { Request, Response } from 'express'
import { container } from 'tsyringe'

class RefreshTokenController {
  async handle(req: Request, res: Response) {
    const token =
      req.body.tokne || req.header['x-access-token'] || req.query.token

    const refreshTokenService = container.resolve(RefreshTokenService)

    const refresh_token = refreshTokenService.execute(token)

    return res.status(200).json(refresh_token)
  }
}

export { RefreshTokenController }
