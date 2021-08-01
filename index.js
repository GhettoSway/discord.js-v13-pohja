import { Client, Collection } from 'discord.js';
import dotenv from 'dotenv';
import { eventHandler, commandHandler } from './handler.js';

dotenv.config();

const client = new Client({
	intents: ['GUILDS', 'GUILD_MESSAGES'],

	presence: {
		activities: [{ name: 'Elokuvaa', type: 'WATCHING' }],
		status: 'idle',
	},
});

client.commands = new Collection();
eventHandler(client);
commandHandler(client);

client.login(process.env.TOKEN);
