const discordTTS=require("discord-tts");

module.exports.run = async(client, message, args) => {
    if(!message.member.voice.channel) {
       message.channel.send("You must be in a voice channel to use this command.")
       return;
    } else {
    message.member.voice.channel.join().then(connection => {connection.voice.setSelfDeaf(true)});
        const broadcast = client.voice.createBroadcast();
        var channelID=message.member.voice.channelID;
        var channel=client.channels.cache.get(channelID);
        channel.join().then(connection => {
            broadcast.play(discordTTS.getVoiceStream(message.content.substr(5)));
            const dispatcher=connection.play(broadcast);
            return;
        });
    }
}