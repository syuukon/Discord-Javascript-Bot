module.exports.run = async(client, message, args) => {
    message.member.voice.channel.join().then(connection => connection.voice.setSelfDeaf(true));
        message.reply("I answer your call.");
        return;
 }