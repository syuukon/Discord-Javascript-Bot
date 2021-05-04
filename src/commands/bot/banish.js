module.exports.run = async(client, message, args) => {
    message.member.voice.channel.leave()
    message.channel.send(":wave:");
    return;
 }