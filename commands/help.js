const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const timestamp = require('../config/timestamp');
setDate = timestamp.UTCdefault()

module.exports = {
    data: new SlashCommandBuilder()
        .setName("help")
        .setDescription("Get help with using the server Guild Bot"),


    async execute(interaction) {
        guildIcon = interaction.member.guild.iconURL();
		guildName = interaction.member.guild.name
        guildId = interaction.guildId

        const helpEmbed = new EmbedBuilder()
            .setColor('#0099ff')
            .setTitle(`${guildName} - Help Menu`)
            .setURL('http://www.phfamily.co.uk/')
            .setThumbnail(interaction.user.displayAvatarURL())
            .setAuthor({ name: interaction.member.displayName, iconURL: interaction.user.displayAvatarURL({ dynamic: true }), url: 'https://www.buymeacoffee.com/johnouk79' })
            .setDescription(`**${guildName} - Bot Help!**`)
            .setThumbnail(`${guildIcon}`)
            .addFields(
                { name: `Welcome Role & Message`, value: `The bot has the option to assign a Welcome Role & Messages to users upon entry of your server.\nAdministrators can set this up using the **/welcome** command.` },
                { name: `SLAPS!`, value: `There are often times when someone just needs a slap to be able to get a grip of themselves.\nBack by popular demand you can use the **/slap** command.` },
                { name: `Levels`, value: `Active members score points based on how active they are in your servers.\nThis is a fun way to keep members engaged.\nUse the **/level** command to see your progress.` },
                { name: `Jurisdictions`, value: `Ensure you maximise rewards daily!\n**Jursidictions Event** start times are posted for **Every Event**.` },
                { name: `Gold Coupons`, value: `Maximise the use of your **Gold Coupons!** to ensure you get the troops you need.\nUse **/gold** & **/gold-camp** commands for more information.` },
                { name: `Leaderboard`, value: `See how your score compares with members from many **S17 servers**.\nUse the **/leaderboard** command to see if you made the cut!\n**Full Scoreboard** available on the link at the top of the Leaderboard!` },
                { name: `Rank System`, value: `In addition to the Levels feature, System Adminstrators can create Level Up Ranks.\nThis allows members to be recognised for their participation in your servers.\nSystem Administrators please use the **/set-ranks** command to set up for your server.` },
                { name: `Military Ranks`, value: `Don't have time to set up Level Up Ranks? System Adminstrators can create **Military Level Up Ranks**.\nThis allows members to be assigned Roles from **Private** to a **5 Star General**.\nSystem Administrators please use the **/add-ranks** command to set up **Military Ranks** for your server.` },
                { name: `Vote`, value: `Got a question you want to put to your members?\nUse the **/vote** command and sit back and tally the results.` },
                { name: `Reaction Roles!`, value: `System Administrators can assign **Reaction Roles** to any message using the **/add-role** command.\nMembers only need to react to the message with the relevant **Emoji** to pick up the **Role**.\nSystem Administrators can just as easily remove the Reaction Role using the **/remove-role** command.` },
                { name: `Poll`, value: `Need to engage the opinions of your members?\nPoll it using the **/poll** command.` },
                { name: `Player Database`, value: `Our **Botlytics Team** have compiled details of almost 30k player profiles and affiliations.\nUse the **/search** command to find your player ID.\n**Registered members** can add **Images** or **Gifs** to their profile as well as update their own **Bot Profiles**.` },
                { name: `Bespoke Branding`, value: `The Bot is designed to fully integrate with your own **Server Branding**.\nAll posts will be fully bespoke and linked to your servers image & name.` },
                { name: `Invite Logging`, value: `Everytime a member creates an Invite a post will be created in your updates channel.\n**Full Invite Tracking** - Monitor who your server influences are and rewards each time a member joins you will see who brought them here!).` },
                { name: `Jukebox`, value: `Play your favourite songs whilst burning & building!\nUse **/jukebox song** to search by **Name / Artist**.\nUse **/jukebox queue** to see what's currently in the **Playlist**!` },
                { name: `**Guild Dashboard**`, value: `Officers & Leaders can update player data on the Bot.` },
                { name: `Coming Soon!`, value: `**Server Website!**` },
                { name: `Support the Developer!`, value: `**Enjoying the Bot?**\nBuy the Dev a Beer!\nhttps://www.buymeacoffee.com/johnouk79` },
            )
            .setImage(`${guildIcon}`)
            .setTimestamp()
            .setFooter({ text: `${guildName} - Bot Help!.`, iconURL: `${guildIcon}` });
            await interaction.reply({
            ephemeral: false,
            embeds: [helpEmbed],
        });
    },
};
