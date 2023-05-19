export class Promotion {
    id: number;
    name: string;
    discount: number;
    created_at: Date;
    updated_at: Date | null;
    deleted_at: Date | null;

    constructor(
        id: number,
        name: string,
        discount: number,
        created_at: Date,
        updated_at: Date | null,
        deleted_at: Date | null
    ) {
        this.id = id;
        this.name = name;
        this.discount = discount;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.deleted_at = deleted_at;
    }
}