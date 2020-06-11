const TelegramBot = require('node-telegram-bot-api');
const token = '1097903013:AAHjon47mwC7BWolEwQTFZn2lA91iud0ge8';
var bot = new TelegramBot(token, {polling: true});
var offers = 0;
var i = 0;
var gamebvalue = 0;
var votestartb = 0;
var gamersb = 0;
var gameridb = [];
var leaversb = 0;
var startb = {
  reply_markup:{
    inline_keyboard: [
      [{ text: 'Играть😜', callback_data: 'COOMMAND1' }, { text: 'Выйти☹️', callback_data: 'COMMAND2' }]
    ]
  }
};

bot.onText(/Играть в было/i, (msg) => {
 if(gamebvalue===0){
 bot.sendMessage(msg.chat.id,'Набор игроков для игры: было не было', startb);
 gamebvalue = 1;
 } else {
 bot.sendMessage(msg.chat.id,'Игра уже начата');
 }
})

bot.on('callback_query', function(msg) {
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
    gamerid.pop();
    leaversb++;
    gamersb--;
   }; break;
   case gameridb[1]:{
    bot.answerCallbackQuery(msg.id, 'Вы вышли из игры', true);
    bot.sendMessage(msg.message.chat.id, '<a href="tg://user?id='+ msg.from.id+'">'+msg.from.first_name+'</a> вышел(ла) из игры', {parse_mode : "HTML"});
    gameridb[0] = gameridb[gameridb.lenght];
     gamerid.pop();
    leaversb++;
    gamersb--;
   }; break;
   case gameridb[2]:{
    bot.answerCallbackQuery(msg.id, 'Вы вышли из игры', true);
    bot.sendMessage(msg.message.chat.id, '<a href="tg://user?id='+ msg.from.id+'">'+msg.from.first_name+'</a> вышел(ла) из игры', {parse_mode : "HTML"});
    gameridb[0] = gameridb[gameridb.lenght];
     gamerid.pop();
    leaversb++;
    gamersb--;
   }; break;
   case gameridb[3]:{
    bot.answerCallbackQuery(msg.id, 'Вы вышли из игры', true);
    bot.sendMessage(msg.message.chat.id, '<a href="tg://user?id='+ msg.from.id+'">'+msg.from.first_name+'</a> вышел(ла) из игры', {parse_mode : "HTML"});
    gameridb[0] = gameridb[gameridb.lenght];
     gamerid.pop();
    leaversb++;
    gamersb--;
   }; break;
   case gameridb[4]:{
    bot.answerCallbackQuery(msg.id, 'Вы вышли из игры', true);
    bot.sendMessage(msg.message.chat.id, '<a href="tg://user?id='+ msg.from.id+'">'+msg.from.first_name+'</a> вышел(ла) из игры', {parse_mode : "HTML"});
    gameridb[0] = gameridb[gameridb.lenght];
     gamerid.pop();
    leaversb++;
    gamersb--;
   }; break;
   case gameridb[5]:{
    bot.answerCallbackQuery(msg.id, 'Вы вышли из игры', true);
    bot.sendMessage(msg.message.chat.id, '<a href="tg://user?id='+ msg.from.id+'">'+msg.from.first_name+'</a> вышел(ла) из игры', {parse_mode : "HTML"});
    gameridb[0] = gameridb[gameridb.lenght];
     gamerid.pop();
    leaversb++;
    gamersb--;
   }; break;
   case gameridb[6]:{
    bot.answerCallbackQuery(msg.id, 'Вы вышли из игры', true);
    bot.sendMessage(msg.message.chat.id, '<a href="tg://user?id='+ msg.from.id+'">'+msg.from.first_name+'</a> вышел(ла) из игры', {parse_mode : "HTML"});
    gameridb[0] = gameridb[gameridb.lenght];
     gamerid.pop();
    leaversb++;
    gamersb--;
   }; break;
   case gameridb[7]:{
    bot.answerCallbackQuery(msg.id, 'Вы вышли из игры', true);
    bot.sendMessage(msg.message.chat.id, '<a href="tg://user?id='+ msg.from.id+'">'+msg.from.first_name+'</a> вышел(ла) из игры', {parse_mode : "HTML"});
    gameridb[0] = gameridb[gameridb.lenght];
     gamerid.pop();
    leaversb++;
    gamersb--;
   }; break;
   case gameridb[8]:{
    bot.answerCallbackQuery(msg.id, 'Вы вышли из игры', true);
    bot.sendMessage(msg.message.chat.id, '<a href="tg://user?id='+ msg.from.id+'">'+msg.from.first_name+'</a> вышел(ла) из игры', {parse_mode : "HTML"});
    gameridb[0] = gameridb[gameridb.lenght];
     gamerid.pop();
    leaversb++;
    gamersb--;
   }; break;
   case gameridb[9]:{
    bot.answerCallbackQuery(msg.id, 'Вы вышли из игры', true);
    bot.sendMessage(msg.message.chat.id, '<a href="tg://user?id='+ msg.from.id+'">'+msg.from.first_name+'</a> вышел(ла) из игры', {parse_mode : "HTML"});
    gameridb[0] = gameridb[gameridb.lenght];
     gamerid.pop();
    leaversb++;
   }; break;
   case gameridb[10]:{
    bot.answerCallbackQuery(msg.id, 'Вы вышли из игры', true);
    bot.sendMessage(msg.message.chat.id, '<a href="tg://user?id='+ msg.from.id+'">'+msg.from.first_name+'</a> вышел(ла) из игры', {parse_mode : "HTML"});
    gameridb[0] = gameridb[gameridb.lenght];
     gamerid.pop();
    leaversb++;
    gamersb--;
   }; break;
   case gameridb[11]:{
    bot.answerCallbackQuery(msg.id, 'Вы вышли из игры', true);
    bot.sendMessage(msg.message.chat.id, '<a href="tg://user?id='+ msg.from.id+'">'+msg.from.first_name+'</a> вышел(ла) из игры', {parse_mode : "HTML"});
    gameridb[0] = gameridb[gameridb.lenght];
     gamerid.pop();
    leaversb++;
    gamersb--;
   }; break;
    default: bot.sendMessage(msg.message.chat.id, '<a href="tg://user?id='+ msg.from.id+'">'+msg.from.first_name+'</a>, ты не состоишь в игре', {parse_mode : "HTML"}); break;
}}
})


