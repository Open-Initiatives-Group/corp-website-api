import { ITicket } from '../../../models/interfaces';
import {
	IsEmail,
	IsPhoneNumber,
	IsString,
	MaxLength,
	MinLength,
} from 'class-validator';

export class TicketSendDto implements Omit<ITicket, 'id'> {
	@IsString()
	@MinLength(2)
	@MaxLength(255)
	name: string;

	@IsPhoneNumber('RU')
	phone: string;

	@IsEmail()
	@MaxLength(255)
	email: string;

	@IsString()
	@MinLength(10)
	@MaxLength(500)
	description: string;

	@IsString()
	@MaxLength(255)
	price: string;
}
