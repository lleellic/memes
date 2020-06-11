const TelegramBot = require('node-telegram-bot-api');
const token = '1097903013:AAHjon47mwC7BWolEwQTFZn2lA91iud0ge8';
var bot = new TelegramBot(token, {polling: true});
var infostartb = 0;
var infochatidb;
var offers = 0;
var i = 0;
var closegameb = 0;
var votestartb = 0;
var gamebvalue = 0;
var gamersb = 1;
var gameridb = [];
var startb = {
  reply_markup:{
    inline_keyboard: [
      [{ text: 'Играть😜', callback_data: 'COOMMAND1' }, { text: 'Выйти☹️', callback_data: 'COMMAND2' }],
      [{ text: 'Старт🤪', callback_data: 'COMMAND3' }, { text: 'Стоп☹️', callback_data: 'COMMAND4' }]
    ]
  }
};

bot.onText(/Играть в было/i, (msg) => {
 if(gamebvalue===0){
 gamersb = 1;
 bot.sendMessage(msg.chat.id,'Набор игроков для игры: было не было, всего: '+gamersb+' игрок(а/ов)', startb);
 infostartb = msg.message_id;
 infochatidb = msg.chat.id;
 console.log(msg);
 gamebvalue = 1;
 } else {
 bot.sendMessage(msg.chat.id,'Игра уже начата');
 }
})
bot.on('callback_query', function(msg) {
if (msg.data === 'COOMMAND1'){
  bot.answerCallbackQuery(msg.id, 'Вы вошли в игру', true);
  bot.sendMessage(msg.message.chat.id, '<a href="tg://user?id='+ msg.from.id+'">'+msg.from.first_name+'</a> вступил(а) в игру', {parse_mode : "HTML"});
  gamersb++;
//  bot.edited_message_text(infochatidb, infostartb, 'Набор игроков для игры: было не было, всего: '+gamersb+' игрок(а/ов)', startb)
  gsmeridb[i] = msg.from.id;
  i++;
}
if (msg.data === 'COMMAND2') {
  bot.answerCallbackQuery(msg.id, 'Вы вышли из игры', true);
  bot.sendMessage(msg.message.chat.id, '<a href="tg://user?id='+ msg.from.id+'">'+msg.from.first_name+'</a> вышел(ла) из игры', {parse_mode : "HTML"});
}
if (msg.data === 'COMMAND3') {
  bot.answerCallbackQuery(msg.id, 'Вы проголосовали за старт', false);
  votestartb++;
  bot.sendMessage(msg.message.chat.id, '<a href="tg://user?id='+ msg.from.id+'">'+msg.from.first_name+'</a> голосует за старт, всего: '+votestartb+' голос(а/ов)', {parse_mode : "HTML"});
}
if (msg.data === 'COMMAND4') {
  bot.answerCallbackQuery(msg.id, 'Вы проголосовали за закрытие игры (вы вышли из игры)', false);
  votestartb = 0;
  bot.sendMessage(msg.message.chat.id, '<a href="tg://user?id='+ msg.from.id+'">'+msg.from.first_name+'</a> голосует за закрытие', {parse_mode : "HTML"});
  closegameb++;
}
       
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

bot.onText(/[0-9]/, (msg) => {
  bot.deleteMessage(msg.chat.id, msg.text)
})



