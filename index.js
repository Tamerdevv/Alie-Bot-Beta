const { Collection, Client, Discord, MessageEmbed, Message } = require('discord.js')
const fs = require('fs')
const client = new Client({
  disableEveryone: true
})
const { prefix, token, mongoURI } = require('./config.json')
const { connect } = require('mongoose');
connect(`${mongoURI}`, {
  useNewUrlParser: true
}).then(console.log(`Connected To Mongo Database ✔`))
const prefixSchema = require('./Schema/prefixSchema');
client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands/");
const { GiveawaysManager } = require('discord-giveaways')
const { Player } = require('discord-player');
const player = new Player(client);
client.player = player;
client.emotes = require('./Json/emojis.json');
fs.readdir('./events/player-events/', (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/player-events/${file}`);
    let eventName = file.split(".")[0];
    client.player.on(eventName, event.bind(null, client));
  });
});
module.exports = client;
["command"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});

client.login(token)