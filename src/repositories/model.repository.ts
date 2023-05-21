import { Model } from "../entities/model.entity";
import { prisma } from "../database/prisma";
import { v4 as uuidv4 } from "uuid";

export class ModelRepository {
    async createModel(name: string, brand: string): Promise<Model> {
        return await prisma.model.create({
            data: {
                id: uuidv4(),
                name: name,
                brand: brand,
                createdAt: new Date(),
                updatedAt: null,
                deletedAt: null
            }
        });
    }
    async getAllModels(): Promise<Model[]> {
        return await prisma.model.findMany({ where: { deletedAt: null } });
    }
    async getModelById(id: string): Promise<Model | null> {
        return await prisma.model.findUnique({ where: { id: id } });
    }
    async getModelByName(name: string): Promise<Model | null> {
        return await prisma.model.findUnique({ where: { name: name } });
    }
    async updateModel(id: string, modelData: Model): Promise<Model> {
        return await prisma.model.update({
            where: { id: id },
            data: {
                name: modelData.name,
                brand: modelData.brand,
                updatedAt: new Date()
            }
        });
    }
    async deleteModel(id: string): Promise<Model> {
        return await prisma.model.update({
            where: { id: id }, data: { deletedAt: new Date() }
        });
    }
}