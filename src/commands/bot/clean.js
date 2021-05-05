module.exports.run = async(client, message, args) => {
    if (message.channel.type == 'text') {
        message.channel.messages.fetch().then(messages => {
            const botMessages = messages.filter(message => message.author.bot);
            message.channel.bulkDelete(botMessages);
            messagesDeleted = botMessages.array().length; // number of messages deleted
    
            // Logging the number of messages deleted on both the channel and console.
            message.channel.send("Total messages deleted: " + messagesDeleted).then(msg => {
                msg.delete({ timeout: 5000 })
              })
              .catch(console.error);
            console.log('Total messages deleted: ' + messagesDeleted)
        }).catch(err => {
            console.log('Error while bulk deleting bot messages');
            console.log(err);
        });
    }
}