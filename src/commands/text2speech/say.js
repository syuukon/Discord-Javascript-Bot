const discordTTS=require("discord-tts");

module.exports.run = async(client, message, args) => {
    const broadcast = client.voice.createBroadcast();
    var channelId=message.member.voice.channelID;
    var channel=client.channels.cache.get(channelId);
    channel.join().then(connection => {
        broadcast.play(discordTTS.getVoiceStream(message.content.substr(5)));
        const dispatcher=connection.play(broadcast);
    });
}