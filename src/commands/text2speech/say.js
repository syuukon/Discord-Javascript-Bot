const discordTTS=require("discord-tts");

module.exports.run = async(client, message, args) => {
    const broadcast = client.voice.createBroadcast();
    var channelId=message.member.voice.channelID;
    var channel=client.channels.cache.get(channelId);
    if (message.content.length > 200) {
        return message.channel.send('Message too long: ' + message.content.length + ' - please try again with less characters. (200 limit)')
    }
    channel.join().then(connection => {
        broadcast.play(discordTTS.getVoiceStream(message.content.substr(5)));
        const dispatcher=connection.play(broadcast);
    });
}