module.exports = (client, message, query) => {
    const { MessageEmbed } = require('discord.js')

    let embed = new MessageEmbed()
        .setColor('RED')
        .setDescription(`${client.emotes.error} - I Can't Find Anything In Youtube Named ${query}`)
        .setTimestamp()
        .setFooter(`${client.user.username}`, client.user.displayAvatarURL())

    message.channel.send(embed)

};