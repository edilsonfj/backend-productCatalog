import { Brand } from "../entities/brand.entity";
import { BrandRepository } from "../repositories/brand.repository";

export class CreateBrandUseCase {
    constructor(private brandRepository: BrandRepository) { }

    async execute(name: string): Promise<Brand> {
        if (name !== String(name) || name.length < 4 || name.length > 20) {
            throw new Error('Nome deve ter entre 4 e 20 caracteres');
        }

        const brandExists = await this.brandRepository.getBrandByName(name);

        if (brandExists) {
            throw new Error("A marca já existe");
        }

        const brand = await this.brandRepository.createBrand(name);
        return brand;
    }
}