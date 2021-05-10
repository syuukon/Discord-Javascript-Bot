const { MessageEmbed} = require('discord.js');
const PREFIX = process.env.PREFIX;

module.exports.run = async(client, message, args) => {
    const embed = new MessageEmbed()
    .setColor('#98ff98')
    .setTitle(`Prefix: ${PREFIX}`)
    .addField('General Bot Commands', 'summon | banish | clean | help')
    .addField('General Moderation Commands', 'mute | unmute | kick | ban')
    .addField('General Music Player Commands', 'play | pause | skip | stop | queue | nowplaying')
    .addField('Text to Speech Commands', 'say <message>')
    .setFooter('https://github.com/syuukon/Discord-Javascript-Bot')
    message.channel.send({ embed });
}