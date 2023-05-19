export class Product {
    id: string;
    category: string;
    name: string;
    description: string;
    barcode: string;
    price: number;
    promotion: number;
    stock: number;
    image: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;

    constructor(
        id: string,
        category: string,
        name: string,
        description: string,
        barcode: string,
        price: number,
        promotion: number,
        stock: number,
        image: string,
        createdAt: Date,
        updatedAt: Date,
        DeletedAt: Date
    ) {
        this.id = id;
        this.category = category;
        this.name = name;
        this.description = description;
        this.barcode = barcode;
        this.price = price;
        this.promotion = promotion;
        this.stock = stock;
        this.image = image;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = DeletedAt;
    }
}