const TelegramBot = require('node-telegram-bot-api');
const token = '1097903013:AAHjon47mwC7BWolEwQTFZn2lA91iud0ge8';
var bot = new TelegramBot(token, {polling: true});
var offers = 0;
var i = 0;
var closegameb = 0;
var votestartb = 0;
var gamebvalue = 0;
var gamersb = 1;
var gameridb = new Array();
var leaversb = 0;
var idgameb;
var startb = {
  reply_markup:{
    inline_keyboard: [
      [{ text: 'Играть😜', callback_data: 'COOMMAND1' }, { text: 'Выйти☹️', callback_data: 'COMMAND2' }],
      [{ text: 'Старт🤪', callback_data: 'COMMAND3' }, { text: 'Стоп☹️', callback_data: 'COMMAND4' }],
      [{ text: 'Участников🤔', callback_data: 'COMMAND5' }, { text: 'Голоса за старт🤔', callback_data: 'COMMAND6' }]
    ]
  }
};

bot.onText(/Играть в было/i, (msg) => {
 if(gamebvalue===0){
 gamersb = 0;
 bot.sendMessage(msg.chat.id,'Набор игроков для игры: было не было', startb);
 gamebvalue = 1;
 } else {
 bot.sendMessage(msg.chat.id,'Игра уже начата');
 }
})

