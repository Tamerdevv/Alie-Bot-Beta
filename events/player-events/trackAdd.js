module.exports = (client, message, queue, track) => {


    const { MessageEmbed } = require('discord.js')

    let embed = new MessageEmbed()
        .setColor('RED')
        .setDescription(`${client.emotes.music} - ${track.title} has been added to the queue ! `)
        .setTimestamp()
        .setFooter(`${client.user.username}`, client.user.displayAvatarURL())

    message.channel.send(embed)

};