import Joi from 'joi';

export const ValidateIncidents = Joi.object({
    title: Joi.string().required().messages({
        'any.required': 'Please enter a valid title',
        'string.empty': 'Please enter a valid title',
    }),
    description: Joi.string().required().messages({
        'any.required': 'Please enter a valid description',
        'string.empty': 'Please enter a valid description',
    }),
    area: Joi.string().required().messages({
        'any.required': 'Please enter a valid area',
        'string.empty': 'Please enter a valid area',
    }),
    image: Joi.string().required().messages({
        'any.required': 'Please enter a valid image',
        'string.empty': 'Please enter a valid image',
    }),
    contact: Joi.string().required().messages({
        'any.required': 'Please enter a valid contact',
        'string.empty': 'Please enter a valid contact',
    }),
});
