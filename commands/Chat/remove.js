const { Client, Message, MessageEmbed } = require('discord.js');
const db = require('../../Schema/Schema');
module.exports = {
    name: 'remove',
    aliases: ['removechannel'],
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args) => {
        if (!message.member.hasPermission('ADMINISTRATOR')) return;
        const query = { Guild: message.guild.id, Channel: message.channel.id, Activated: true }
        db.findOne(
            query, async (err, data) => {
                if (data) {
                    await db.findOneAndDelete(query);
                    return message.channel.send(`${message.channel} Has Been Removed`)
                }
                message.channel.send(`${message.channel} is Not Listed As An International Chat`)

            })
    }
}