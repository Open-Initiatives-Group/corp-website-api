import {
	SequelizeModuleAsyncOptions,
	SequelizeModuleOptions,
} from '@nestjs/sequelize';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as models from '../models';

export const sequelizeConfig = (): SequelizeModuleAsyncOptions => ({
	inject: [ConfigService],
	imports: [ConfigModule],
	useFactory: (configService: ConfigService): SequelizeModuleOptions => ({
		dialect: 'postgres',
		host: configService.getOrThrow('POSTGRES_HOST'),
		port: Number(configService.getOrThrow('POSTGRES_PORT')),
		username: configService.getOrThrow('POSTGRES_USER'),
		password: configService.getOrThrow('POSTGRES_PASSWORD'),
		database: configService.getOrThrow('POSTGRES_DATABASE'),
		synchronize: true,
		autoLoadModels: true,
		models: Object.values(models),
	}),
});
