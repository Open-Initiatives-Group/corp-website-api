import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';

async function bootstrap() {
	const logger = new Logger('CORP-WEBSITE-API');
	const app = await NestFactory.create(AppModule);

	const configService = app.get(ConfigService);

	const webserverPort = configService.getOrThrow('WEBSERVER_PORT');
	await app.listen(webserverPort, () => {
		logger.log(`Started on :${webserverPort}`);
	});
}

bootstrap();
