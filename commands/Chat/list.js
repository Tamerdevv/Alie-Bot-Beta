const { Client, Message, MessageEmbed } = require('discord.js');
const db = require('../../Schema/Schema')
module.exports = {
    name: 'list',
    aliases: ['listchannel'],
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args) => {
        db.find({ Activated: true }, async (err, data) => {
            if (!data) return;
            const map = data.map(({ Guild, Channel, Author }) => {
                return `${client.channels.cache.get(Channel)} in ${client.guilds.cache.get(Guild).name} Added By ${client.users.cache.get(Author)}`
            }).join('\n');
            const embed = new MessageEmbed()
                .setTitle('List of InterNational Chat Channels')
                .setDescription(map)
                .setColor('RANDOM')
            message.channel.send(embed)

        })

    }
}