const chalk = require('chalk'); // * Agregar colores a logger
const envs = require('./config/envs.js'); // ! Validacion variable de entorno
const app = require('./src/app.js'); // * App-Express

async function main() {
	try {
		app.listen(envs.serverPort);
		console.log(chalk.yellow('\nServer on port'), chalk.green(envs.serverPort));
	} catch (error) {
		log(chalk.red(error));
	}
}

main();
