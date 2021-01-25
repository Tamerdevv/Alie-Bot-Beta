const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'nick',
    aliases: ['nickname'],
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args) => {
        const member = message.mentions.members.first()
        if (!member) return message.channel.send("Please Enter A Member.")
        const argument = args.slice(1).join(" ")
        if (!argument) return message.replt('Please Enter A Nickname')

        await message.channel.send(`NickName Of <@${member.id}> Is : ${argument} `)
        try {
            member.setNickname(argument)
        } catch (err) {
            console.log(err)
        }

    }
}