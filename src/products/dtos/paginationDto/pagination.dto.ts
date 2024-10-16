import { ProductEntity } from "src/products/entities/product.entity";

export class PaginationDto{

    page:number;
    limit:number;
    total:number;
    lastpage:number;
    data:ProductEntity[]
}