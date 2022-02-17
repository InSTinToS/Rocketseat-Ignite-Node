import { Router } from "express";
import { createSpecificationController } from "../modules/cars/useCases/specifications";

const specificationsRoutes = Router();

specificationsRoutes.post("/", (req, res) =>
  createSpecificationController.handle(req, res)
);

export { specificationsRoutes };
