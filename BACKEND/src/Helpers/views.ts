import Joi from 'joi';

export const ValidateView = Joi.object({
    title: Joi.string().required().messages({
        'any.required': 'Please enter a valid title',
        'string.empty': 'Please enter a valid title',
    }),
    description: Joi.string().required().messages({
        'any.required': 'Please enter a valid description',
        'string.empty': 'Please enter a valid description',
    })
});
