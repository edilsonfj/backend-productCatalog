import { PromotionRepository } from "../repositories/promotion.repository";
import { Promotion } from "../entities/promotion.entity";

export class CreatePromotionUseCase {
    private promotionRepository: PromotionRepository;

    constructor(promotionRepository: PromotionRepository) {
        this.promotionRepository = promotionRepository;
    }

    async execute(name: number): Promise<Promotion> {
        if (name !== Number(name) || name < 0 || name > 100) {
            throw new Error('Promoção deve ser um número entre 0 e 100');
        }

        const existingPromotion = await this.promotionRepository.getPromotionByName(name);

        if (existingPromotion) {
            throw new Error('Promoção já existe');
        }

        const promotion = await this.promotionRepository.createPromotion(name);
        return promotion;
    }
}