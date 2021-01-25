const { Client, Message, MessageEmbed } = require('discord.js');
const { prefix } = require('../../config.json')
module.exports = {
    name: 'avatar',
    aliases: ['user-avatar'],
    description: "Display A Member Avatar",
    usage: `${prefix}avatar || depressed.#0004`,
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args) => {
        let user;
        if (message.mentions.users.first()) {
            user = message.mentions.users.first();
        } else {
            user = message.author;
        }
        message.channel.send(new MessageEmbed()
            .setColor('GREY')
            .setTitle(`Download Link.`)
            .setURL(`${user.displayAvatarURL({ dynamic: true, size: 1024, format: "png" })}`)
            .setFooter(`Requested By : ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
            .setImage(user.displayAvatarURL({ dynamic: true, size: 1024, format: "png" }))
        )

    }
}