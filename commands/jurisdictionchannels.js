const { PermissionFlagsBits, SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setDefaultMemberPermissions(PermissionFlagsBits.Administrator | PermissionFlagsBits.ManageGuild)
		.setName('jurisdictionchannels')
		.setDescription('Registered Jurisdiction Channels!'),
	async execute(interaction) {
		let jurisdictionsChannelIDs = require('../data/jurisdictionsChannelIDs')
		return interaction.reply(`Registered Jursidiction Channels!\n**${jurisdictionsChannelIDs.jurisdictionsChannelIDs.join('\n')}**`);
	},
};