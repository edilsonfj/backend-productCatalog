import { Request, Response } from 'express';
import { ConsultBrandUseCase } from '../usecases/consult_brand.usecase';
import { BrandRepository } from '../repositories/brand.repository';

export class ConsultBrandController {
    private consultBrandUseCase: ConsultBrandUseCase;
    private brandRepository: BrandRepository;

    constructor() {
        this.brandRepository = new BrandRepository();
        this.consultBrandUseCase = new ConsultBrandUseCase(this.brandRepository);
    }

    async handle(request: Request, response: Response): Promise<Response> {
        const { name } = request.body;

        try {
            const brand = await this.consultBrandUseCase.consultName(name);
            return response.status(200).json(brand);
        } catch (error: any) {
            return response.status(400).json({
                message: error.message || 'Erro inesperado.'
            });
        }
    }
}