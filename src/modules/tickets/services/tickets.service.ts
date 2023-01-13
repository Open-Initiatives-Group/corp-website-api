import {
	Injectable,
	InternalServerErrorException,
	Logger,
} from '@nestjs/common';
import { TicketModel } from '../../../models';
import { InjectModel } from '@nestjs/sequelize';
import { TicketSendDto } from '../dto';
import { TelegramBotService } from '../../telegram-bot/services/telegram-bot.service';
import { MessageBuilderService } from '../../telegram-bot/services/message-builder.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class TicketsService {
	private readonly logger = new Logger('Tickets-Service');

	constructor(
		@InjectModel(TicketModel)
		private readonly ticketRepository: typeof TicketModel,

		private readonly telegramBotService: TelegramBotService,
		private readonly messageBuilderService: MessageBuilderService,
		private readonly configService: ConfigService,
	) {}

	/**
	 * Отправить обращение
	 * @param dto
	 */
	async send(dto: TicketSendDto) {
		let ticket: TicketModel;
		try {
			ticket = await this.ticketRepository.create(dto);
		} catch (e) {
			this.logger.error(e);
			throw new InternalServerErrorException();
		}

		const messageText = this.messageBuilderService.build('ticket', {
			...dto,
			id: ticket.id,
		});

		await this.telegramBotService.send(
			Number(this.configService.getOrThrow('BOT_CHAT_ID')),
			messageText,
		);

		return;
	}
}
