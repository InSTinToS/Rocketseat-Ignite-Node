import { Router } from "express";
import CategoriesRepository from "../repositories/CategoriesRepository";
import CreateCategoryService from "../services/CreateCategoryService";

const categoriesRepository = new CategoriesRepository();

const categoriesRoutes = Router();

categoriesRoutes.post("/", (req, res) => {
  const { description, name } = req.body;
  const createCategoryService = new CreateCategoryService(categoriesRepository);

  createCategoryService.execute({ name, description });

  return res.status(201).send();
});

categoriesRoutes.get("/", (_req, res) => {
  const allCategories = categoriesRepository.read();
  return res.json(allCategories);
});

export { categoriesRoutes };
