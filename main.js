const TelegramBot = require('node-telegram-bot-api');
const token = '1097903013:AAHjon47mwC7BWolEwQTFZn2lA91iud0ge8';
var bot = new TelegramBot(token, {polling: true});

var offers = 0;
var i = 0;
var gamersb = new Array();
var gameridb = new Array();
var startb = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{ text: '😜Играть😜', callback_data: 'COOMMAND1' }, { text: '☹️Выйти☹️', callback_data: 'COMMAND2' }],
      [{ text: '🤪Старт🤪', callback_data: 'COMMAND3' }, { text: '☹️Стоп☹️', callback_data: 'COMMAND4' }]
    ]
  })
};
var gamebvalue = 0;
bot.onText(/Играть в было/i, (msg) => {
 bot.sendMessage(msg.chat.id,'Набор игроков для игры: Было не было', startb);
gamebvalue = 1;
})
bot.on('callback_query', function(msg) {
(msg.data == 'COOMMAND1') ? ( bot.answerCallbackQuery(msg.id, 'Вы вошли в игру', false), sendMessage(msg.chat.id,'Набор игроков для игры: Было не было', startb), console.log('6')):
(msg.data == 'COMMAND2') ? bot.answerCallbackQuery(msg.id, 'Вы вышли из игры', false):
(msg.data == 'COMMAND3') ? bot.answerCallbackQuery(msg.id, 'Вы проголосовали за старт', false):
(msg.data == 'COMMAND4') ? bot.answerCallbackQuery(msg.id, 'Вы проголосовали за закрытие игры', false): console.log('error5')


              
});


bot.on('polling_error', (error) => {
  console.log(error.code); 
});

function COOMMAND1(id, chatid, fromid, firstname){
 bot.answerCallbackQuery(id,'Вы вошли в игру', true);
 bot.sendMessage(chatid,'<a href="tg://user?id='+ fromid+'">'+firstname+'</a> вступил(а) в игру', {parse_mode : "HTML"});
 gameridb[i] = fromid;
 i++;
};



