const canva = require('canvacord')
const { Client, Message, MessageEmbed, MessageAttachment } = require('discord.js');

module.exports = {
    name: 'trigger',
    aliases: ['trigger-avatar'],
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
        let avt = user.displayAvatarURL({ format: 'png' });
        let attch = await canva.Canvas.trigger(avt)
        let attchment = new MessageAttachment(attch, 'trigger.gif')
        message.channel.send(attchment)

    }
}