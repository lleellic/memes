const TelegramBot = require('node-telegram-bot-api');
const token = '1097903013:AAHjon47mwC7BWolEwQTFZn2lA91iud0ge8';
const bot = new TelegramBot(token, {polling: true});

var startb = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{ text: 'Играть😜', callback_data: 'COOMMAND1' },{ text: 'Выйти☹️', callback_data: 'COMMAND2' }],
      [{ text: 'Старт🤪', callback_data: 'COMMAND3' },{ text: 'Стоп☹️', callback_data: 'COMMAND4' }]
    ]
  })
};
var gamebvalue = 0;
bot.onText(/Играть в было/i, (msg) => {
 bot.sendMessage(msg.from.id,'Набор игроков для игры: Было не было', startb);
gamebvalue = 1;
})
bot.on('callback_query', function (msg) {
            switch(callback_query) {
   case 'COOMMAND1': {
     bot.sendMessage(msg.chat.id,'<a href="tg://user?id='+ ctx.from.id+'">'+ctx.from.first_name+'</a> вступил(а) в игру', {parse_mode : "HTML"});
   };
   case 'COOMMAND2': {
     bot.sendMessage(msg.chat.id,'<a href="tg://user?id='+ ctx.from.id+'">'+ctx.from.first_name+'</a> вышел(ла) из игры', {parse_mode : "HTML"})
   };
   case 'COOMMAND3': {
     bot.sendMessage(msg.chat.id,'<a href="tg://user?id='+ ctx.from.id+'">'+ctx.from.first_name+'</a> голосуетза старт', {parse_mode : "HTML"})
   };
   case 'COOMMAND4': {
     bot.sendMessage(msg.chat.id,'<a href="tg://user?id='+ ctx.from.id+'">'+ctx.from.first_name+'</a> хочет отменить игру', {parse_mode : "HTML"})
   }
            }
            });
