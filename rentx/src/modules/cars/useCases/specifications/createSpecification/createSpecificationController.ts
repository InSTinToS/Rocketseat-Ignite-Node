import { CreateSpecificationService } from "./createSpecificationService";
import { Request, Response } from "express";
class CreateSpecificationController {
  constructor(private createSpecificationService: CreateSpecificationService) {}

  handle(req: Request, res: Response) {
    const { name, description } = req.body;

    this.createSpecificationService.execute({ name, description });

    return res.status(201).send();
  }
}

export { CreateSpecificationController };
