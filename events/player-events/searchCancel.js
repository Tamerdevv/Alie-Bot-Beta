module.exports = (client, message, query, tracks) => {

    const { MessageEmbed } = require('discord.js')

    let embed = new MessageEmbed()
        .setColor('RED')
        .setDescription(`${client.emotes.error} - Enter The Name Of Music Please `)
        .setTimestamp()
        .setFooter(`${client.user.username}`, client.user.displayAvatarURL())

    message.channel.send(embed)

};