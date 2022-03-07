import { AppError } from '@shared/errors/AppError'

import { UserTokensRepository } from '@modules/accounts/infra/typeorm/repositories/userTokens/UserTokensRepository'

import auth from '@config/auth'

import { NextFunction, Request, Response } from 'express'
import 'express-async-errors'
import { verify } from 'jsonwebtoken'

async function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization
  const userTokensRepository = new UserTokensRepository()

  if (!authHeader) throw new AppError('Missing Token', 401)

  const token = authHeader.split(' ')[1]

  const { sub: subjectId } = verify(token, auth.refresh_token.secret)

  const user = await userTokensRepository.findByUserIdAndRefreshToken(
    subjectId as string,
    token
  )

  if (!user) throw new AppError('User does not exists', 401)

  req.user = { id: user.id }

  next()
}

export { ensureAuthenticated }
