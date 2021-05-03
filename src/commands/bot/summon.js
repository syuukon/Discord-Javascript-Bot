const discord = require('discord.js');

module.exports.run = async(client, message, args) => {
    message.member.voice.channel.join().then(connection => {discord.VoiceConnection.setSpeaking(2);
        connection.voice.setSelfDeaf(true);
        message.reply("I answer your call.");
        return;
    })
};