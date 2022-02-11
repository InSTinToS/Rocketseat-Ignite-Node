import { Router } from "express";
import CategoriesRepository from "../repositories/CategoriesRepository";

const categoriesRoutes = Router();

const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (req, res) => {
  const { description, name } = req.body;

  const categoryAlreadyExists = categoriesRepository.findByName(name);

  if (categoryAlreadyExists)
    return res.status(400).json({ error: "Category already exists" });

  categoriesRepository.create({ description, name });

  return res.status(201).send();
});

categoriesRoutes.get("/", (_req, res) => {
  const allCategories = categoriesRepository.read();
  return res.json(allCategories);
});

export { categoriesRoutes };
