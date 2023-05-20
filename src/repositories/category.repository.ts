import { Category } from '../entities/category.entity';
import { prisma } from '../database/prisma';

export class CategoryRepository {
    async createCategory(categoryData: Category): Promise<Category> {
        return await prisma.category.create({ data: categoryData });
    }
    async getAllCategories(): Promise<Category[]> {
        return await prisma.category.findMany({ where: { deletedAt: null } });
    }
    async getCategoryById(id: string): Promise<Category | null> {
        return await prisma.category.findUnique({ where: { id: id } });
    }
    async getCategoryByName(name: string): Promise<Category | null> {
        return await prisma.category.findFirst({ where: { name: name } });
    }
    async updateCategory(id: string, categoryData: Category): Promise<Category> {
        return await prisma.category.update({
            where: { id: id },
            data: {
                name: categoryData.name,
                updatedAt: new Date()
            }
        });
    }
    async deleteCategory(id: string): Promise<Category> {
        return await prisma.category.update({
            where: { id: id }, data: { deletedAt: new Date() }
        });
    }
}