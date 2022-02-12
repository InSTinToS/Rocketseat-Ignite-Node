import { Request, Response } from "express";
import { CreateCategoryService } from "./CreateCategoryService";

class CreateCategoryController {
  constructor(private createCategoryService: CreateCategoryService) {}

  handle(req: Request, res: Response): Response {
    const { description, name } = req.body;

    this.createCategoryService.execute({ name, description });

    return res.status(201).send();
  }
}

export { CreateCategoryController };
