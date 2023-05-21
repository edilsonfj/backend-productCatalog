import { Request, Response } from 'express';
import { CreateModelUseCase } from '../usecases/create_model.usecase';

export class CreateModelController {
    private createModelUseCase: CreateModelUseCase;

    constructor() {
        this.createModelUseCase = new CreateModelUseCase();
    }

    async handle(request: Request, response: Response): Promise<Response> {
        const { name, brand } = request.body;

        try {
            const model = await this.createModelUseCase.execute(name, brand);
            return response.status(201).json(model);
        } catch (error: any) {
            return response.status(400).json({
                message: error.message || 'Erro inesperado.'
            });
        }
    }
}