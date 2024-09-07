import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as process from 'node:process';
// import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

declare const module: any;

async function bootstrap(): Promise<void> {

  const app = await NestFactory.create(AppModule,
    // ['log', 'fatal', 'error', 'warn', 'debug',  'verbose']
    { logger: ['log', 'fatal', 'error', 'warn', 'debug', 'verbose'] },
  );

  // Prefix
  app.setGlobalPrefix('api')
  await app.listen(4000);

  console.log({})

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }

}


//TODO Create swagger functionality
//
// function createSwagger(app: INestApplication) {
//
//   const options = new DocumentBuilder()
//     .setTitle(SWAGGER_TITLE)
//     .setDescription(SWAGGER_DESCRIPTION)
//     .addBearerAuth()
//     .build();
//
//   const document = SwaggerModule.createDocument(app, options);
//   SwaggerModule.setup(SWAGGER_PREFIX, app, document);
// }
// bootstrap()
bootstrap().catch(err => {
  console.error("Error found:", err);
  const DEFAULT_EXIT_CODE = 1;
  process.exit(DEFAULT_EXIT_CODE)

})
