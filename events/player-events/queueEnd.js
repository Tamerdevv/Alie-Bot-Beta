module.exports = (client, message, queue) => {


    const { MessageEmbed } = require('discord.js')

    let embed = new MessageEmbed()
        .setColor('RED')
        .setDescription(`${client.emotes.error} - Music Stopped Because No more music in the queue `)
        .setTimestamp()
        .setFooter(`${client.user.username}`, client.user.displayAvatarURL())

    message.channel.send(embed)

};