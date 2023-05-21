
import { CategoryRepository } from "../repositories/category.repository";
import { PromotionRepository } from "../repositories/promotion.repository";

export class ConfirmProductInfoService {
    private categoryRepository: CategoryRepository;
    private promotionRepository: PromotionRepository;

    constructor(categoryRepository: CategoryRepository, promotionRepository: PromotionRepository) {
        this.categoryRepository = categoryRepository;
        this.promotionRepository = promotionRepository;
    }

    async execute(categoryName: string, promotionDiscount: number): Promise<void> {
        const existingCategory = await this.categoryRepository.getCategoryByName(categoryName);

        if (!existingCategory) {
            throw new Error('Categoria não existe');
        }

        const existingPromotion = await this.promotionRepository.getPromotionByDiscount(promotionDiscount);

        if (!existingPromotion) {
            throw new Error('Promoção não existe');
        }
    }
}