import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { ITicket } from './interfaces';

@Table({ tableName: 'tickets' })
export class TicketModel
	extends Model<TicketModel, ITicket>
	implements ITicket
{
	@Column({
		type: DataType.INTEGER,
		allowNull: false,
		primaryKey: true,
		autoIncrement: true,
	})
	id: number;

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	name: string;

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	phone: string;

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	email: string;

	@Column({
		type: DataType.TEXT,
		allowNull: false,
	})
	description: string;

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	price: string;
}
