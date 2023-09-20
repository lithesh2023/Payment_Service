import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {INestApplication} from '@nestjs/common';
import * as config from 'config';
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  SwaggerModule.setup('docs', app, createDocument(app));
  await app.listen(config.get('app.port'));
}
bootstrap();

export function createDocument (app: INestApplication): OpenAPIObject {
    const builder = new DocumentBuilder()
    .setTitle('Payment_Service').setDescription('Payment_Service');
    const options = builder.build();
    return SwaggerModule.createDocument(app, options); 
}

