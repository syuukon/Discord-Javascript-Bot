require ('dotenv').config();
const path = require('path');
const fs = require('fs').promises;
const discord = require('discord.js');
const client = new discord.Client();
const PREFIX = process.env.PREFIX;

client.login(process.env.DISCORD_TOKEN);
client.commands = new Map();

client.once('ready', () => {
  client.user.setActivity(" for =help", ({type: "WATCHING"}));
  console.log(`${client.user.tag} successfully logged in. Status message updated.`);    
});

client.on('message', async function(message) {
  if(message.author.bot) return;
  if(!message.content.startsWith(PREFIX)) return;
  let cmdArgs = message.content.substring(message.content.indexOf(PREFIX)+1).split(new RegExp(/\s+/));
  let cmdName = cmdArgs.shift();

  if(client.commands.get(cmdName)) {
    client.commands.get(cmdName).run(client, message, cmdArgs);
  } else {
    console.log("Command doesn't exist.");
  }
});

(async function registerCommands(dir = 'commands') {
  let files = await fs.readdir(path.join(__dirname, dir));
  for(let file of files) {
    let stat = await fs.lstat(path.join(__dirname, dir, file));
    if(stat.isDirectory())
      registerCommands(path.join(dir, file));
    else {
      if(file.endsWith(".js")) {
        let cmdName = file.substring(0, file.indexOf(".js"));
        let cmdModule = require(path.join(__dirname, dir, file));
        client.commands.set(cmdName, cmdModule);
      }
    }
  }
})()