bot.on('callback_query', function(msg) {
  console.log(msg);
if (msg.data === 'COOMMAND1') {
 switch (msg.from.id) {
   case gameridb[0]:bot.sendMessage(msg.message.chat.id, '<a href="tg://user?id='+ msg.from.id+'">'+msg.from.first_name+'</a>, ты уже в игре', {parse_mode : "HTML"}); break;
   case gameridb[1]:bot.sendMessage(msg.message.chat.id, '<a href="tg://user?id='+ msg.from.id+'">'+msg.from.first_name+'</a>, ты уже в игре', {parse_mode : "HTML"}); break;
   case gameridb[2]:bot.sendMessage(msg.message.chat.id, '<a href="tg://user?id='+ msg.from.id+'">'+msg.from.first_name+'</a>, ты уже в игре', {parse_mode : "HTML"}); break;
   case gameridb[3]:bot.sendMessage(msg.message.chat.id, '<a href="tg://user?id='+ msg.from.id+'">'+msg.from.first_name+'</a>, ты уже в игре', {parse_mode : "HTML"}); break;
   case gameridb[4]:bot.sendMessage(msg.message.chat.id, '<a href="tg://user?id='+ msg.from.id+'">'+msg.from.first_name+'</a>, ты уже в игре', {parse_mode : "HTML"}); break;
   case gameridb[5]:bot.sendMessage(msg.message.chat.id, '<a href="tg://user?id='+ msg.from.id+'">'+msg.from.first_name+'</a>, ты уже в игре', {parse_mode : "HTML"}); break;
   case gameridb[6]:bot.sendMessage(msg.message.chat.id, '<a href="tg://user?id='+ msg.from.id+'">'+msg.from.first_name+'</a>, ты уже в игре', {parse_mode : "HTML"}); break;
   case gameridb[7]:bot.sendMessage(msg.message.chat.id, '<a href="tg://user?id='+ msg.from.id+'">'+msg.from.first_name+'</a>, ты уже в игре', {parse_mode : "HTML"}); break;
   case gameridb[8]:bot.sendMessage(msg.message.chat.id, '<a href="tg://user?id='+ msg.from.id+'">'+msg.from.first_name+'</a>, ты уже в игре', {parse_mode : "HTML"}); break;
   case gameridb[9]:bot.sendMessage(msg.message.chat.id, '<a href="tg://user?id='+ msg.from.id+'">'+msg.from.first_name+'</a>, ты уже в игре', {parse_mode : "HTML"}); break;
   case gameridb[10]:bot.sendMessage(msg.message.chat.id, '<a href="tg://user?id='+ msg.from.id+'">'+msg.from.first_name+'</a>, ты уже в игре', {parse_mode : "HTML"}); break;
   case gameridb[11]:bot.sendMessage(msg.message.chat.id, '<a href="tg://user?id='+ msg.from.id+'">'+msg.from.first_name+'</a>, ты уже в игре', {parse_mode : "HTML"}); break;
   default: {
  gameridb[i] = msg.from.id;
  gamersb++;
  bot.sendMessage(msg.message.chat.id, '<a href="tg://user?id='+ msg.from.id+'">'+msg.from.first_name+'</a> вступил(а) в игру, всего: '+gamersb+' игрок(а/ов)', {parse_mode : "HTML"});
  bot.answerCallbackQuery(msg.id, 'Вы вошли в игру', true);
  i++;
   }; break;
 }
}
  
if (msg.data === 'COMMAND2') {
  switch (msg.from.id) {
   case gameridb[0]:{
    bot.answerCallbackQuery(msg.id, 'Вы вышли из игры', true);
    bot.sendMessage(msg.message.chat.id, '<a href="tg://user?id='+ msg.from.id+'">'+msg.from.first_name+'</a> вышел(ла) из игры', {parse_mode : "HTML"});
    gameridb[0] = gameridb[gameridb.lenght];
    leaversb++;
    gamersb--;
   }; break;
   case gameridb[1]:{
    bot.answerCallbackQuery(msg.id, 'Вы вышли из игры', true);
    bot.sendMessage(msg.message.chat.id, '<a href="tg://user?id='+ msg.from.id+'">'+msg.from.first_name+'</a> вышел(ла) из игры', {parse_mode : "HTML"});
    gameridb[0] = gameridb[gameridb.lenght];
    leaversb++;
    gamersb--;
   }; break;
   case gameridb[2]:{
    bot.answerCallbackQuery(msg.id, 'Вы вышли из игры', true);
    bot.sendMessage(msg.message.chat.id, '<a href="tg://user?id='+ msg.from.id+'">'+msg.from.first_name+'</a> вышел(ла) из игры', {parse_mode : "HTML"});
    gameridb[0] = gameridb[gameridb.lenght];
    leaversb++;
    gamersb--;
   }; break;
   case gameridb[3]:{
    bot.answerCallbackQuery(msg.id, 'Вы вышли из игры', true);
    bot.sendMessage(msg.message.chat.id, '<a href="tg://user?id='+ msg.from.id+'">'+msg.from.first_name+'</a> вышел(ла) из игры', {parse_mode : "HTML"});
    gameridb[0] = gameridb[gameridb.lenght];
    leaversb++;
    gamersb--;
   }; break;
   case gameridb[4]:{
    bot.answerCallbackQuery(msg.id, 'Вы вышли из игры', true);
    bot.sendMessage(msg.message.chat.id, '<a href="tg://user?id='+ msg.from.id+'">'+msg.from.first_name+'</a> вышел(ла) из игры', {parse_mode : "HTML"});
    gameridb[0] = gameridb[gameridb.lenght];
    leaversb++;
    gamersb--;
   }; break;
   case gameridb[5]:{
    bot.answerCallbackQuery(msg.id, 'Вы вышли из игры', true);
    bot.sendMessage(msg.message.chat.id, '<a href="tg://user?id='+ msg.from.id+'">'+msg.from.first_name+'</a> вышел(ла) из игры', {parse_mode : "HTML"});
    gameridb[0] = gameridb[gameridb.lenght];
    leaversb++;
    gamersb--;
   }; break;
   case gameridb[6]:{
    bot.answerCallbackQuery(msg.id, 'Вы вышли из игры', true);
    bot.sendMessage(msg.message.chat.id, '<a href="tg://user?id='+ msg.from.id+'">'+msg.from.first_name+'</a> вышел(ла) из игры', {parse_mode : "HTML"});
    gameridb[0] = gameridb[gameridb.lenght];
    leaversb++;
    gamersb--;
   }; break;
   case gameridb[7]:{
    bot.answerCallbackQuery(msg.id, 'Вы вышли из игры', true);
    bot.sendMessage(msg.message.chat.id, '<a href="tg://user?id='+ msg.from.id+'">'+msg.from.first_name+'</a> вышел(ла) из игры', {parse_mode : "HTML"});
    gameridb[0] = gameridb[gameridb.lenght];
    leaversb++;
    gamersb--;
   }; break;
   case gameridb[8]:{
    bot.answerCallbackQuery(msg.id, 'Вы вышли из игры', true);
    bot.sendMessage(msg.message.chat.id, '<a href="tg://user?id='+ msg.from.id+'">'+msg.from.first_name+'</a> вышел(ла) из игры', {parse_mode : "HTML"});
    gameridb[0] = gameridb[gameridb.lenght];
    leaversb++;
    gamersb--;
   }; break;
   case gameridb[9]:{
    bot.answerCallbackQuery(msg.id, 'Вы вышли из игры', true);
    bot.sendMessage(msg.message.chat.id, '<a href="tg://user?id='+ msg.from.id+'">'+msg.from.first_name+'</a> вышел(ла) из игры', {parse_mode : "HTML"});
    gameridb[0] = gameridb[gameridb.lenght];
    leaversb++;
   }; break;
   case gameridb[10]:{
    bot.answerCallbackQuery(msg.id, 'Вы вышли из игры', true);
    bot.sendMessage(msg.message.chat.id, '<a href="tg://user?id='+ msg.from.id+'">'+msg.from.first_name+'</a> вышел(ла) из игры', {parse_mode : "HTML"});
    gameridb[0] = gameridb[gameridb.lenght];
    leaversb++;
    gamersb--;
   }; break;
   case gameridb[11]:{
    bot.answerCallbackQuery(msg.id, 'Вы вышли из игры', true);
    bot.sendMessage(msg.message.chat.id, '<a href="tg://user?id='+ msg.from.id+'">'+msg.from.first_name+'</a> вышел(ла) из игры', {parse_mode : "HTML"});
    gameridb[0] = gameridb[gameridb.lenght];
    leaversb++;
    gamersb--;
   }; break;
    default: bot.sendMessage(msg.message.chat.id, '<a href="tg://user?id='+ msg.from.id+'">'+msg.from.first_name+'</a>, ты не состоишь в игре', {parse_mode : "HTML"}); break;
}}
  
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
 if (msg.data === 'COMMAND5') {
  bot.sendMessage(msg.message.chat.id, 'Участников: '+gamersb, {parse_mode : "HTML"});
}
if (msg.data === 'COMMAND6') {
  bot.sendMessage(msg.message.chat.id, 'Голосов за старт: '+votestartb);
}
  if (votestartb > 1 && votestartb == gamersb) gameWAS()
  if (stopgameb > 1 && stopgameb == gamersb) bot.deleteMessage(msg.chat.id, idgameb)
});


bot.on('polling_error', (error) => {
  console.log(error.code); 
});

function gameWAS() {

}

bot.onText(/[0-9]/, (msg) => {
  if (msg.from.id == 684519513) bot.deleteMessage(msg.chat.id, msg.text)
})



