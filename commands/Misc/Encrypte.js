const { Message, Client, MessageEmbed } = require('discord.js')
const { prefix } = require('../../config.json')
module.exports = {
    name: "encrypte",
    aliases: ["en"],
    description: 'Encrypte Your Code',
    usage: `${prefix}encrypte console.log('Text')`,
    /**
     * 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args) => {
        var JavaScriptObfuscator = require('javascript-obfuscator');
        let args1 = message.content.split(" ").slice(1).join(' ')

        var obfuscationResult = JavaScriptObfuscator.obfuscate(
            `
        (function(){
            ${args1}
        })();
    `,
            {
                compact: false,
                controlFlowFlattening: true,
                controlFlowFlatteningThreshold: 1,
                numbersToExpressions: true,
                simplify: true,
                shuffleStringArray: true,
                splitStrings: true,
                stringArrayThreshold: 1
            }
        );

        message.author.send(`\`\`\`js\n${obfuscationResult.getObfuscatedCode()}\`\`\``);

    }
}