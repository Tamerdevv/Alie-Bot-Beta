const { Client, Message, MessageEmbed } = require('discord.js');
const db = require('../../Schema/Schema');
module.exports = {
    name: 'add',
    aliases: ['addchannel'],
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args) => {
        if (!message.member.hasPermission('ADMINISTRATOR')) return;
        db.findOne({ Guild: message.guild.id, Channel: message.channel.id, Activated: true }, async (err, data) => {
            if (data) return message.channel.send('There Is An International Chat Channel Already');
            data = new db({

                Guild: message.guild.id,
                Channel: message.channel.id,
                Author: message.author.id,
                Activated: true,
            });
            data.save();
            message.channel.send(`${message.channel} Is an International Chat`)
        })
    }
}