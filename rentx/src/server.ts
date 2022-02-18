import './database'
import './shared/container'
import { routes } from './routes'
import swaggerFile from './docs/swagger.json'

import express from 'express'
import swagger from 'swagger-ui-express'

const app = express();

app.use(express.json());

app.use("/api-docs", swagger.serve, swagger.setup(swaggerFile));

app.use(routes);

app.listen(3333, () => console.log("Server running!"));
