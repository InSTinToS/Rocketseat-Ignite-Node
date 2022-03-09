import { AppError } from '@shared/errors/AppError'

import { UserTokensRepository } from '@modules/accounts/infra/typeorm/repositories/userTokens/UserTokensRepository'

import auth from '@config/auth'

import { NextFunction, Request, Response } from 'express'
import 'express-async-errors'
import { verify } from 'jsonwebtoken'

interface IPayload {
  sub: string
}

async function ensureAuthenticated(
  req: Request,
  _res: Response,
  next: NextFunction
) {
  const refresh_token = req.headers.authorization.split(' ')[1]

  if (!refresh_token) throw new AppError('Missing refresh token', 400)

  let user_id: string

  try {
    const { sub: payloadUserId } = verify(
      refresh_token,
      auth.refresh_token.secret
    ) as IPayload

    user_id = payloadUserId
  } catch (error) {
    throw new AppError('Invalid refresh_token', 401)
  }

  const userTokensRepository = new UserTokensRepository()

  const foundUser = await userTokensRepository.findByUserIdAndRefreshToken({
    user_id,
    refresh_token
  })

  if (!foundUser)
    throw new AppError('Not found user with this refresh_token assigned', 404)

  req.user = { id: foundUser.user_id }

  next()
}

export { ensureAuthenticated }
