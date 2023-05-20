export class Product {
    id: string;
    category: string;
    name: string;
    description: string;
    barcode: string;
    price: number;
    discount: number;
    stock: number;
    image1: string | null;
    image2: string | null;
    image3: string | null;
    image4: string | null;
    image5: string | null;
    createdAt: Date;
    updatedAt: Date | null;
    deletedAt: Date | null;

    constructor(
        id: string,
        category: string,
        name: string,
        description: string,
        barcode: string,
        price: number,
        discount: number,
        stock: number,
        image1: string | null,
        image2: string | null,
        image3: string | null,
        image4: string | null,
        image5: string | null,
        createdAt: Date,
        updatedAt: Date | null,
        DeletedAt: Date | null
    ) {
        this.id = id;
        this.category = category;
        this.name = name;
        this.description = description;
        this.barcode = barcode;
        this.price = price;
        this.discount = discount;
        this.stock = stock;
        this.image1 = image1;
        this.image2 = image2;
        this.image3 = image3;
        this.image4 = image4;
        this.image5 = image5;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = DeletedAt;
    }
}