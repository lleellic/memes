const TelegramBot = require('node-telegram-bot-api');
const token = '1097903013:AAHjon47mwC7BWolEwQTFZn2lA91iud0ge8';
var bot = new TelegramBot(token, {polling: true});
var chatid = -1001241810361;
var offirs = 0;
var s=0;
var p = 0;
var gamer = [];
var inline1 = {
  reply_markup:{
    inline_keyboard: [
      [{ text: 'Играть😋', callback_data: 'COOMMAND1' }, { text: 'Выйти😒', callback_data: 'COMMAND2' }]
    ]
  }
};

var inline2 = {
  reply_markup:{
    inline_keyboard: [
      [{ text: '🥃', callback_data: 'drink' }, { text: '🥛', callback_data: 'nodrink' }],
[{text:'Сколько участников?', callback_data:'members'}]
    ]
  }
};

bot.onText(/играть в было/, (msg) => {
if (offirs == 0) {
bot.sendMessage(chatid,'Стартовал набор игроков для игры «Было/не было»', inline1); //тут присвоить значение мессаг айди
offirs = 1;
} else {
bot.answerCallbackQuery(msg.id,'Игра уже начата✋🏼🤚🏼. Ожидайте...', true)
} 
})

bot.on('callback_query', function(msg) {
if (msg.data === 'COOMMAND1') { 
for (s=0; s<gamer.lenght;s++){
 if (gamer.id[s]==msg.from.id){
p++;
} 
if (p==0){
gamer[i] =  {firstname=msg.from.first_name, id=msg.from.id, volume=0};
i++;
} else {
bot.answerCallbackQuery(msg.id,'Вы уже в игре', true)
}
}
}
if (msg.data === 'COOMMAND2'){
p=-1;
for (i=0;i<gamer.lenght;i++){
if (gamer.id[i]==msg.from.id){ 
p==i;
}
if (p>-1) {
shift.gamer[i]
} else {
bot.answerCallbackQuery(msg.id,'Вы итак не в игре😳',true)
}
}
}
if (msg.data === 'members'){
bot.answerCallbackQuery(msg.id,gamer.lenght+' участник(ов)',true)
}
})
