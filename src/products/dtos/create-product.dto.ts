import { IsArray, IsBoolean, IsNotEmpty, IsNumber, IsString, Min, MinLength } from "class-validator";

export class CreateProductDto {
    
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    name: string;
    
    @IsString()
    @IsNotEmpty()
    @MinLength(10)
    description: string;

    @IsNumber()
    @IsNotEmpty()
    @Min(0)
    stock: number;
    
    @IsNumber()
    @IsNotEmpty()
    @Min(1)
    price: number;

    @IsArray()
    @IsNotEmpty() 
    photo: string[];

    @IsNotEmpty()
    @IsBoolean()
    isActive: boolean;
}