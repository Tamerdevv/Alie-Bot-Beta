const canva = require('canvacord');
const { Client, Message, MessageEmbed, MessageAttachment } = require('discord.js');

module.exports = {
    name: 'greyscale',
    aliases: ['gs'],
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args) => {

        let user;
        if (message.mentions.users.first()) {


            user = message.mentions.users.first();


        }
        else {
            user = args[0];
        }
        let avt = user.displayAvatarURL({ format: 'png' });
        let attch = await canva.Canvas.greyscale(avt)
        let attchment = new MessageAttachment(attch, 'greyscale.png')
        message.channel.send(attchment)




    }
}