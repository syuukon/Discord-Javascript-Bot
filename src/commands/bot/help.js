const { MessageEmbed} = require('discord.js');
const PREFIX = process.env.PREFIX;

module.exports.run = async(client, message, args) => {
    const embed = new MessageEmbed()
    .setColor('#e9f931')
    .setTitle(`Command list --- use prefix: ${PREFIX}`)
    .addField('General Bot Commands', 'summon / banish / clean / help')
    .addField('General Moderation Commands', 'mute / unmute / kick / ban')
    .addField('General Music Player Commands', 'play / pause / skip / stop / queue / nowplaying')
    .addField('Text to Speech Commands', 'say <message>')
    message.channel.send({ embed });
}