import { Module } from '@nestjs/common';
import { SampleModule } from './sample/sample.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [SampleModule, ProductsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
