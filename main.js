TelegramBot = require('node-telegram-bot-api');
const token = '1097903013:AAHjon47mwC7BWolEwQTFZn2lA91iud0ge8'; 
var bot = new TelegramBot(token, {polling: true});
var drinked;
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
var notgame = '';
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
if (offirs === 0) {
bot.sendMessage(msg.chat.id,'Стартовал набор игроков для игры «Было/не было»', inline1); 
offirs = 1;
} else {
bot.sendMessage(msg.chat.id,'Игра уже начата✋🏼🤚🏼. Ожидайте...')
} 
})

bot.on('callback_query', function (msg) {
if (msg.data === 'togame') {
if (gamer.includes(msg.from.first_name)) {
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
gamer.shift(p);
user.shift(p);
volume.shift(p);
p = -1;
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
if (offirs === 1) {
if (gamersb >= 2){
wId = user[0];
wFN = gamer[0];
offirs = 2;
if (gamersb > 1) {
bot.sendMessage(msg.chat.id,'Сейчас <a href="tg://user?id='+user[0]+'">'+gamer[0]+'</a> - ведущий!', {parse_mode: "HTML"});
bot.sendMessage(user[0],'Ты ведущий! Напиши сюда свой вопрос в виде: Вы... (Если предложение не будет начинаться с «вы», то я просто не опубликую вопрос)');
} 
} else {
bot.sendMessage(mag.chat.id, 'Слишком мало игроков для участия, наберите как минимум «2»')
}
} else {
bot.sendMessage(msg.chat.id, 'Сначала запустите игру написав «играть в было»')
}
})

bot.onText(/вы/gi, (msg) => {
if (msg.from.id == wId) {
for(i = 0; i < (gamer.lenght -1); i++) {
chose[i] = 1;
}
drinked = user.lenght;
bot.sendMessage(msg.chat.id, msg.text+'  - если ДА, значит берите 🥃, если НЕТ, значит берите 🥛', inline2);
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
bot.answerCallbackQuery(msg.id,'Вы выбрали 🥃',true);
bot.sendMessage(msg.chat.id,'<a href="tg://user?id='+user[p]+'">'+gamer[p]+'</a> выпил(а) рюмку', { parse_mode: "HTML" })
w = 0;
if (drinked === 0) {
for (i = 0; i < (gamer.lenght - 1); i++) {
if (volume[i] == 5) {
lea[w] = i;
w++;
}
}
for (i = 0; i < (lea.lenght - 1); i++) {
le = lea[i] - i;
bot.sendMessage(msg.chat.id,'Игрок <a href="tg://user?id='+user[le]+'">'+gamer[le]+'</a> опъянел(а) (выбыл(а) из игры)', {parse_mode: "HTML"})
gamer.shift(le);
user.shift(le);
volume.shift(le);
chose.shift(le);
le = -1;
}
}
if (drinked === 0) {
if (q > (user.lenght - 1)) {
q=0;
} else {
q++;
}
wId = user[q];
wFN = gamer[q];
if (gamer.lenght > 1) {
bot.sendMessage(msg.chat.id,'Сейчас <a href="tg://user?id='+wId+'">'+wFN+'</a> - ведущий!', {parse_mode: "HTML"});
bot.sendMessage(wId,'Ты ведущий! Напиши сюда свой вопрос в виде: Вы... (Если предложение не будет начинаться с «вы», то я просто не опубликую вопрос)');
} else if (gamer.lenght === 0) {
bot.sendMessage(msg.chat.id,'К сожалению никто не выйграл🥺');
offirs = 0;
drinked = 0
le = 0;
s = 0;
p = -1;
gamer.lenght = 0;
user.lenght = 0;
volume.lenght = 0;
gamersb = 0;
} else {
bot.sendMessage(msg.chat.id,'Победитель игры - <a href="tg://user?id='+user[0]+'">'+gamer[0]+'</a>, поздравляем тебя!', { parse_mode: "HTML"})
offirs = 0;
drinked = 0
le = 0;
s = 0;
p = -1;
gamer.lenght = 0;
user.lenght = 0;
volume.lenght = 0;
gamersb = 0;
}
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
bot.answerCallbackQuery(msg.id,'Вы выбрали 🥛',true);
bot.sendMessage(msg.chat.id,'<a href="tg://user?id='+user[p]+'">'+gamer[p]+'</a> выпил(а) молоко', {parse_mode:"HTML"})
w = 0;
if (drinked === 0) {
for (i = 0; i < (gamer.lenght - 1); i++) {
if (volume[i] === 5) {
lea[w] = i;
w++;
}
}
for (i = 0; i < (lea.lenght - 1); i++) {
le = lea[i] - i;
bot.sendMessage(msg.chat.id,'Игрок <a href="tg://user?id='+user[le]+'">'+gamer[le]+'</a> опъянел(а) (выбыл(а) из игры)', {parse_mode: "HTML"})
gamer.shift(le);
user.shift(le);
volume.shift(le);
chose.shift(le);
le = -1;
}
}
if (drinked === 0) {
if (q > (gamer.lenght - 1)) {
q = 0;
} else {
q++;
}
wId = user[q];
wFN = gamer[q];
if (gamersb > 1) {
bot.sendMessage(msg.chat.id,'Сейчас <a href="tg://user?id='+wId+'">'+wFN+'</a> - ведущий!', {parse_mode: "HTML"});
bot.sendMessage(wId,'Ты ведущий! Напиши сюда свой вопрос в виде: Вы... (Если предложение не будет начинаться с «вы», то я просто не опубликую вопрос)');
} else if (gamersb === 0) {
bot.sendMessage(msg.chat.id,'К сожалению никто не выйграл🥺');
offirs = 0;
drinked = 0
le = 0;
s = 0;
p = -1;
gamer.lenght = 0;
user.lenght = 0;
volume.lenght = 0;
gamersb = 0;
} else {
bot.sendMessage(msg.chat.id,'Победитель игры - <a href="tg://user?id='+user[0]+'">'+gamer[0]+'</a>, поздравляем тебя!', { parse_mode: "HTML"})
offirs = 0;
drinked = 0
le = 0;
s = 0;
p = -1;
gamer.lenght = 0;
user.lenght = 0;
volume.lenght = 0;
gamersb = 0;
}
}
}
}

if (msg.data === 'whonot') {
for (i = 0; i < (gamer.lenght - 1); i++) {
if (chose[i] === 1) {
notgamer[i] = gamer[i];
notuser[i] = user[i];
notgame += '<a href="tg://user?id='+notuser[i]+'">'+notgamer[i]+'</a>\n';
}
}
bot.sendMessage(msg.chat.id,notgame+'Не выбрали вариант ответа', {parse_mode: "HTML"})
}
})


bot.onText(/[0-9]/, (msg) => {
if (msg.from.id === 684519513){
bot.deleteMessage(msg.chat.id, msg.text)
}
})

bot.onText(/отмена было/i, (msg) => {
if (msg.from.id === 684519513) {
offirs = 0;
drinked = 0
le = 0;
s = 0;
p = -1;
gamer.lenght = 0;
user.lenght = 0;
volume.lenght = 0;
gamersb = 0;
bot.sendMessage(msg.chat.id, 'Игра отменена😬')
}
})
