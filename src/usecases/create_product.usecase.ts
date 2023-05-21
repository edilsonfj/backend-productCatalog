import { Product } from "../entities/product.entity";
import { ProductRepository } from "../repositories/product.repository";
import { CategoryRepository } from "../repositories/category.repository";
import { PromotionRepository } from "../repositories/promotion.repository";

export class CreateProductUseCase {
    private productRepository: ProductRepository;
    private categoryRepository: CategoryRepository;
    private promotionRepository: PromotionRepository;

    constructor(productRepository: ProductRepository, categoryRepository: CategoryRepository, promotionRepository: PromotionRepository) {
        this.productRepository = productRepository;
        this.categoryRepository = categoryRepository;
        this.promotionRepository = promotionRepository;
    }

    async execute(category: string, name: string, description: string, price: number, discount: number, stock: number): Promise<Product> {

        const existingProduct = await this.productRepository.getProductByName(name);

        if (existingProduct) {
            throw new Error('Produto já existe');
        }

        const existingCategory = await this.categoryRepository.getCategoryByName(category);

        if (!existingCategory || undefined || null) {
            throw new Error('Categoria não existe');
        }

        const existingPromotion = await this.promotionRepository.getPromotionByDiscount(discount);

        if (!existingPromotion || undefined || null) {
            throw new Error('Promoção não existe');
        }

        const product = await this.productRepository.createProduct(category, name, description, price, discount, stock);
        return product;
    }
}