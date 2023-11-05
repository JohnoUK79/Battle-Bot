const { PermissionFlagsBits, SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const sql = require("../config/Database");
const { OWNER } = require('../config.json');
const { Colours } = require('../data/colours')

module.exports = {
    data: new SlashCommandBuilder()
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator | PermissionFlagsBits.ManageGuild)

        .setName("announce")
        .setDescription("Announce Message in All Bot Servers!")

        .addStringOption((option) => option
            .setName("message")
            .setDescription("Message to be sent!")
            .setRequired(true)
        ),

    async execute(interaction) {
        const { client } = require('../bot')
        guildIcon = interaction.member.guild.iconURL();
		guildName = interaction.member.guild.name
        if (interaction.member.id != OWNER) {
            return await interaction.reply({
                empheral: true,
                content: `Only the Bot Owner Can Send Announcements! Contact <@${OWNER}> for more details.`,
            })
        }

        var message = interaction.options.getString('message');
        const levelUpChannelIds = await sql.Execute(`SELECT level_up_channel_id FROM settings WHERE 1`) //level_up_channel_id = '1000526899124117535'
        const announceEmbed = new EmbedBuilder()
            .setColor(Colours.BurntOrange)
            .setTitle(`Announcement`)
            .setURL('http://www.phfamily.co.uk/')
            .setAuthor({ name: 'Battle-Bot Announcement', iconURL: 'http://phfamily.co.uk/img/gifs/Influencer.gif'})
            .setThumbnail('http://phfamily.co.uk/img/gifs/Influencer.gif')
            .addFields(
                { name: `Announcement`, value: `${message}` },
            )
            .setTimestamp()
            .setFooter({ text: `Announcement.`, iconURL: `http://phfamily.co.uk/img/gifs/Influencer.gif` });

        //Loop through announcement channels
        for (let i = 0; i < levelUpChannelIds.length; i++) {
            let levelUpChannelId = levelUpChannelIds[i];
            try {
                const sendChannel = client.channels.cache.get(levelUpChannelId.level_up_channel_id)                
                console.log(sendChannel);
                sendChannel.send({ embeds: [announceEmbed] })
            }
            catch (e) {
                console.log(e);
                console.log(levelUpChannelId);
            }
        }announceEmbed
            .setTitle(`Announcement Sent`)

            await interaction.reply({
            embeds: [announceEmbed],
        });

    },
};
