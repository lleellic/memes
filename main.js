const TelegramBot = require('node-telegram-bot-api');
const token = '1097903013:AAHjon47mwC7BWolEwQTFZn2lA91iud0ge8'; 
var bot = new TelegramBot(token, {polling: true});
var drinked;
var chatid;
var le;
var offirs = 0;
var s = 0;
var gamersb = 0;
var p = 0;
var gamer = [];
var user = [];
var volume = [];
var q;
var lea = [];
var w;
var notgamer = [];
var notuser = [];
var chose = [];
var firstmsg;
var wFN;
var wId;
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
      [{ text: '🥃', callback_data: 'drink' }, { text: '🥛', callback_data: 'nodrink' }],
[{ text: 'Кто не нажал?🤫', callback_data:'whonot' }]
    ]
  }
};

bot.onText(/играть в было/i, (msg) => {
chatid = msg.from.chat_id;
if (offirs === 0) {
 bot.sendMessage(chatid,'Стартовал набор игроков для игры «Было/не было»', inline1); 
firstms = msg.message.message_id + 1;
offirs = 1;
} else {
bot.answerCallbackQuery(msg.id,'Игра уже начата✋🏼🤚🏼. Ожидайте...', true)
} 
})

bot.on('callback_query', function(msg) {
if (msg.data === 'COOMMAND1') {
for (s=0; s<gamersb;s++){
 if (user[s]==msg.from.id){
p++;
}
}
if (p===0){
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
if (offirs===1 || gamersb >= 2){
offirs=2;
q=0;
gameWAS(gamersb, chatid, firstmsg, q, user[0], gamer[0], wld, wFN);
} else if (offirs === 0) {
bot.answerCallbackQuery(msg.id, 'Сначала запустите игру написав «играть в было»', true)
} else {
bot.answerCallbackQuery(msg.id, 'Слишком мало игроков для участия, наберите как минимум 2✋🏼🤚🏼', true)
}
})

function gameWAS(gamerb, chatid, deletedm, q, winner, winnerId){
if (gamersb > 1) {
bot.deleteMessage(chatid, deletedm);
bot.sendMessage(chatid,'Сейчас <a href="tg://user?id='+wId+'">'+wFN+'</a> - ведущий!', {parse_mode: "HTML"});
firstmsg = msg.message.message_id +1;
bot.sendMessage(wId,'Ты ведущий! Напиши сюда свой вопрос в виде: Вы... (Если предложение не будет начинаться с «вы», то я просто не опубликую вопрос)');
} else if (gamersb === 0) {
bot.sendMessage(chatId,'К сожалению никто не выйграл🥺');
offirs = 0;
} else {
bot.sendMessage(chatId,'Победитель игры - <a href="tg://user?id='+winnerId+'">'+winner+'</a>, поздравляем тебя!', { parse_mode: "HTML"})
}
}

bot.onText(/вы/gi, (msg) => {
if (msg.from.id == wId) {
for(i=0; i < gamer.lenght; i++) {
chose[i] = 1;
}
bot.sendMessage(chatId, msg.text+'  - если ДА, берите 🥃, если НЕТ, берите 🥛', inline2);
firstmsg = msg.message.message_id +1;
wId=0;
wFN=0;
} else {
bot.answerCallbackQuery(msg.id,'Ведущий не вы✋🏼🤚🏼');
}
})

bot.on('callback_query', function (msg){
 If (msg.data ==='drink') {
  for (i=0;i<gamer.lengh;i++) {
   if (msg.from.id == user[i]) {
   p = i;
  }
 }
  If (chose[p] == 1) {
  drinked--;
  chose[p] = 0;
  volume[p] ++;
  bot.sendMessage(chatId,'<a href="tg://user?id='+user[p]+'">'+gamer[p]+'</a> выпил(а) рюмку', {parse_mode:"HTML"})
}
  w = 0;
   if (drinked == gamer.lenght) {
    for (i=0; i < gamer.lenght; i++){
     if (volume[i] == 5) {
     lea[w] = i;
     w++;
}
    }
     for (i=0; i<lea.lenght; i++){
le = lea[i] - i;
     bot.sendMessage(chatId,'Игрок <a href="tg://user?id='+user[le]+'">'+gamer[le]+'</a> опъянел(а) (выбыл(а) из игры)', {parse_mode: "HTML"})
     shift.gamer[le];
     shift.user[le];
     shift.volume[le];
     shift.chose[le];
     le = '-1';
    }
     if (q>gamer.lenght){
     q=0
     } else {
     q=0
    }
    wId = user[q];
    wFN = gamer[q];
    gamerWAS(gamer.lenght, chatId, firstmsg, q, user[0], gamer[0], wId, wFN)
   }
  }
   If (msg.data === 'nodrink') {
    for (i=0;i<gamer.lengh;i++) {
     if (msg.from.id == user[i]) {
     p = i;
    }
   }
    If (chose[p] === 1){
    drinked--;
    chose[p] = 0;
    bot.sendMessage(chatId,'<a href="tg://user?id='+user[p]+'">'+gamer[p]+'</a> выпил(а) молоко', {parse_mode:"HTML"})
}
    w = 0;
     if (drinked  == gamer.lenght) {
      for (i=0; i < gamer.lenght; i++){
       if (volume[i] == 5) {
       lea[w] = i;
       w++;
      }
     }
      for (i=0; i<lea.lenght; i++) {
le = lea[i] - i;
      bot.sendMessage(chatId,'Игрок <a href="tg://user?id='+user[le]+'">'+gamer[le]+'</a> опъянел(а) (выбыл(а) из игры)', {parse_mode: "HTML"})
      shift.gamer[le];
      shift.user[le];
      shift.volume[le];
      shift.chose[le];
      le = '-1';
     }
      if (q>gamer.lenght){
      q=0
      } else {
      q=0
     }
     wId = user[q];
     wFN = gamer[q];
     gamerWAS(gamer.lenght, chatId, firstmsg, q, user[0], gamer[0], wId, wFN)
    }
   }
  If (msg.data === 'whonot') {
   for (i=0;i<gamer.lenght;i++) {
    if (chose[i] === 1) {
    notgamer[i] = gamer[i];
    notuser[i] = user[i];
    notgame += '<a href="tg://user?id='+notuser[i]+'">'+notgamer[i]+'</a> ';
   }
  }
  bot.sendMessage(chatId,notgame+'не выбрали вариант ответа', {parse_mode: "HTML"})
 }
})
