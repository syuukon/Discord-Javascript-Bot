require ('dotenv').config();
const { CommandoClient } = require('discord.js-commando');
const { Structures } = require('discord.js');
const path = require('path');
const discord = require("discord.js");
const discordTTS=require("discord-tts");
const { PREFIX, DISCORD_TOKEN } = require ('dotenv').config();

const client = new discord.Client();

client.on("ready",()=>{
    console.log("Online");
});

client.on("message",msg=>{
    const commandBody = msg.content.slice(PREFIX.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();

    if (msg.author.bot) return;
    if(!msg.member.voice.channel) {return}

    if (command === 'summon') {
        msg.member.voice.channel.join().then(connection => {connection.voice.setSelfDeaf(true)});;
        return;
    } else if(command === 'say'){
        const broadcast = client.voice.createBroadcast();
        var channelId=msg.member.voice.channelID;
        var channel=client.channels.cache.get(channelId);
        channel.join().then(connection => {
            broadcast.play(discordTTS.getVoiceStream(msg.content.substr(5)));
            const dispatcher=connection.play(broadcast);
            return;
        });
    }
});