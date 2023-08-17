import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {INestApplication} from '@nestjs/common';
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  SwaggerModule.setup('docs', app, createDocument(app));
  await app.listen(3000);
}
bootstrap();

export function createDocument (app: INestApplication): OpenAPIObject {
    const builder = new DocumentBuilder()
    .setTitle('Payment_Service').setDescription('Payment_Service');
    const options = builder.build();
    return SwaggerModule.createDocument(app, options); 
}

