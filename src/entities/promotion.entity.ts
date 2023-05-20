export class Promotion {
    id: string;
    discount: number;
    createdAt: Date;
    updatedAt: Date | null;
    deletedAt: Date | null;

    constructor(
        id: string,
        discount: number,
        created_at: Date,
        updated_at: Date | null,
        deleted_at: Date | null
    ) {
        this.id = id;
        this.discount = discount;
        this.createdAt = created_at;
        this.updatedAt = updated_at;
        this.deletedAt = deleted_at;
    }
}