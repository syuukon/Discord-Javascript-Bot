module.exports.run = async(client, message, args) => {
    if (message.channel.type == 'text') {
        message.channel.messages.fetch().then(messages => {
            const botMessages = messages.filter(message => message.author.id === '832005657502023711');
            message.channel.bulkDelete(botMessages);
            messagesDeleted = botMessages.array().length; // number of messages deleted
    
            // Logging the number of messages deleted on both the channel and console.
            message.channel.send('Messages deleted: ' + messagesDeleted).then(message => {
                message.delete({ timeout: 5000 })
              })
              .catch(console.error);
            console.log('Messages deleted: ' + messagesDeleted)
        }).catch(err => {
            console.log('Error deleting bot messages');
            console.log(err);
        });
    }
}