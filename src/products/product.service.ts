import { Injectable, InternalServerErrorException, NotFoundException, Body, BadRequestException, Query, Param, Patch } from '@nestjs/common';
import { CreateProductDto } from "./dtos/create-product.dto";
import { UpdateProductDto } from './dtos/update-product.dto';
import { ProductEntity} from "./entities/product.entity";

@Injectable()
export class ProductsService{
    private products: ProductEntity[] = [
        { id: 0, name: "Anis", description: "fivestars", stock: 789, price: 20, photo: [], isActive: true },
        { id: 1, name: "Vodka", description: "maj o menoj manito", stock:89, price: 22, photo: [], isActive: true },
        { id: 2, name: "Ron", description: "Asco",stock: 123, price: 30, photo: [], isActive: true },
        { id: 3, name: "Champagne", description: "sabroso",stock: 129, price: 21, photo: [], isActive: true },
        { id: 4, name: "Blue label", description: "bebida espirituosa", stock: 19, price: 410, photo: [], isActive: true },
    ]
    create(body: CreateProductDto){
        try {
            if( !body ){
                throw new BadRequestException("Product not create!")
            }
            this.products.push( { ...body, id: this.products.length+1 }
            )

        } catch (error) {
            throw new InternalServerErrorException("I don't know what's happening bro...")
        }
    }

    async findAll(query: Object): Promise<ProductEntity[]> {
        try {
            if( this.products.length === 0 ){
                throw new NotFoundException("Product not found!");
            }
            return this.products
        } catch (error) {
            throw new InternalServerErrorException("I don't know what's happening bro...")
        }
    }

    findOne(id: number){
        return {id}
    }

    update(id: number, updateProductDto: UpdateProductDto){
        return {id, updateProductDto}
    }

    remove(id: number){
        return {id}
    }
}