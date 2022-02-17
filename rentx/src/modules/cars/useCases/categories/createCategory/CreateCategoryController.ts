import { Request, Response } from "express";
import { CreateCategoryService } from "./CreateCategoryService";

class CreateCategoryController {
  constructor(private createCategoryService: CreateCategoryService) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { description, name } = req.body;

    await this.createCategoryService.execute({ name, description });

    return res.status(201).send();
  }
}

export { CreateCategoryController };
