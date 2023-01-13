import { Module } from '@nestjs/common';
import { TelegramBotService } from './services/telegram-bot.service';
import { MessageBuilderService } from './services/message-builder.service';
import { ConfigModule } from '@nestjs/config';

@Module({
	providers: [TelegramBotService, MessageBuilderService],
	imports: [ConfigModule],
	exports: [TelegramBotService, MessageBuilderService],
})
export class TelegramBotModule {}
