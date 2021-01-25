const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'clear-queue',
    aliases: ['c-queue'],
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args) => {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - You're not in a voice channel !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - No music currently playing !`);

        client.player.clearQueue(message);

        message.channel.send(`${client.emotes.success} - The queue has just been **removed** !`);


    }
}