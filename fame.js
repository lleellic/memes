TelegramBot = require('node-telegram-bot-api');
const token = '1097903013:AAHjon47mwC7BWolEwQTFZn2lA91iud0ge8'; 
const sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(':memory:');
var bot = new TelegramBot(token, {polling: true});
var chatt; 
var offirs = 0;
var gamersb = 0;
var p;
var f;
var gamer = new Array();
var user = new Array();
var summ = new Array();
var del;

var inline1 = {
  reply_markup:{
    inline_keyboard: [
      [{text:'Играть 😋', callback_data:'togame'}, {text:'Выйти 😒', callback_data:'nogame'}],
      [{text:'Сколько участников?', callback_data:'members'}, {text:'Кто участвует?', callback_data:'whois'}]
    ]
  }
};

var inline2 = {
  reply_markup:{
    inline_keyboard: [
      [{text:'1', callback_data:'q'}, {text:'2', callback_data:'w'}],
      [{text:'3', callback_data:'e'}, {text:'4', callback_data:'r'}],
      [{text:'5', callback_data:'t'}, {text:'6', callback_data:'y'}],
      [{text:'7', callback_data:'u'}, {text:'8', callback_data:'i'}],
      [{text:'9', callback_data:'o'}, {text:'10', callback_data:'p'}],
      [{text:'11', callback_data:'a'}, {text:'12', callback_data:'s'}],
      [{text:'13', callback_data:'d'}, {text:'14', callback_data:'f'}]
    ]
  }
};

bot.onText(/сохранить чат/i, (msg) => {
if (msg.from.id === 684519513) {
chatt = msg.chat.id;
bot.sendMessage(chatt,'Чат сохранен'); 
}
})

bot.onText(/играть в кто хочет стать квинтиллионером/i, (msg) => {
if (msg.from.id === 684519513) {
del = msg.message_id;
del++;
if (offirs === 0) {
bot.sendMessage(chatt,'Стартовал набор игроков для игры «Кто хочет стать триллионером»', inline1); 
offirs = 1;
} else {
bot.sendMessage(msg.chat.id,'Игра уже начата ✋🏼🤚🏼. Ожидайте...')
} 
}
})




bot.on('callback_query', function (msg) {
if (msg.data === 'togame') {
if (gamer.includes(msg.from.first_name)) {
bot.answerCallbackQuery(msg.id,'Вы уже в игре', true)
} else {
gamer[gamersb] =  msg.from.first_name;
user[gamersb] = msg.from.id;
summ[gamersb] = 0;
gamersb++;
bot.answerCallbackQuery(msg.id,'Вы вошли в игру', true);
} 
}

if (msg.data === 'nogame') {
if (user.includes(msg.from.id)) {
p = gamer.indexOf(msg.from.first_name);
gamer.splice(p, 1);
user.splice(p, 1);
p = -1;
gamersb--;
bot.answerCallbackQuery(msg.id,'Вы вышли из игры',true);
} else {  
bot.answerCallbackQuery(msg.id,'Вы итак не в игре 😳',true)
}
  p = -1;
} 

if (msg.data === 'members'){
bot.answerCallbackQuery(msg.id,gamersb+' участник(а/ов)',true)
}


if (msg.data === 'whois') {
f = ' ';
for (i = 0; i < gamer.length; i++) {
f += ' ▫️' + gamer[i];
}
bot.answerCallbackQuery(msg.id, f, true);
}

if (msg.data === 'A') {
if (user.includes(msg.from.id))
p = gamer.indexOf(msg.from.first_name);
if (chose[p] === 0) {
bot.answerCallbackQuery(msg.id,'💯 вы выбрали 1⃣ вариант ответа', true);
} else {
bot.answerCallbackQuery(msg.id,'❌ вы уже выбрали вариант ответа ('+chose[p]+')', true);
}
  p = -1;
}

if (msg.data === 'B') {
if (user.includes(msg.from.id))
p = gamer.indexOf(msg.from.first_name);
if (chose[p] === 0) {
bot.answerCallbackQuery(msg.id,'💯 вы выбрали 2⃣ вариант ответа', true);
} else {
bot.answerCallbackQuery(msg.id,'❌ вы уже выбрали вариант ответа ('+chose[p]+')', true);
}
}

if (msg.data === 'C') {
if (user.includes(msg.from.id))
p = gamer.indexOf(msg.from.first_name);
if (chose[p] === 0) {
bot.answerCallbackQuery(msg.id,'💯 вы выбрали 3⃣ вариант ответа', true);
} else {
bot.answerCallbackQuery(msg.id,'❌ вы уже выбрали вариант ответа ('+chose[p]+')', true);
}
  p = -1;
}

if (msg.data === 'D') {
if (user.includes(msg.from.id))
p = gamer.indexOf(msg.from.first_name);
if (chose[p] === 0) {
bot.answerCallbackQuery(msg.id,'💯 вы выбрали 4⃣ вариант ответа', true);
} else {
bot.answerCallbackQuery(msg.id,'❌ вы уже выбрали вариант ответа ('+chose[p]+')', true);
}
p = -1;
}

if (msg.data === 'whonot') {
f = ' ';
for (i = 0; i < user.length; i++) {
if (chose[i] === 0) {
f += ' ▫️' + gamer[i];
}
}
bot.answerCallbackQuery(msg.id, f, true);
}

if (msg.data === 'q') {
if (msg.from.id === 684519513) {
f = ' ';
for (i = 0; i < user.length; i++) {
if (summ[i] === 0) {
f += ' ▫️' + gamer[i];
}
}
bot.answerCallbackQuery(msg.id, f, true);
} else {
if (user.includes(msg.from.id))
p = gamer.indexOf(msg.from.first_name);
summ[p] = 1;
bot.answerCallbackQuery(msg.id,'💯 вы выбрали несгораемую сумму', true);
}
  p = -1;
}
}

if (msg.data === 'w') {
if (msg.from.id === 684519513) {
f = ' ';
for (i = 0; i < user.length; i++) {
if (summ[i] === 0) {
f += ' ▫️' + gamer[i];
}
}
bot.answerCallbackQuery(msg.id, f, true);
} else {
if (user.includes(msg.from.id))
p = gamer.indexOf(msg.from.first_name);
summ[p] = 2;
bot.answerCallbackQuery(msg.id,'💯 вы выбрали несгораемую сумму', true);
}
  p = -1;
}
}
       
