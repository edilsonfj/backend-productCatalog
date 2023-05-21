import { Promotion } from "../entities/promotion.entity";
import { PromotionRepository } from "../repositories/promotion.repository";

export class ConsultPromotionUseCase {
    private promotionRepository: PromotionRepository;

    constructor(promotionRepository: PromotionRepository) {
        this.promotionRepository = promotionRepository;
    }


    async consultAll(): Promise<Promotion[]> {
        const promotions = await this.promotionRepository.getAllPromotions();

        if (!promotions) {
            throw new Error('Nenhum promoção cadastrada');
        }

        return promotions;
    }

    async consultDiscount(discount: number): Promise<Promotion | null> {
        const promotion = await this.promotionRepository.getPromotionByDiscount(discount);

        if (!promotion) {
            throw new Error('Promoção não existe');
        }

        return promotion;
    }

}