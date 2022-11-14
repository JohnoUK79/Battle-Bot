const { PermissionFlagsBits, SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setDefaultMemberPermissions(PermissionFlagsBits.Administrator | PermissionFlagsBits.ManageGuild)
		.setName('test')
		.setDescription('Slash Command Tester!'),
	async execute(interaction) {
		let jurisdictions = require('../data/jurisdictions')
		console.log(jurisdictions)
		//return interaction.reply(`Jurisdictions!\n${jurisdictions.join('\n')}`);
		return;
	},
};