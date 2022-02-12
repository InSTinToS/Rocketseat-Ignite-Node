import { Request, Response } from "express";
import { ReadCategoriesService } from "./ReadCategoriesService";

class ReadCategoriesController {
  constructor(private readCategoriesService: ReadCategoriesService) {}

  handle(req: Request, res: Response): Response {
    const allCategories = this.readCategoriesService.execute();

    return res.json(allCategories);
  }
}

export { ReadCategoriesController };
