import { AppError } from '@shared/errors/AppError'

import { UsersRepository } from '@modules/accounts/infra/typeorm/repositories/users/UsersRepository'

import { NextFunction, Request, Response } from 'express'
import 'express-async-errors'
import { verify } from 'jsonwebtoken'

async function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization

  if (!authHeader) throw new AppError('Missing Token', 401)

  const token = authHeader.split(' ')[1]

  const { sub: subjectId } = verify(token, 'secret')

  const usersRepository = new UsersRepository()
  const user = await usersRepository.findById(subjectId as string)

  if (!user) throw new AppError('User does not exists', 401)

  req.user = { id: user.id }

  next()
}

export { ensureAuthenticated }
