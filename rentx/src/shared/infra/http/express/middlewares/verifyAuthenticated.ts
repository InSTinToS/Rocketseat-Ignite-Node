import { UsersRepository } from '@modules/accounts/infra/typeorm/repositories/UsersRepository'

import { NextFunction, Request, Response } from 'express'
import 'express-async-errors'
import { verify } from 'jsonwebtoken'

async function verifyAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers?.authorization
  const token = authHeader.split(' ')[1]

  if (token) {
    const { sub: subjectId } = verify(token, 'secret', {})

    const usersRepository = new UsersRepository()
    const user = await usersRepository.findById(subjectId as string)

    if (!user) return next()

    req.user = { id: user.id }
  }

  return next()
}

export { verifyAuthenticated }
