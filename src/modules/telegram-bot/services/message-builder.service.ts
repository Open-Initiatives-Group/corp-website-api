import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { join } from 'path';
import { existsSync, readFileSync } from 'fs';

@Injectable()
export class MessageBuilderService {
	/**
	 * Построить фразу на основе шаблона
	 * @param templateName
	 * @param fields
	 */
	build(templateName: string, fields: any) {
		const templatePath = join(
			__dirname,
			'..',
			'templates',
			`${templateName}.template.txt`,
		);

		if (!existsSync(templatePath)) {
			throw new InternalServerErrorException();
		}

		let text: string = readFileSync(templatePath).toString();

		for (const key in fields) {
			text = text.replace(`{{${key}}}`, fields[key]);
		}

		return text;
	}
}
