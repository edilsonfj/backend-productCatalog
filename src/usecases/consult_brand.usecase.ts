import { Brand } from "../entities/brand.entity";
import { BrandRepository } from "../repositories/brand.repository";

export class ConsultBrandUseCase {
    private brandRepository: BrandRepository;

    constructor(brandRepository: BrandRepository) {
        this.brandRepository = brandRepository;
    }

    async consultAll(): Promise<Brand[]> {
        const brands = await this.brandRepository.getAllBrands();

        if (!brands) {
            throw new Error('Nenhuma marca cadastrada');
        }
        return brands;
    }

    async consultName(name: string): Promise<Brand | null> {
        if (!name) {
            throw new Error('Nome não informado');
        }

        const brand = await this.brandRepository.getBrandByName(name);

        if (!brand) {
            throw new Error('Marca não existe');
        }

        return brand;
    }
}