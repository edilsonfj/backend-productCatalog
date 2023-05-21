import { Model } from "../entities/model.entity";
import { ModelRepository } from "../repositories/model.repository";
import { BrandRepository } from "../repositories/brand.repository";

export class CreateModelUseCase {
    private modelRepository: ModelRepository;
    private brandRepository: BrandRepository;

    constructor() {
        this.modelRepository = new ModelRepository();
        this.brandRepository = new BrandRepository();
    }

    async execute(name: string, brand: string): Promise<Model> {

        if (!name) {
            throw new Error('Nome não informado.');
        }

        if (!brand) {
            throw new Error('Marca não informada.');
        }

        const modelExists = await this.modelRepository.getModelByName(name);

        if (modelExists) {
            throw new Error('Modelo já existe');
        }

        const brandExists = await this.brandRepository.getBrandByName(brand);

        if (!brandExists) {
            throw new Error('Marca não existe');
        }

        const model = await this.modelRepository.createModel(name, brand);
        return model;

    }
}