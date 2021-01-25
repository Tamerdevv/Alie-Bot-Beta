const { Message, Client, MessageEmbed } = require('discord.js')
const moment = require('moment')
const { prefix } = require('../../config.json')
module.exports = {
    name: "user",
    aliases: ["user-info"],
    description: 'Shows Some Inforamtion About A Member.',
    usage: `${prefix}user || <member>`,
    /**
     * 
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
        const member = message.guild.member(user);
        const channel = message.channel;
        const Embed = new MessageEmbed()
            .setColor('GREY')
            .setTitle(`${user.username} Info`, user.displayAvatarURL({ dynamic: true, format: 'gif' || 'png' }))
            .setThumbnail(user.displayAvatarURL({ dynamic: true }))
            .addField("Full Username: ", `${user.username}#${user.discriminator}`, true)
            //.addField(`Joined ${message.guild.name}`, message.member.joinedAt(), true)
            .addField(`${user.username} Id`, user.id, true)
            .addField(`${user.username} Discriminator`, user.discriminator, true)
            //.addField('Roles Count', `${message.guild.roles.cache.size} \n**Roles List :**\n ${message.guild.roles.cache.map(e => e).join(',\n')}`, true)
            .addField('Account Created At : ', user.createdAt.toDateString(), true)
            .setFooter(`Requested By : ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
        message.channel.send(Embed)
    }
} 