module.exports = (client, error, message) => {
    const { MessageEmbed } = require('discord.js')


    switch (error) {
        case 'NotPlaying':

            let embed1 = new MessageEmbed()
                .setColor('RED')
                .setDescription(`${client.emotes.error} - I Can't Find Any Music In This Guild`)
                .setTimestamp()
                .setFooter(`${client.user.username}`, client.user.displayAvatarURL())

            message.channel.send(embed1);


            break;
        case 'NotConnected':


            let embed2 = new MessageEmbed()
                .setColor('RED')
                .setDescription(`${client.emotes.error} - You are not in a voice channel`)
                .setTimestamp()
                .setFooter(`${client.user.username}`, client.user.displayAvatarURL())

            message.channel.send(embed2);



            break;
        case 'UnableToJoin':

            let embed3 = new MessageEmbed()
                .setColor('RED')
                .setDescription(`${client.emotes.error} - - Missing  permissions !`)
                .setTimestamp()
                .setFooter(`${client.user.username}`, client.user.displayAvatarURL())

            message.channel.send(embed3)


            break;
        default:
            let embed4 = new MessageEmbed()
                .setColor('RED')
                .setDescription(`${client.emotes.error} - Error : ${error} !`)
                .setTimestamp()
                .setFooter(`${client.user.username}`, client.user.displayAvatarURL())

            message.channel.send(embed4)


    };

};
