module.exports = (client, message, track) => {


    const { MessageEmbed } = require('discord.js')

    let embed = new MessageEmbed()
        .setColor('RED')
        .setDescription(`${client.emotes.music} - Now playing ${track.title} into ${message.member.voice.channel.name} ... `)
        .setTimestamp()
        .setFooter(`${client.user.username}`, client.user.displayAvatarURL())

    message.channel.send(embed)

};