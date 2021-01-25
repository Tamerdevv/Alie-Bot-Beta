const client = require('../index')
const { prefix } = require('../config.json')
client.on('ready', () => {
    client.user.setActivity(`${prefix}help`)
    const clientDetails = {
        guilds: client.guilds.cache.size,
        users: client.users.cache.size,
        channels: client.channels.cache.size
    }
    console.log(`${client.user.username} ✅`)
    const express = require('express')
    const app = express();
    const port = 3000 | 3001
    app.get('/', (req, res) => {
        res.status(200).send('Main Page')
    })
    app.get('/info', (req, res) => {
        res.status(200).send(clientDetails)
    })
    app.listen(port)
})