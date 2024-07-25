import Joi from 'joi';

export const ValidatePoll = Joi.object({
    question: Joi.string().required().messages({
        'any.required': 'Please enter a valid question',
        'string.empty': 'Please enter a valid question',
    }),
    choices: Joi.string().required().messages({
        'any.required': 'Please enter a valid choices',
        'string.empty': 'Please enter a valid choices',
    })
});
