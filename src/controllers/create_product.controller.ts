import { Request, Response } from 'express';
import { CreateProductUseCase } from '../usecases/create_product.usecase';
import { ProductRepository } from '../repositories/product.repository';
import { CategoryRepository } from '../repositories/category.repository';
import { PromotionRepository } from '../repositories/promotion.repository';

export class CreateProductController {
    private createProductUseCase: CreateProductUseCase;
    private productRepository: ProductRepository;
    private categoryRepository: CategoryRepository;
    private promotionRepository: PromotionRepository;

    constructor() {
        this.productRepository = new ProductRepository();
        this.createProductUseCase = new CreateProductUseCase(this.productRepository, this.categoryRepository, this.promotionRepository);
    }

    async handle(request: Request, response: Response): Promise<Response> {
        const { category, name, description, price, discount, stock } = request.body;

        try {
            const result = await this.createProductUseCase.execute(category, name, description, price, discount, stock);
            return response.status(201).json(result);
        } catch (error: any) {
            return response.status(400).json({
                message: error.message || 'Erro inesperado.'
            });
        }
    }
}