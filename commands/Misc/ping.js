const { Message, Client, MessageEmbed } = require('discord.js')
module.exports = {
    name: "ping",
    aliases: ["latancy"],
    description: 'Display bot latancy , ping.',
    /**
     * 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args) => {


        var Callculated = await message.channel.send('Callculating Ping , Be patient.')
        let authorping = Math.round(Callculated.createdTimestamp - message.createdTimestamp)
        let botping = Math.round(client.ws.ping)
        let totalSeconds = (client.uptime / 1000);
        let days = Math.floor(totalSeconds / 86400);
        totalSeconds %= 86400;
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.floor(totalSeconds % 60);
        let embed = new MessageEmbed()
            .setColor('RED')
            .setAuthor(`Requested By : ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
            .setThumbnail(client.user.displayAvatarURL())
            .addField('My Ping : ', `${botping}ms.`, true)
            .addField('Discord API : ', `${authorping}ms.`, true)
            .addField('Bot Uptime : ', `${days}Day(s) , ${hours}Hour(s) , ${minutes}Minute(s)  `)
            .setFooter(`Requested By : ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
        Callculated.edit(embed)


    }
}