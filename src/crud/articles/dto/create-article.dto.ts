import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class CreateArticleDto {
    @ApiProperty()
    title:string
    
    @ApiProperty({required:false})
    description?:string

    @ApiProperty({required:false})
    body?:string

    @ApiProperty({required:false, default:false})
    published?:boolean=false
}
