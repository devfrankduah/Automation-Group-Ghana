// var token = '5004544005:AAHZBRxPEtAQAuq8G5OgVsSXMUTrCfe1BjU';

// const TelegramBot = require('node-telegram-bot-api');

// const bot = new TelegramBot(token, { polling: true });

// // Matches "/echo [whatever]"
// bot.onText(/\/echo(.+)/, (msg, match) => {

//     // The 'msg' is the received Message from Telegram
//     // and 'match' is the result of executing the regexp 
//     // above on the text content of the message

//     const chatId = msg.chat.id;

//     // The captured "whatever"
//     const resp = match[1];

//     // send back the matched "whatever" to the chat
//     bot.sendMessage(chatId, resp);

// });

// var telegramUrl = "https://api.telegram.org/bot" + token;
// //connects bot and telegram chat
// var webAppUrl = "https://docs.google.com/spreadsheets/d/1fS5kRFB8XGw58oyKiitZ0EmSEkpXXJ8KD2H38TbgqC4/edit?usp=sharing";
// var ssId = "0";



// function getMe() //gets the bot info
// {
//     var url = telegramUrl + "/getme";
//     var response = UrlFetchApp.fetch(url);
//     Logger.log(response.getContentText());
// }

// function setWebhook() //links url of project 
// {
//     var url = telegramUrl + "/setWebhook?url=" + webAppUrl;
//     var response = UrlFetchApp.fetch(url);
//     Logger.log(response.getContentText());
// }

// function sendText(id, text) //sends confirmation text
// {
//     var url = telegramUrl + "/sendMessage?chat_id=" + id + "&text=" + text;
//     var response = UrlFetchApp.fetch(url);
//     Logger.log(response.getContentText());
// }


// function doPost(e) //
// {
//     var data = JSON.parse(e.postData.contents);
//     var str = data.message.text;
//     var id = data.message.chat.id;
//     var name = data.message.chat.first_name + " " + data.message.chat.last_name;

//     SpreadsheetApp.openById(ssId).getSheets()[0].appendRow([new
//         Date(), id, name, str
//     ]);
// }

const TelegramBot = require('node-telegram-bot-api')

const token = '5004544005:AAHZBRxPEtAQAuq8G5OgVsSXMUTrCfe1BjU'

const bot = new TelegramBot(token, { polling: true })
bot.onText(/\/echo (.+)/, (msg, match) => {

    const chatId = msg.chat.id
    const resp = match[1]

    bot.sendMessage(chatId, resp)
})

let users = []

bot.onText(/\/register/, (msg, match) => {
    const chatId = msg.chat.id
    users.push(chatId)
    console.log('User registered')
    console.log(users)
    bot.sendMessage(chatId, 'You have been successfully registered.')
})

// setInterval(function() {
//     if (users.length > 0) {
//         for (let i = 0; i < users.length; i++) {
//             bot.sendMessage(users[i], 'Is this annoying?')
//         }
//     } else {
//         console.log('no user registered')
//     }
// }, 1000)
bot.on('message', (msg) => {
    const chatId = msg.chat.id
    if (msg.text == 'dog') {
        bot.sendMessage(chatId, "You sent 'dog'")
    }
})