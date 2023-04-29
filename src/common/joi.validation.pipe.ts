import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import * as Joi from 'joi';

@Injectable()
export class JoiValidationPipe implements PipeTransform {
  constructor(private schema: Joi.ObjectSchema) {}

  transform(value: any, metadata: ArgumentMetadata) {
    const { error } = this.schema.validate(value, { context: value });
    if (error) {
      const errorMessage = error.details
        .map((err) => err.message.replace(':field', err.context.key))
        .join(', ');
      throw new BadRequestException(errorMessage);
    }
    return value;
  }
}
