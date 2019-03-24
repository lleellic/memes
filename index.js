
  
var TelegramBot = require('node-telegram-bot-api');
var TelegramBot = require('node-telegram-bot-api');

// Устанавливаем токен, который выдавал нам бот.
var token = '783491645:AAGp_rUoPcyRDfgfGZzsXIzJ8HtXbpJThyk';
// Включить опрос сервера
var bot = new TelegramBot(token, {polling: true});

// Написать мне ... (/echo Hello World! - пришлет сообщение с этим приветствием.)
bot.onText(//echo (.+)/, function (msg, match) {
    var fromId = msg.from.id;
    var resp = match[1];
    bot.sendMessage(fromId, resp);
});

// Простая команда без параметров.
bot.on('message', function (msg) {
    var chatId = msg.chat.id;
    // Фотография может быть: путь к файлу, поток(stream) или параметр file_id
    var photo = 'http://pngimg.com/uploads/cat/cat_PNG50550.png';
    bot.sendPhoto(chatId, photo, {caption: 'Милые котята'});
});
