const client = require('../index');
const { MessageEmbed } = require('discord.js');
const db = require('../Schema/Schema');
client.on('message', async (message) => {
    if (message.author.bot) return;
    db.findOne({ Channel: message.channel.id, Activated: true }, async (err, data) => {
        if (data) {

            db.find({ Activated: true }, async (err, data) => {
                data.map(async ({ Channel }) => {
                    if (Channel === message.channel.id) return;
                    await client.channels.cache.get(Channel).send(
                        new MessageEmbed()
                            .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
                            .setDescription(`**${message.content}**`)
                            .setFooter(message.guild.name, message.guild.iconURL({ dynamic: true }))
                            .setColor('RANDOM')
                            .setTimestamp()

                    ).catch(err => {
                        console.error(err)
                    })
                })
            }).catch(err => {
                console.error(err)
            })
        }
    })
});