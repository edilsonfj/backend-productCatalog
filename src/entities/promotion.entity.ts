export class Promotion {
    id: string;
    name: number;
    createdAt: Date;
    deletedAt: Date | null;

    constructor(
        id: string,
        name: number,
        createdAt: Date,
        deletedAt: Date | null
    ) {
        this.id = id;
        this.name = name;
        this.createdAt = createdAt;
        this.deletedAt = deletedAt;
    }
}