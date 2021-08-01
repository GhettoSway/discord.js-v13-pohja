import { MessageEmbed } from 'discord.js';

export async function command(client, interaction, args) {
	await interaction.editReply({ embeds: [new MessageEmbed().setTitle(args[0]).setDescription(args[1]).setColor('RANDOM')] });
}

export const config = {
	name: 'embed',
	description: 'rakenna embed',
	global: false,
	options: [
		{
			name: 'title',
			description: 'embedin title',
			required: true,
			type: 3,
		},
		{
			name: 'description',
			description: 'embedin description',
			required: true,
			type: 3,
		},
	],
};
