import { Promotion } from '../entities/promotion.entity';
import { prisma } from '../database/prisma';

export class PromotionRepository {
    async createPromotion(promotionData: Promotion): Promise<Promotion> {
        return await prisma.promotion.create({ data: promotionData });
    }
    async getAllPromotions(): Promise<Promotion[]> {
        return await prisma.promotion.findMany({ where: { deletedAt: null } });
    }
    async getPromotionById(id: string): Promise<Promotion | null> {
        return await prisma.promotion.findUnique({ where: { id: id } });
    }
    async updatePromotion(id: string, promotionData: Promotion): Promise<Promotion> {
        return await prisma.promotion.update({
            where: { id: id },
            data: {
                discount: promotionData.discount,
                updatedAt: new Date()
            }
        });
    }
    async deletePromotion(id: string): Promise<Promotion> {
        return await prisma.promotion.update({
            where: { id: id }, data: {
                deletedAt: new Date()
            }
        });
    }
}