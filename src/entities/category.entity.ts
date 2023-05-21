export class Category {
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date | null;
    deletedAt: Date | null;

    constructor(
        id: string,
        name: string,
        createdAt: Date,
        updatedAt: Date | null,
        deletedAt: Date | null
    ) {
        this.id = id;
        this.name = name;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
    }
}