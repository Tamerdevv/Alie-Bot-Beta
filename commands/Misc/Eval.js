const { Message, Client, MessageEmbed } = require('discord.js')
const { prefix } = require('../../config.json')
module.exports = {
    name: "eval",
    aliases: ["ev"],
    description: 'Run A Code In Discord.js Application',
    usage: `${prefix}eval message.author.id`,
    /**
     * 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args) => {

        let codein = args.slice(0).join(" ")
        if (!codein.toLowerCase().includes("token") && !codein.toLowerCase().includes("config")) {
            try {
                let code = eval(codein)

                if (codein.length < 1 && !codein) return message.channel.send(`min. \n\`\`\`javascript\nundefined\n\`\`\``)
                if (typeof code !== "string")
                    code = require("util").inspect(code, { depth: 0 });

                message.channel.send(`min. \n\`\`\`javascript\n${code.length > 1024 ? "Character Over!" : code}\n\`\`\``)
            } catch (e) {
                message.channel.send(`min. \n\`\`\`javascript\n${e.length > 1024 ? "Character Over!" : e}\n\`\`\``)
            }
        } else {
            message.channel.send(`min. \n\`\`\`javascript\nundefined token\n\`\`\``) // Prevent take token :)
        }





    }
}