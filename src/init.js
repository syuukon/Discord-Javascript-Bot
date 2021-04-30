require ('dotenv').config();

const { CommandoClient } = require('discord.js-commando');
const { Structures } = require('discord.js');
const path = require('path');

Structures.extend('Guild', Guild => {
  class MusicGuild extends Guild {
    constructor(client, data) {
      super(client, data);
      this.musicData = {
        queue: [],
        isPlaying: false,
        volume: 1,
        songDispatcher: null
      };
    }
  }
  return MusicGuild;
});
const client = new CommandoClient({
  commandPrefix: process.env.PREFIX,
  owner: '546487471479848970',
  unknownCommandResponse: false
});

client.registry
  .registerDefaultTypes()
  .registerGroups([
    ['music', 'Music Command Group']
  ])
  .registerDefaultGroups()
  .registerDefaultCommands()
  .registerCommandsIn(path.join(__dirname, 'commands'));

client.on('ready', () => {
    client.user.setActivity(" for =help", ({type: "WATCHING"}));
    console.log(`${client.user.tag} successfully logged in. Status message updated.`);    
});

client.login(process.env.DISCORD_TOKEN);