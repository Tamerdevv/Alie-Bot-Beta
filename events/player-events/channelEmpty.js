const { MessageEmbed } = require('discord.js')
module.exports = (client, message, queue) => {


    let embed = new MessageEmbed()
        .setColor('RED')
        .setDescription(`${client.emotes.error} - ** I Disconnected When The Voice Channel was empty.** `)
        .setTimestamp()
        .setFooter(`${client.user.username}`, client.user.displayAvatarURL())

    message.channel.send(embed);


};