if (msg.data === 'e') {
if (msg.from.id === 684519513) {
f = ' ';
for (i = 0; i < user.length; i++) {
if (summ[i] === 0) {
f += ' ▫️' + gamer[i];
}
}
bot.answerCallbackQuery(msg.id, f, true);
} else {
if (user.includes(msg.from.id))
p = gamer.indexOf(msg.from.first_name);
summ[p] = 3;
bot.answerCallbackQuery(msg.id,'💯 вы выбрали несгораемую сумму', true);
}
  p = -1;
}
}

if (msg.data === 'r') {
if (msg.from.id === 684519513) {
f = ' ';
for (i = 0; i < user.length; i++) {
if (summ[i] === 0) {
f += ' ▫️' + gamer[i];
}
}
bot.answerCallbackQuery(msg.id, f, true);
} else {
if (user.includes(msg.from.id))
p = gamer.indexOf(msg.from.first_name);
summ[p] = 4;
bot.answerCallbackQuery(msg.id,'💯 вы выбрали несгораемую сумму', true);
}
  p = -1;
}
}

if (msg.data === 't') {
if (msg.from.id === 684519513) {
f = ' ';
for (i = 0; i < user.length; i++) {
if (summ[i] === 0) {
f += ' ▫️' + gamer[i];
}
}
bot.answerCallbackQuery(msg.id, f, true);
} else {
if (user.includes(msg.from.id))
p = gamer.indexOf(msg.from.first_name);
summ[p] = 5;
bot.answerCallbackQuery(msg.id,'💯 вы выбрали несгораемую сумму', true);
}
  p = -1;
}
}

if (msg.data === 'y') {
if (msg.from.id === 684519513) {
f = ' ';
for (i = 0; i < user.length; i++) {
if (summ[i] === 0) {
f += ' ▫️' + gamer[i];
}
}
bot.answerCallbackQuery(msg.id, f, true);
} else {
if (user.includes(msg.from.id))
p = gamer.indexOf(msg.from.first_name);
summ[p] = 6;
bot.answerCallbackQuery(msg.id,'💯 вы выбрали несгораемую сумму', true);
}
  p = -1;
}
}

if (msg.data === 'u') {
if (msg.from.id === 684519513) {
f = ' ';
for (i = 0; i < user.length; i++) {
if (summ[i] === 0) {
f += ' ▫️' + gamer[i];
}
}
bot.answerCallbackQuery(msg.id, f, true);
} else {
if (user.includes(msg.from.id))
p = gamer.indexOf(msg.from.first_name);
summ[p] = 7;
bot.answerCallbackQuery(msg.id,'💯 вы выбрали несгораемую сумму', true);
}
  p = -1;
}
}

