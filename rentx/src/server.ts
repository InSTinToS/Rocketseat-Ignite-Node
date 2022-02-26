import './database'
import './shared/container'
import { routes } from './routes'
import swaggerFile from './docs/swagger.json'
import { AppError } from './errors/AppError'

import express, { Request, Response } from 'express'
import 'express-async-errors'
import swagger from 'swagger-ui-express'

const app = express();

app.use(express.json());

app.use("/api-docs", swagger.serve, swagger.setup(swaggerFile));

app.use(routes);

app.use((error: Error, req: Request, res: Response) => {
  if (error instanceof AppError)
    return res.status(error.statusCode).json({ message: error.message });

  return res.status(500).json({
    message: "Internal server error - " + error,
  });
});

app.listen(3333, () => console.log("Server running!"));
