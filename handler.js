import glob from 'glob';
import { promisify } from 'util';
const globPromise = promisify(glob);

export async function eventHandler(client) {
	(await globPromise('./events/*/*.js')).map(async (path) => {
		await import(`${path}`).then((file) => {
			const eventName = path.split('\\').pop().split('/').pop().slice(0, -3);
			client.on(eventName, file.event.bind(null, client));
		});
	});
}

export async function commandHandler(client) {
	const commandsArr = [];
	const globalCommandsArr = [];
	const paths = await globPromise('./commands/*/*.js');

	for (const file of paths) {
		await import(`${file}`).then((commandFile) => {
			const fileName = file.split('\\').pop().split('/').pop();

			if (!commandFile.command || !commandFile.config) return console.log(`${fileName}  -tiedostoa ei olla konfiguroitu oikein.`);
			if (!commandFile.config.name || !commandFile.config.description) return console.log(`${fileName}  -tiedostoa ei olla konfiguroitu oikein.`);

			client.commands.set(commandFile.config.name, commandFile.command);

			if (commandFile.config.global === true) {
				globalCommandsArr.push(commandFile.config);
			} else {
				commandsArr.push(commandFile.config);
			}
		});
	}
	client.once('ready', () => {
		client.guilds.cache.get(process.env.GUILDID).commands.set(commandsArr);
		client.application.commands.set(globalCommandsArr);
		console.log(`${client.user.tag} on nyt päällä.`);
	});
}
