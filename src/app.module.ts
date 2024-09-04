import { Module } from '@nestjs/common';
import { SampleModule } from './sample/sample.module';
import { ProductsModule } from './products/products.module';
import { PrismaService } from './prisma/prisma.service';
import { ConfigModule } from '@nestjs/config'



@Module({
  imports: [ConfigModule.forRoot(
    {
      envFilePath: './.env',
    }), SampleModule, ProductsModule],
  controllers: [],
  providers: [PrismaService],
})


export class AppModule {}
