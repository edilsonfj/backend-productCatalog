export class Category {
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date | null;
    deletedAt: Date | null;

    constructor(
        id: string,
        name: string,
        created_at: Date,
        updated_at: Date | null,
        deleted_at: Date | null
    ) {
        this.id = id;
        this.name = name;
        this.createdAt = created_at;
        this.updatedAt = updated_at;
        this.deletedAt = deleted_at;
    }
}