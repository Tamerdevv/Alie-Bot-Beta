const { Client, Message, MessageEmbed } = require('discord.js');
const { prefix } = require('../../config.json')
module.exports = {
    name: 'avatar-guild',
    aliases: ['guild-avatar'],
    description: "Display The Guild Avatar",
    usage: `${prefix}guild`,
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args) => {

        message.channel.send(new MessageEmbed()
            .setColor('GREY')
            .setTitle(`Download Link.`)
            .setURL(`${message.guild.iconURL({ dynamic: true, size: 1024, format: "png" })}`)
            .setFooter(`Requested By : ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
            .setImage(message.guild.iconURL({ dynamic: true, size: 1024, format: "png" }))
        )

    }
}