
const { MessageEmbed } = require('discord.js')
module.exports = (client, message, queue) => {

    let embed = new MessageEmbed()
        .setColor('RED')
        .setDescription(`${client.emotes.error} - **I Have Been Disconnected From The Voice Channel.**`)
        .setTimestamp()
        .setFooter(`${client.user.username}`, client.user.displayAvatarURL())

    message.channel.send(embed);
};
