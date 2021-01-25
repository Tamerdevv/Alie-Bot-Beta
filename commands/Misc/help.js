const { Message, Client, MessageEmbed } = require('discord.js')
const { readdirSync } = require("fs");
const { prefix } = require('../../config.json')
/**
     * 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
module.exports = {
    name: "help",
    aliases: ['helplist'],
    description: "Display all available bot commands.",
    run: async (client, message, args) => {


        const roleColor =
            message.guild.me.displayHexColor === "#000000"
                ? "#ffffff"
                : message.guild.me.displayHexColor;

        if (!args[0]) {
            let categories = [];

            readdirSync("./commands/").forEach((dir) => {
                const commands = readdirSync(`./commands/${dir}/`).filter((file) =>
                    file.endsWith(".js")
                );

                const cmds = commands.map((command) => {
                    let file = require(`../../commands/${dir}/${command}`);

                    if (!file.name) return "No Name";

                    let name = file.name.replace(".js", ", ");

                    return `\`${name}\``;
                });

                let data = new Object();

                data = {
                    name: dir.toUpperCase(),
                    value: cmds.length === 0 ? "In progress." : cmds.join(" "),
                };

                categories.push(data);
            });

            const embed = new MessageEmbed()
                .setTitle(`📬 Bot Commands.`)
                .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
                .addFields(categories)
                .setDescription(
                    `<@${message.author.id}>- If you want more info about a specific command you can type : ${prefix}help <CmdName>`
                )
                .setFooter(
                    `Requested by ${message.author.tag}`,
                    message.author.displayAvatarURL({ dynamic: true })
                )
                .setTimestamp()
                .setColor(roleColor);
            return message.channel.send(embed);
        } else {
            const command =
                client.commands.get(args[0]) ||
                client.commands.find(
                    (c) => c.aliases && c.aliases.includes(args[0])
                );

            if (!command) {
                const embed = new MessageEmbed()
                    .setDescription(`<@${message.author.id}> **This command Doesn't exist, You can type ${prefix}help to see all available commands.**`)
                    .setColor("FF0000");
                return message.channel.send(embed);
            }

            const embed = new MessageEmbed()
                .setTitle("Command Info:")
                .addField(
                    "Command:",
                    command.name ? `\`${command.name}\`` : "No name"
                )
                .addField(
                    "Aliases:",
                    command.aliases
                        ? `\`${command.aliases.join("` `,")}\``
                        : "No Aliases."
                )
                .addField(
                    "Usage:",
                    command.usage
                        ? `\`${prefix}${command.name} ${command.usage}\``
                        : `\`${prefix}${command.name}\``
                )
                .addField(
                    "Description:",
                    command.description
                        ? command.description
                        : "No description ."
                )
                .setFooter(
                    `Requested by ${message.author.tag}`,
                    message.author.displayAvatarURL({ dynamic: true })
                )
                .setTimestamp()
                .setColor(roleColor);
            return message.channel.send(embed);
        }
    },
};