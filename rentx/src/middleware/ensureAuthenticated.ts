import { UsersRepository } from '../modules/accounts/repositories/UsersRepository'
import { AppError } from '../errors/AppError'

import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'

async function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  if (!authHeader) throw new AppError("Missing Token", 401);

  const token = authHeader.split(" ")[1];

  try {
    const { sub: subjectId } = verify(token, "secret");

    const usersRepository = new UsersRepository();
    const user = usersRepository.findById(subjectId as string);

    if (!user) throw new AppError("User does not exists", 401);

    next();
  } catch (error) {
    throw new AppError("Invalid token", 401);
  }
}

export { ensureAuthenticated };
