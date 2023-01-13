import {
	TelegrafModuleAsyncOptions,
	TelegrafModuleOptions,
} from 'nestjs-telegraf';
import { ConfigModule, ConfigService } from '@nestjs/config';

export const telegrafConfig = (): TelegrafModuleAsyncOptions => ({
	inject: [ConfigService],
	imports: [ConfigModule],
	useFactory: (configService: ConfigService): TelegrafModuleOptions => ({
		token: configService.getOrThrow('BOT_TOKEN'),
	}),
});
