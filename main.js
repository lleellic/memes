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

bot.on(/Играть в было/i, (msg) => {
 bot.sendMessage(msg.from.id,'Набор игроков для игры: Было не было', startb);
})
