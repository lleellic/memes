const TelegramBot = require('node-telegram-bot-api');
const token = '1097903013:AAHjon47mwC7BWolEwQTFZn2lA91iud0ge8';
var bot = new TelegramBot(token, {polling: true});
var chatid;
var offirs = 0;
var s = 0;
var gamersb = 0;
var p = 0;
var gamer = [];
var user = [];
var volume = [];
var q;
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
chatid = msg.from.chat_id;
if (offirs == 0) {
bot.sendMessage(chatid,'Стартовал набор игроков для игры «Было/не было»', inline1); 
console.log(msg);
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
if (msg.data === 'COOMMAND2'){
p=-1;
for (i=0;i<gamersb;i++){
if (user[i]==msg.from.id){ 
p==i;
gamersb--;
}
}
if (p>-1) {
shift.gamer[i];
shift.user[i];
shift.volume[i]
} else {
bot.answerCallbackQuery(msg.id,'Вы итак не в игре😳',true)
}
}
if (msg.data === 'members'){
bot.answerCallbackQuery(msg.id,gamersb+' участник(ов)',true)
}
})

bot.onText(/старт было/i, (msg) => {
if (offirs==1 || gamersb >= 2){
offirs=2;
q=0;
gameWAS(gamersb, chatid, firstmsg, q);
} else if (gamersb >= 2) {
bot.answerCallbackQuery(msg.id, 'Сначала запустите игру написав «играть в было»', true)
} else {
bot.answerCallbackQuery(msg.id, 'Слишком мало игроков для участия, наберите как минимум 2✋🏼🤚🏼', true)
}
})

function gameWAS(gamerb, chatid, deletedm, q){
var wId;
var wFN;
bot.deleteMessage(chatid, deletedm);
if (q>gamersb){
q=0
} else {
wId = user[q];
wFN = gamer[q];
bot.sendMessage(chatid,'Ожидайте пока ведущий задаст вопрос');
console.log(msg);
}
}
