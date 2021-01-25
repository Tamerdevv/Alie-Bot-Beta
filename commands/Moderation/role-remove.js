const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'role',
    aliases: ['role-add'],
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args) => {
        if (!message.member.hasPermission('MANAGE_ROLES')) return;
        const tagged = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.mentions.members.first().id
        if (!tagged) return;
        const taggedRole = message.mentions.roles.first() || message.guild.roles.cache.get(args[1]) || message.mentions.roles.first().name
        if (!taggedRole) return

        await tagged.roles.add(taggedRole).catch(err => {
            message.channel.send("This Role Isn't In This Guild")
        })
        message.channel.send(`I Have Been Given ${tagged.user.username} ${taggedRole} Role.`)

    }
}