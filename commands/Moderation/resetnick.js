const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'reset-nick',
    aliases: ['reset-nickname'],
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args) => {
        const member = message.mentions.members.first() 
        if (!member) return message.channel.send("Please Enter A Member.")

        try {
            member.setNickname(null)
        } catch (err) {
            console.log(err)
        }

    }
}