if (msg.data === 'i') {
if (msg.from.id === 684519513) {
f = ' ';
for (i = 0; i < user.length; i++) {
if (summ[i] === 0) {
f += ' ▫️' + gamer[i];
}
}
bot.answerCallbackQuery(msg.id, f, true);
} else {
if (user.includes(msg.from.id))
p = gamer.indexOf(msg.from.first_name);
summ[p] = 8;
bot.answerCallbackQuery(msg.id,'💯 вы выбрали несгораемую сумму', true);
}
  p = -1;
}
}

if (msg.data === 'o') {
if (msg.from.id === 684519513) {
f = ' ';
for (i = 0; i < user.length; i++) {
if (summ[i] === 0) {
f += ' ▫️' + gamer[i];
}
}
bot.answerCallbackQuery(msg.id, f, true);
} else {
if (user.includes(msg.from.id))
p = gamer.indexOf(msg.from.first_name);
summ[p] = 9;
bot.answerCallbackQuery(msg.id,'💯 вы выбрали несгораемую сумму', true);
}
  p = -1;
}
}

if (msg.data === 'p') {
if (msg.from.id === 684519513) {
f = ' ';
for (i = 0; i < user.length; i++) {
if (summ[i] === 0) {
f += ' ▫️' + gamer[i];
}
}
bot.answerCallbackQuery(msg.id, f, true);
} else {
if (user.includes(msg.from.id))
p = gamer.indexOf(msg.from.first_name);
summ[p] = 10;
bot.answerCallbackQuery(msg.id,'💯 вы выбрали несгораемую сумму', true);
}
  p = -1;
}
}

if (msg.data === 'a') {
if (msg.from.id === 684519513) {
f = ' ';
for (i = 0; i < user.length; i++) {
if (summ[i] === 0) {
f += ' ▫️' + gamer[i];
}
}
bot.answerCallbackQuery(msg.id, f, true);
} else {
if (user.includes(msg.from.id))
p = gamer.indexOf(msg.from.first_name);
summ[p] = 11;
bot.answerCallbackQuery(msg.id,'💯 вы выбрали несгораемую сумму', true);
}
  p = -1;
}
}

if (msg.data === 's') {
if (msg.from.id === 684519513) {
f = ' ';
for (i = 0; i < user.length; i++) {
if (summ[i] === 0) {
f += ' ▫️' + gamer[i];
}
}
bot.answerCallbackQuery(msg.id, f, true);
} else {
if (user.includes(msg.from.id))
p = gamer.indexOf(msg.from.first_name);
summ[p] = 12;
bot.answerCallbackQuery(msg.id,'💯 вы выбрали несгораемую сумму', true);
}
  p = -1;
}
}

if (msg.data === 'd') {
if (msg.from.id === 684519513) {
f = ' ';
for (i = 0; i < user.length; i++) {
if (summ[i] === 0) {
f += ' ▫️' + gamer[i];
}
}
bot.answerCallbackQuery(msg.id, f, true);
} else {
if (user.includes(msg.from.id))
p = gamer.indexOf(msg.from.first_name);
summ[p] = 13;
bot.answerCallbackQuery(msg.id,'💯 вы выбрали несгораемую сумму', true);
}
  p = -1;
}
}

if (msg.data === 'f') {
if (msg.from.id === 684519513) {
f = ' ';
for (i = 0; i < user.length; i++) {
if (summ[i] === 0) {
f += ' ▫️' + gamer[i];
}
}
bot.answerCallbackQuery(msg.id, f, true);
} else {
if (user.includes(msg.from.id))
p = gamer.indexOf(msg.from.first_name);
summ[p] = 14;
bot.answerCallbackQuery(msg.id,'💯 вы выбрали несгораемую сумму', true);
}
  p = -1;
}
}

})

bot.onText(/старт 8117/i, (msg) => {
if (msg.from.id === 684519513) {
if (offirs === 1) {
offirs = 2;
bot.deleteMessage(chatt, del)
del = msg.message_id
del++;
bot.deleteMessage(chatt, msg.message_id)
bot.sendMessage(chatt,'Выберите несгораемую сумму \n15 вопросов\n15 - 100 000 000 000 000 000\n14 -   50 000 000 000 000 000\n13 -   20 500 000 000 000 000\n12 -   10 000 000 000 000 000\n11 -      5 000 000 000 000 000\n10 -      2 500 000 000 000 000\n9 -         1 000 000 000 000 000\n8 -            500 000 000 000 000\n7 -            250 000 000 000 000\n6 -            100 000 000 000 000\n5 -              50 000 000 000 000\n4 -              25 000 000 000 000\n3 -              10 000 000 000 000\n2 -                5 000 000 000 000\n1 -                 1 000 000 000 000', inline2); 
}
}
})