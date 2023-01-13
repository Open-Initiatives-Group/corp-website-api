import {
	Body,
	Controller,
	HttpCode,
	HttpStatus,
	Post,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common';
import { TicketSendDto } from '../dto';
import { TicketsService } from '../services/tickets.service';

@Controller('tickets')
@UsePipes(new ValidationPipe())
export class TicketsController {
	constructor(private readonly ticketsService: TicketsService) {}

	@Post('send')
	@HttpCode(HttpStatus.CREATED)
	send(@Body() dto: TicketSendDto) {
		return this.ticketsService.send(dto);
	}
}
