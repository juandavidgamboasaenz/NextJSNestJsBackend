import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigModule } from '@nestjs/config'
import * as process from 'node:process';
import { NestFactoryStatic } from '@nestjs/core/nest-factory';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

declare const module: any;

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create<NestFactoryStatic>(AppModule,
    new FastifyAdapter());
  // Prefix
  app.setGlobalPrefix('api')
  await app.listen(4000);

  console.log({})

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }

}


function createSwagger(app: INestApplication) {

  const options = new DocumentBuilder()
    .setTitle(SWAGGER_TITLE)
    .setDescription(SWAGGER_DESCRIPTION)
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup(SWAGGER_PREFIX, app, document);
}
// bootstrap()
bootstrap().catch(err => {
  console.error(err);
  const DEFAULT_EXIT_CODE = 1;
  process.exit(DEFAULT_EXIT_CODE)

})
