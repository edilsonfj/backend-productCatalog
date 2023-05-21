import { Brand } from "../entities/brand.entity";
import { prisma } from "../database/prisma";
import { v4 as uuidv4 } from "uuid";

export class BrandRepository {
    async createBrand(name: string): Promise<Brand> {
        return await prisma.brand.create({
            data: {
                id: uuidv4(),
                name: name,
                createdAt: new Date(),
                updatedAt: null,
                deletedAt: null
            }
        });
    }
    async getAllBrands(): Promise<Brand[]> {
        return await prisma.brand.findMany({ where: { deletedAt: null } });
    }
    async getBrandById(id: string): Promise<Brand | null> {
        return await prisma.brand.findUnique({ where: { id: id } });
    }
    async getBrandByName(name: string): Promise<Brand | null> {
        return await prisma.brand.findFirst({ where: { name: name } });
    }
    async updateBrand(id: string, brandData: Brand): Promise<Brand> {
        return await prisma.brand.update({
            where: { id: id },
            data: {
                name: brandData.name,
                updatedAt: new Date()
            }
        });
    }
    async deleteBrand(id: string): Promise<Brand> {
        return await prisma.brand.update({
            where: { id: id }, data: { deletedAt: new Date() }
        });
    }
}
