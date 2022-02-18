import { Request, Response } from "express";
import { container } from "tsyringe";
import { ReadCategoriesService } from "./ReadCategoriesService";

class ReadCategoriesController {
  async handle(req: Request, res: Response): Promise<Response> {
    const readCategoriesService = container.resolve(ReadCategoriesService);
    const allCategories = await readCategoriesService.execute();

    return res.json(allCategories);
  }
}

export { ReadCategoriesController };
