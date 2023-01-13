import { Module } from '@nestjs/common';
import { TicketsService } from './services/tickets.service';
import { TicketsController } from './controllers/tickets.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { TicketModel } from '../../models';
import { TelegramBotModule } from '../telegram-bot/telegram-bot.module';
import { ConfigModule } from '@nestjs/config';

@Module({
	providers: [TicketsService],
	controllers: [TicketsController],
	imports: [
		SequelizeModule.forFeature([TicketModel]),
		ConfigModule,
		TelegramBotModule,
		// TelegrafModule.forRootAsync(telegrafConfig()),
	],
})
export class TicketsModule {}
