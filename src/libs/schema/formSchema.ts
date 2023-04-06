import Joi from "joi";

const formSchema = Joi.object().keys({
	name: Joi.string().required().empty().min(5).max(20).messages({
		"string.base": "Name should be a type of 'text'.",
		"string.empty": "What's your name?",
		"any.required": `Name is a required field.`,
	}),
	email: Joi.string()
		.required()
		.empty()
		.email({ tlds: { allow: false } })
		.messages({
			"string.base": "Email should be a type of 'text'.",
			"string.empty": "What's your email?",
			"any.required": `Email is a required field.`,
			"string.email": `Email must be valid.`,
		}),
	subject: Joi.string().required().empty().messages({
		"string.base": "Subject should be a type of 'text'.",
		"string.empty": "What's your subject?",
		"any.required": `Subject is a required field.`,
	}),
	message: Joi.string().required().empty().messages({
		"string.base": "Message should be a type of 'text'.",
		"string.empty": "What's your message?",
		"any.required": `Message is a required field.`,
	}),
});

export default formSchema;
