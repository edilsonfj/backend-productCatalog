import { Request, Response } from 'express';
import { CreatePromotionUseCase } from '../usecases/create_promotion.usecase';
import { PromotionRepository } from '../repositories/promotion.repository';

export class CreatePromotionController {
    private createPromotionUseCase: CreatePromotionUseCase;
    private promotionRepository: PromotionRepository;

    constructor() {
        this.promotionRepository = new PromotionRepository();
        this.createPromotionUseCase = new CreatePromotionUseCase(this.promotionRepository);
    }

    async handle(request: Request, response: Response): Promise<Response> {
        const { name } = request.body;

        try {
            const result = await this.createPromotionUseCase.execute(name);
            return response.status(201).json(result);
        } catch (error: any) {
            return response.status(400).json({
                message: error.message || 'Erro inesperado.'
            });
        }
    }
}