// * Validar variables de entorno con Joi
const dotenv = require('dotenv');
const joi = require('joi');
dotenv.config();

// ? Reglas que tiene la variable de entorno
const envsSchema = joi
	.object({
		SERVER_PORT: joi.number().integer().required(),
	})
	.unknown(true);
const { error, value } = envsSchema.validate(process.env);

// ! En caso de tener algun error
if (error) {
	throw new Error(`Config validation error: ${error}`);
}

// * Exportar la variable de entorno validada
const envs = {
	serverPort: value.SERVER_PORT,
};
module.exports = envs;
