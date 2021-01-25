const { Message, Client, MessageEmbed } = require('discord.js')
const moment = require('moment')
module.exports = {
    name: "clear",
    aliases: ['purge'],
    /**
     * 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args) => {
        var count = parseInt(args[0]) + 1
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return;
        if (!count) {
            count = 100
        }
        if (count <= 2) return message.channel.send(`You Can't Delete Less Then 2 Messages`).then(m => m.delete({ timeout: 300 }));
        if (count > 100) return message.channel.send(`You Can't Delete More Then 100 Messages`).then(f => f.delete({ timeout: 300 }));
        message.channel.bulkDelete(count, true)
        await message.channel.send(`Deleting ${parseInt(count)} Messages`).then(t => t.delete())

    }
}