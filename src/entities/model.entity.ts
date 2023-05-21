export class Model {
    id: string;
    name: string;
    brand: string;
    createdAt: Date;
    updatedAt: Date | null;
    deletedAt: Date | null;

    constructor(
        id: string,
        name: string,
        brand: string,
        createdAt: Date,
        updatedAt: Date | null,
        deletedAt: Date | null
    ) {
        this.id = id;
        this.name = name;
        this.brand = brand;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
    }
}