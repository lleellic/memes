const TelegramBot = require('node-telegram-bot-api');
const token = '1097903013:AAHjon47mwC7BWolEwQTFZn2lA91iud0ge8';
const bot = new TelegramBot(token, {polling: true});

var startb = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{ text: 'Играть😜', callback_data: 'COOMMAND1' }, { text: 'Выйти☹️', callback_data: 'COMMAND2' }],
      [{ text: 'Старт🤪', callback_data: 'COMMAND3' }, { text: 'Стоп☹️', callback_data: 'COMMAND4' }]
    ]
  })
};
var gamebvalue = 0;
bot.onText(/Играть в было/i, (msg) => {
 bot.sendMessage(msg.chat.id,'Набор игроков для игры: Было не было', startb);
gamebvalue = 1;
})
bot.on('callback_query', function (msg) {
  var votestartb = 0;
            switch(msg.data) {
   case 'COOMMAND1': {
     bot.answerCallbackQuery(msg.id,'Вы вошли в игру', true);
   };
                break;
   case 'COMMAND2': {
     bot.answerCallbackQuery(msg.id,'Вы вышли из игры', true);
   };
                break;
   case 'COMMAND3': {
     votestart++;
     bot.sendMessage(msg.chat.id,votestartb+' голоса(ов) за старт');
   };
                break;
   case 'COMMAND4': {
     otestart--;
     bot.sendMessage(msg.chat.id,votestartb+' голоса(ов) за старт');
   };
                break;
              default: console.log('error'); break;
            }
            });
