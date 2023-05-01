import { InjectRepository } from '@nestjs/typeorm';
import * as Joi from 'joi';
import { UserRepository } from 'src/modules/users/users.repository';
import { UserService } from 'src/modules/users/users.service';

const message = {
  'string.base': ':field harus berbentuk text!',
  'string.empty': ':field tidak boleh kosong!',
  'any.required': ':field harus diisi!',
};

export const userSchema = Joi.object({
  name: Joi.string().required().messages(message),
  username: Joi.string().required().messages(message),
  password: Joi.string().required().messages(message),
});
