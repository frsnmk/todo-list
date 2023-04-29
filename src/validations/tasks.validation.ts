import * as Joi from 'joi';

const message = {
  'string.base': 'Data :field yang dimasukan harus string!',
  'string.empty': 'Data :field tidak boleh kosong!',
  'any.required': 'Data :field harus diisi!',
};

export const taskSchema = Joi.object({
  name: Joi.string().required().messages(message),
  description: Joi.string().required().messages(message),
  has_finished: Joi.boolean().required().messages(message),
});
