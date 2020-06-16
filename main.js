TelegramBot = require('node-telegram-bot-api');
const token = '1097903013:AAHjon47mwC7BWolEwQTFZn2lA91iud0ge8'; 
var bot = new TelegramBot(token, {polling: true});
var drinked;
var chatid;
var le;
const offirs = 0;
const s = 0;
var gamersb = 0;
const p = 0;
var gamer = new Array();
var user = new Array();
var volume = new Array();
var q;
var i;
var lea = [];
var w;
var notgamer = [];
var notuser = [];
var chose = [];
var wFN;
var wId;
var inline1 = {
  reply_markup:{
    inline_keyboard: [
      [{text:'Играть😋', callback_data:'togame'}, {text:'Выйти😒', callback_data:'nogame'}],
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
chatid = msg.chat.id;
if (offirs === 0) {
bot.sendMessage(chatid,'Стартовал набор игроков для игры «Было/не было»', inline1); 
offirs = 1;
} else {
console.log(msg);
bot.answerCallbackQuery(msg.id,'Игра уже начата✋🏼🤚🏼. Ожидайте...', true)
} 
})

bot.on('callback_query', function (msg) {
if (msg.data === 'togame') {
if (user.includes(msg.from.id)) {
bot.answerCallbackQuery(msg.id,'Вы уже в игре', true)
} else {
gamer[gamersb] =  msg.from.first_name;
user[gamersb] = msg.from.id;
volume[gamersb] = 0;
gamersb++;
bot.answerCallbackQuery(msg.id,'Вы вошли в игру', true);
} 
}

if (msg.data === 'nogame'){
if (user.includes(msg.from.id)) {
p = user.indexOf(msg.from.id);
shift.gamer[p];
shift.user[p];
shift.volume[p];
gamersb--;
} else {  
bot.answerCallbackQuery(msg.id,'Вы итак не в игре😳',true)
}
} 


if (msg.data === 'members'){
bot.answerCallbackQuery(msg.id,gamersb+' участник(ов)',true)
}
})

bot.onText(/старт было/i, (msg) => {
if (offirs === 1 && gamersb > 1){
offirs = 2;
q = 0;
wId = user[q];
wFN = gamer[q];
if (gamersb < 2) {
offirs = 0;
}
gameWAS(gamersb, chatid, q, user[0], gamer[0], wld, wFN);
} else if (offirs === 0) {
bot.answerCallbackQuery(msg.id, 'Сначала запустите игру написав «играть в было»', true)
} else {
bot.answerCallbackQuery(msg.id, 'Слишком мало игроков для участия, наберите как минимум 2✋🏼🤚🏼', true)
}
})

function gameWAS(gamerb, chatid, q, winner, winnerid, wId, wFN){
if (gamersb > 1) {
bot.sendMessage(chatid,'Сейчас <a href="tg://user?id='+wId+'">'+wFN+'</a> - ведущий!', {parse_mode: "HTML"});
bot.sendMessage(wId,'Ты ведущий! Напиши сюда свой вопрос в виде: Вы... (Если предложение не будет начинаться с «вы», то я просто не опубликую вопрос)');
} else if (gamersb === 0) {
bot.sendMessage(chatid,'К сожалению никто не выйграл🥺');
} else {
bot.sendMessage(chatid,'Победитель игры - <a href="tg://user?id='+winnerId+'">'+winner+'</a>, поздравляем тебя!', { parse_mode: "HTML"})
}
}

bot.onText(/вы/gi, (msg) => {
if (msg.from.id == wId) {
for(i = 0; i < gamer.lenght; i++) {
chose[i] = 1;
}
bot.sendMessage(chatId, msg.text+'  - если ДА, берите 🥃, если НЕТ, берите 🥛', inline2);
wId = 0;
wFN = 0;
} else {
bot.answerCallbackQuery(msg.id,'Ведущий не вы✋🏼🤚🏼');
}
})

bot.on('callback_query', function (msg) {
 if (msg.data === 'drink') {
 if (user.includes(msg.from.id)) {
 p = user.indexOf(msg.from.id);
}
  if (chose[p] === 1) {
  drinked--;
  chose[p] = 0;
  volume[p] ++;
  bot.sendMessage(chatId,'<a href="tg://user?id='+user[p]+'">'+gamer[p]+'</a> выпил(а) рюмку', {parse_mode:"HTML"})
  w = 0;
   if (drinked == gamer.lenght) {
    for (i=0; i < gamer.lenght; i++) {
     if (volume[i] == 5) {
     lea[w] = i;
     w++;
}
}
for (i = 0; i < lea.lenght; i++) {
le = lea[i] - i;
bot.sendMessage(chatId,'Игрок <a href="tg://user?id='+user[le]+'">'+gamer[le]+'</a> опъянел(а) (выбыл(а) из игры)', {parse_mode: "HTML"})
shift.gamer[le];
shift.user[le];
shift.volume[le];
shift.chose[le];
le = '-1';
}
}
if (drinked === 0) {
if (q > user.lenght) {
      q=0;
      } else {
      q++;
     }
     wId = user[q];
     wFN = gamer[q];
if (gamersb < 2) {
offirs = 0;
}
     gamerWAS(gamer.lenght, chatId, q, user[0], gamer[0], wId, wFN)
}
}
}
if (msg.data === 'nodrink') {
if (user.includes(msg.from.id)) {
p = user.indexOf(msg.from.id);
}
    if (chose[p] === 1) {
    drinked--;
    chose[p] = 0;
    bot.sendMessage(chatId,'<a href="tg://user?id='+user[p]+'">'+gamer[p]+'</a> выпил(а) молоко', {parse_mode:"HTML"})
    w = 0;
     if (drinked  == gamer.lenght) {
      for (i=0; i < gamer.lenght; i++) {
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
}

if (drinked === 0) {
if (q > gamer.lenght) {
      q = 0;
      } else {
      q++;
     }
     wId = user[q];
     wFN = gamer[q];
if (gamersb < 2) {
offirs = 0;
}
     gamerWAS(gamer.lenght, chatId, q, user[0], gamer[0], wId, wFN)
}
    }
   };
  if (msg.data === 'whonot') {
   for (i = 0;i < gamer.lenght;i++) {
    if (chose[i] === 1) {
    notgamer[i] = gamer[i];
    notuser[i] = user[i];
    notgame += '<a href="tg://user?id='+notuser[i]+'">'+notgamer[i]+'</a> ';
   }
  }
  bot.sendMessage(chatId,notgame+'не выбрали вариант ответа', {parse_mode: "HTML"})
 }
})
