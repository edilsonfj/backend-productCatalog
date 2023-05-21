import { Request, Response } from "express";
import { CreateCategoryUseCase } from "../usecases/create_category.usecase";
import { CategoryRepository } from "../repositories/category.repository";

export class CreateCategoryController {
    private createCategoryUseCase: CreateCategoryUseCase;
    private categoryRepository: CategoryRepository;

    constructor() {
        this.categoryRepository = new CategoryRepository();
        this.createCategoryUseCase = new CreateCategoryUseCase(this.categoryRepository);
    }

    async handle(request: Request, response: Response): Promise<Response> {
        const { name } = request.body;

        try {
            const result = await this.createCategoryUseCase.execute(name);
            return response.status(201).json(result);
        } catch (error: any) {
            return response.status(400).json({
                message: error.message || 'Erro inesperado.'
            });
        }
    }
}