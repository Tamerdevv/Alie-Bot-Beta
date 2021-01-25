const { Message, Client, MessageEmbed } = require('discord.js')
const moment = require('moment')
const { prefix } = require('../../config.json')
module.exports = {
    name: "firstmessage",
    aliases: ["fmessage"],
    description: "Display The First Message in The Channel.",
    usage: `${prefix}firstmessage`,
    /**
     * 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args) => {

        const msg = (await message.channel.messages.fetch({ after: 1, limit: 1 })).first();
        let embed = new MessageEmbed()
            .setColor('RANDOM')
            .setAuthor(`Hey ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
            .setTitle('First Message')
            .setURL(msg.url)
            .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`Content: ${msg.content}`)
            .addField(`Author`, msg.author, true)
            .addField(`Message ID `, msg.id, true)
            .addField(`Created At : `, message.createdAt.toLocaleDateString(), true)
        message.channel.send(embed)

    }
}