import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { sequelizeConfig } from './configs';
import { TicketsModule } from './modules/tickets/tickets.module';

@Module({
	imports: [
		ConfigModule.forRoot(),
		SequelizeModule.forRootAsync(sequelizeConfig()),
		TicketsModule,
	],
})
export class AppModule {}
