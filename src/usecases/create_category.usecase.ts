import { Category } from "../entities/category.entity";
import { CategoryRepository } from "../repositories/category.repository";


export class CreateCategoryUseCase {
    private categoryRepository: CategoryRepository;

    constructor(categoryRepository: CategoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    async execute(name: string): Promise<Category> {
        if (name !== String(name) || name.length < 4 || name.length > 20) {
            throw new Error('Nome deve ser uma string entre 4 e 20 caracteres');
        }

        const existingCategory = await this.categoryRepository.getCategoryByName(name);

        if (existingCategory) {
            throw new Error('Categoria já existe');
        }

        const category = await this.categoryRepository.createCategory(name);
        return category;
    }
}