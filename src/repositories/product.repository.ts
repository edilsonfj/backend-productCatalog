import { Product } from "../entities/product.entity";
import { prisma } from "../database/prisma";

export class ProductRepository {
    async createProduct(productData: Product): Promise<Product> {
        return await prisma.product.create({ data: productData });
    }
    async getAllProducts(): Promise<Product[]> {
        return await prisma.product.findMany({ where: { deletedAt: null } });
    }
    async getProductById(id: string): Promise<Product | null> {
        return await prisma.product.findUnique({ where: { id: id } });
    }
    async getProductByName(name: string): Promise<Product | null> {
        return await prisma.product.findFirst({ where: { name: name } });
    }
    async updateProduct(id: string, productData: Product): Promise<Product> {
        return await prisma.product.update({
            where: { id: id },
            data: {
                name: productData.name,
                price: productData.price,
                updatedAt: new Date()
            }
        });
    }
    async deleteProduct(id: string): Promise<Product> {
        return await prisma.product.update({
            where: { id: id }, data: { deletedAt: new Date() }
        });
    }
}