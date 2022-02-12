import { ICategoriesRepository } from "../../../repositories/categories/ICategoriesRepository";
import fs from "fs";
import { parse as csvParse } from "csv-parse";

interface IImportCategory {
  name: string;
  description: string;
}

class ImportCategoryService {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  private loadCategories(
    file: Express.Multer.File
  ): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      const categories: IImportCategory[] = [];

      const parseFile = csvParse({});
      const stream = fs.createReadStream(file.path);

      stream.pipe(parseFile);

      parseFile
        .on("data", async (line) => {
          const [name, description] = line;
          categories.push({ name, description });
        })
        .on("end", () => resolve(categories))
        .on("error", (error) => reject(error));
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file);

    categories.map((category) => {
      const { name, description } = category;

      const existCategory = this.categoriesRepository.findByName(name);

      if (!existCategory)
        this.categoriesRepository.create({ name, description });
    });
  }
}

export { ImportCategoryService };