bot.on('polling_error', (error) => {
  console.log(error.code); 
});

var startb2 = {
  reply_markup:{
    inline_keyboard: [
      [{ text: '🥃', callback_data: 'drink' }, { text: '🥛', callback_data: 'nodrink' }],
      [{ text: 'Заменить ведущего', callback_data: 'nextw'}]
    ]
  }
};

function gameWAS(gamersWAS) {
wedWAS = Math.floor(Math.random() * (gamerWAS));
bot.sendMessage(msg.message.chat.id, 'Игра начата! Количество игроков: '+gamersb+'. <a href="tg://user?id='+gameridb[wedWAS]+'">Ведущий</a> придумывает вопрос',{parse_mode : "HTML"});
bot.sendMessage(gameridb[wedWAS],'Сейчас твоё время задать вопрос. Постарайся придумать его оригинальным. Если придумал, то напиши мне его сюда в виде: Вы...');
bot.onText(/вы/i, (msg) => {
  gameQ(msg.text);
  bot.answerCallbackQuery(msg.id, 'Ваш вопрос принят', true);
})
}

bot.onText('startb', (msg) => gameQ(gamersb))

function gameQ(textW){
  bot.sendMessage(msg.chat.id,textW+' - если да, то пейте алкоголь (большие шансы опьянеть), если нет, то пейте молокою Надеюсь на вашу честность', startb2);
}

bot.on('callback_query', function(msg) {
if (msg.data === 'drink') {
  
}
if (msg.data === 'nodrink') {
  
}
if (msg.data === 'nextw') {
  
}
})

bot.onText(/[0-9]/, (msg) => {
  if (msg.from.id == 684519513) bot.deleteMessage(msg.chat.id, msg.text)
})



