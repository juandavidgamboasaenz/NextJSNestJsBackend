import { Module } from '@nestjs/common';
import { SampleModule } from './sample/sample.module';
import { ProductsModule } from './products/products.module';
import { PrismaService } from './prisma/prisma.service';
import { ConfigModule } from '@nestjs/config'
import { PlanetsModule } from './planets/planets.module';
import { DefaultModule } from './default/default.module';



@Module({
  imports: [ConfigModule.forRoot(
    {
      envFilePath: './.env',
    }), SampleModule, ProductsModule, PlanetsModule, DefaultModule],
  controllers: [],
  providers: [PrismaService],
})


export class AppModule {}
