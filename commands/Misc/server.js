const { Message, Client, MessageEmbed } = require('discord.js')
const moment = require('moment')
const { prefix } = require('../../config.json')
module.exports = {
    name: "server",
    aliases: ["server-info"],
    description: 'Shows Some Inforamtion About The Guild',
    usage: `${prefix}server`,
    /**
     * 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args) => {
        const verifycation = message.guild.verificationLevel;
        const verificationLevel = ['None', 'Low', 'Meduim', "High", "Highest"];
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
            .setTitle(`${message.guild.name} Info`)
            .setThumbnail(`${message.guild.iconURL({ dynamic: true, format: 'gif' || 'png' })}`)
            .addField(`${message.guild.name} Owner`, message.guild.owner, true)
            .addField(`Guild Region`, message.guild.region, true)
            .addField(`${message.guild.name} Id`, message.guild.id, true)
            .addField(`${message.guild.name} Members`, message.guild.memberCount, true)
            .addField(`${message.guild.name} Bots`, message.guild.members.cache.filter(n => n.user.bot === true).size, true)
            .addField(`Created Temp`, message.guild.createdAt.toDateString(), true)
            .addField('Roles Count', `${message.guild.roles.cache.size} \n**Roles List :**\n ${message.guild.roles.cache.map(e => e).join(',\n')}`, true)
            .addField('Emojis Count', `${message.guild.emojis.cache.size} \n**Emojis List:**\n${message.guild.emojis.cache.map(e => e).join(",")}`)
            .setFooter(`Requested By : ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
        message.channel.send(Embed)
    }
}