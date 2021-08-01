export async function command(client, interaction, args) {
	await interaction.editReply({ content: 'pong!' });
}

export const config = {
	name: 'ping',
	description: 'vastaa pong',
	global: false,
};
