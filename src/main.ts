import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { FastifyAdapter } from '@nestjs/platform-fastify';
import { Logger } from 'nestjs-pino';

async function bootstrap() {
  const fastifyAdapter = new FastifyAdapter();
  const app = await NestFactory.create(AppModule, fastifyAdapter, {
    logger: false,
  });
  app.useLogger(app.get(Logger));
  app.setGlobalPrefix('v1');
  await app.listen(3000);
}
bootstrap();
