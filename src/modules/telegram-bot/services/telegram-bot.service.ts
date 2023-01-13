import { Injectable } from '@nestjs/common';
import * as TelegramBot from 'node-telegram-bot-api';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class TelegramBotService {
	private readonly bot: TelegramBot = null;
	constructor(private readonly configService: ConfigService) {
		this.bot = new TelegramBot(configService.getOrThrow('BOT_TOKEN'), {
			polling: true,
		});
	}

	/**
	 * Отправка сообщений в чат
	 * @param chatId
	 * @param text
	 */
	async send(chatId: number, text: string): Promise<TelegramBot.Message> {
		console.log(chatId);
		return await this.bot.sendMessage(chatId, text);
	}
}
