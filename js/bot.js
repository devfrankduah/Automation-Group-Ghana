var token = '5004544005:AAHZBRxPEtAQAuq8G5OgVsSXMUTrCfe1BjU';

const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot(token, { polling: true });

// Matches "/echo [whatever]"
bot.onText(/\/echo(.+)/, (msg, match) => {

    // The 'msg' is the received Message from Telegram
    // and 'match' is the result of executing the regexp 
    // above on the text content of the message

    const chatId = msg.chat.id;

    // The captured "whatever"
    const resp = match[1];

    // send back the matched "whatever" to the chat
    bot.sendMessage(chatId, resp);

});