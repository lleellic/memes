TelegramBot = require('node-telegram-bot-api');
const token = '1097903013:AAHjon47mwC7BWolEwQTFZn2lA91iud0ge8'; 
var bot = new TelegramBot(token, {polling: true});
var drinked;
var chatid;
var le;
var offirs = 0;
var s = 0;
var gamersb = 0;
var p;
var gamer = new Array();
var user = new Array();
var volume = new Array();
var q;
var i;
var lea = new Array();
var w;
var notgamer = new Array();
var notuser = new Array();
var chose = new Array();
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
bot.sendMessage(msg.chat.id,'Игра уже начата✋🏼🤚🏼. Ожидайте...')
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
p = gamer.indexOf(msg.from.first_name);
console.log(p);
gamer.shift(p);
user.shift(p);
volume.shift(p);
gamersb--;
bot.answerCallbackQuery(msg.id,'Вы вышли из игры',true);
} else {  
bot.answerCallbackQuery(msg.id,'Вы итак не в игре😳',true)
}
} 


if (msg.data === 'members'){
bot.answerCallbackQuery(msg.id,gamersb+' участник(ов)',true)
}
})

bot.onText(/старт было/i, (msg) => {
if ((offirs === 1) && (gamer.lenght >= 2)) {
offirs = 2;
q = 0;
wId = user[q];
wFN = gamer[q];
gameWAS(gamersb, chatid, user[0], gamer[0], wld, wFN);
} else if (offirs === 0) {
bot.sendMessage(chatid, 'Сначала запустите игру написав «играть в было»')
} else {
bot.sendMessage(chatid, 'Слишком мало игроков для участия, наберите как минимум «2»')
}
})

function gameWAS(gamerb, chatid, winner, winnerid, wId, wFN){
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
bot.sendMessage(chatid, msg.text+'  - если ДА, берите 🥃, если НЕТ, берите 🥛', inline2);
wId = 0;
wFN = 0;
}
})

bot.on('callback_query', function (msg) {
 if (msg.data === 'drink') {
 if (user.includes(msg.from.id)) {
 p = gamer.indexOf(msg.from.first_name);
}
  if (chose[p] === 1) {
  drinked--;
  chose[p] = 0;
  volume[p]++;
  bot.sendMessage(chatid,'<a href="tg://user?id='+user[p]+'">'+gamer[p]+'</a> выпил(а) рюмку', {parse_mode:"HTML"})
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
bot.sendMessage(chatid,'Игрок <a href="tg://user?id='+user[le]+'">'+gamer[le]+'</a> опъянел(а) (выбыл(а) из игры)', {parse_mode: "HTML"})
gamer.shift(le);
user.shift(le);
volume.shift(le);
chose.shift(le);
le = -1;
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
gamerWAS(gamer.lenght, chatid, user[0], gamer[0], wId, wFN)
}
}
}
if (msg.data === 'nodrink') {
if (user.includes(msg.from.id)) {
p = gamer.indexOf(msg.from.first_name);
}
if (chose[p] === 1) {
drinked--;
chose[p] = 0;
bot.sendMessage(chatid,'<a href="tg://user?id='+user[p]+'">'+gamer[p]+'</a> выпил(а) молоко', {parse_mode:"HTML"})
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
      bot.sendMessage(chatid,'Игрок <a href="tg://user?id='+user[le]+'">'+gamer[le]+'</a> опъянел(а) (выбыл(а) из игры)', {parse_mode: "HTML"})
      gamer.shift(le);
      user.shift(le);
      volume.shift(le);
      chose.shift(le);
      le = -1;
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
     gamerWAS(gamer.lenght, chatid, user[0], gamer[0], wId, wFN)
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
  bot.sendMessage(chatid,notgame+'не выбрали вариант ответа', {parse_mode: "HTML"})
 }
})


bot.onText(/[0-9]/, (msg) => {
if (msg.from.id === 684519513){
bot.deleteMessage(msg.chat.id, msg.text)
}
})

bot.onText(/отмена было/i, (msg) => {
if (msg.from.id === 684519513) {
bot.sendMessage(chatid, 'Игра отменена😬')
offirs = 0;
drinked = 0
chatid = 0;
le = 0;
s = 0;
gamersb = 0;
p = -1;
gamer.lenght = 0;
user.lenght = 0;
volume.lenght = 0;
chose.lenght = 0;
lea.lenght = 0;
notgamer.lenght = 0;
notuser.lenght = 0;
}
})
