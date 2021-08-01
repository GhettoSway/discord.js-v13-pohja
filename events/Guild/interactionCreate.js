export async function event(client, interaction) {
	if (interaction.isCommand()) {
		await interaction.defer();

		const command = client.commands.get(interaction.commandName);
		if (!command) return;

		const args = [];
		interaction.options.data.map((options) => {
			args.push(options.value);
		});

		command(client, interaction, args);
	}
}
