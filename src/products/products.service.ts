import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProductsService {

  constructor(private prismaService: PrismaService) {
  }

  create(createProductDto: CreateProductDto) {
    this.prismaService.product.create({
      data: createProductDto
    })
  }

  findAll() {
  return  this.prismaService.product.findMany()
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.prismaService.product.update(
      {
        data: updateProductDto,
        where: {
          id:id
        }
      }
    );
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
