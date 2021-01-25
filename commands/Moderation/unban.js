const { Client, Message, MessageEmbed } = require('discord.js');
const { user } = require('../..');

module.exports = {
    name: 'ban',
    aliases: ['bmember'],
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args) => {
        if (!message.member.hasPermission('BAN_MEMBERS')) return;
        const taggeduser = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if (taggeduser === message.author) return (await message.channel.send(`-<@${message.author.id}> Are You Trying To Ban Yourself ? :thinking:`).then(e => {
            e.delete({ timeout: 1000 })
        }));
        var days = args[2]
        if (!days) days = 7;
        if (!args[1]) args[1] = 'No Reason Provided'
        message.guild.members.unban(taggeduser, args[1]);
        message.channel.send(new MessageEmbed()
            .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
            .setFooter(`${taggeduser.user.username}  Unbanned.`, taggeduser.user.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
            .addField('Member', taggeduser.user.username, true)
            .addField('Reason : ', args[1], true)
            .setThumbnail(taggeduser.user.displayAvatarURL({ dynamic: true }))
        )

    }
}