const TelegramBot = require('node-telegram-bot-api');
const token = '1097903013:AAHjon47mwC7BWolEwQTFZn2lA91iud0ge8';
var bot = new TelegramBot(token, {polling: true});
var chatid = -1001241810361;
var offirs = 0;
var s = 0;
var gamersb = 0;
var p = 0;
var gamer = [];
var user = [];
var voluma = [];
var inline1 = {
  reply_markup:{
    inline_keyboard: [
      [{ text: 'Играть😋', callback_data: 'COOMMAND1' }, { text: 'Выйти😒', callback_data: 'COMMAND2' }],
      [{text:'Сколько участников?', callback_data:'members'}]
    ]
  }
};

var inline2 = {
  reply_markup:{
    inline_keyboard: [
      [{ text: '🥃', callback_data: 'drink' }, { text: '🥛', callback_data: 'nodrink' }]
    ]
  }
};

bot.onText(/играть в было/i, (msg) => {
if (offirs == 0) {
bot.sendMessage(chatid,'Стартовал набор игроков для игры «Было/не было»', inline1); 
offirs = 1;
} else {
bot.answerCallbackQuery(msg.id,'Игра уже начата✋🏼🤚🏼. Ожидайте...', true)
} 
})

bot.on('callback_query', function(msg) {
if (msg.data === 'COOMMAND1') {
  firstms = msg.message.message_id;
for (s=0; s<gamersb;s++){
 if (user[s]==msg.from.id){
p++;
} 
if (p==0){
gamer[i] =  msg.from.first_name;
user[i] = msg.from.id;
volume[i] = 0;
i++;
p = 0;
gamersb++;
} else {
bot.answerCallbackQuery(msg.id,'Вы уже в игре', true)
}
}
}
if (msg.data === 'COOMMAND2'){
p=-1;
for (i=0;i<gamersb;i++){
if (user[i]==msg.from.id){ 
p==i;
gamersb--;
}
if (p>-1) {
shift.gamer[i];
shift.user[i];
shift.volume[i]
} else {
bot.answerCallbackQuery(msg.id,'Вы итак не в игре😳',true)
}
}
}
if (msg.data === 'members'){
bot.answerCallbackQuery(msg.id,gamersb+' участник(ов)',true)
}
})
