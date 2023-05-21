import { Category } from "../entities/category.entity";
import { CategoryRepository } from "../repositories/category.repository";

export class ConsultCategoryUseCase {
    private categoryRepository: CategoryRepository;

    constructor(categoryRepository: CategoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    async consultAll(): Promise<Category[]> {
        const categories = await this.categoryRepository.getAllCategories();

        if (!categories) {
            throw new Error('Nenhuma categoria cadastrada');
        }
        return categories;
    }

    async consultName(name: string): Promise<Category | null> {
        const category = await this.categoryRepository.getCategoryByName(name);

        if (!category) {
            throw new Error('Categoria não existe');
        }

        return category;
    }
}