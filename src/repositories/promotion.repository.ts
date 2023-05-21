import { Promotion } from '../entities/promotion.entity';
import { prisma } from '../database/prisma';
import { v4 as uuid } from 'uuid';

export class PromotionRepository {
    async createPromotion(name: number): Promise<Promotion> {
        return await prisma.promotion.create({
            data: {
                id: uuid(),
                name: name,
                createdAt: new Date(),
                deletedAt: null
            }
        });
    }
    async getAllPromotions(): Promise<Promotion[]> {
        return await prisma.promotion.findMany({ where: { deletedAt: null } });
    }
    async getPromotionById(id: string): Promise<Promotion | null> {
        return await prisma.promotion.findUnique({ where: { id: id } });
    }
    async getPromotionByName(name: number): Promise<Promotion | null> {
        return await prisma.promotion.findUnique({ where: { name: name } });
    }
    async deletePromotion(id: string): Promise<Promotion> {
        return await prisma.promotion.update({
            where: { id: id }, data: {
                deletedAt: new Date()
            }
        });
    }
}