import { Request, Response } from 'express';
import { CreateBrandUseCase } from '../usecases/create_brand.usecase';
import { BrandRepository } from '../repositories/brand.repository';

export class CreateBrandController {
    private createBrandUseCase: CreateBrandUseCase;
    private brandRepository: BrandRepository;

    constructor() {
        this.brandRepository = new BrandRepository();
        this.createBrandUseCase = new CreateBrandUseCase(this.brandRepository);
    }

    async handle(request: Request, response: Response): Promise<Response> {
        const { name } = request.body;

        try {
            const brand = await this.createBrandUseCase.execute(name);
            return response.status(201).json(brand);
        } catch (error: any) {
            return response.status(400).json({
                message: error.message || 'Erro inesperado.'
            });
        }
    }
}