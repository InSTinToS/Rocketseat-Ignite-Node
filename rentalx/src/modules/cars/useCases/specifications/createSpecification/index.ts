import { SpecificationsRepository } from "../../../repositories/specifications/SpecificationsRepository";
import { CreateSpecificationController } from "./createSpecificationController";
import { CreateSpecificationService } from "./createSpecificationService";

const specificationsRepository = SpecificationsRepository.getInstance();

const createSpecificationService = new CreateSpecificationService(
  specificationsRepository
);

const createSpecificationController = new CreateSpecificationController(
  createSpecificationService
);

export { createSpecificationController };
