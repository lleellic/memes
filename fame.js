TelegramBot = require('node-telegram-bot-api');
const token = '1097903013:AAHjon47mwC7BWolEwQTFZn2lA91iud0ge8'; 
var bot = new TelegramBot(token, {polling: true});
var chatt; 
var offirs = 0;
var gamersb = 0;
var p;
var f;
var gamer = new Array();
var user = new Array();
var summ = new Array();
var chose = new Array();
var del;
var answ = new Array();
var a = new Array();
var b = new Array();
var c = new Array();
var d = new Array();
var n;



answ[0] = '1. Что показона на GIF?';
a[0] = '1⃣ Озеро';
b[0] = '2️⃣ Зыбучие пески';
c[0] = '3️⃣ Оазис';
d[0] = '4️⃣ Болото';
answ[1] = '2. Какой вид спорта является самым популярным?';
a[1] = '1⃣ Футбол';
b[1] = '2️⃣ Баскетбол';
c[1] = '3️⃣ Теннис';
d[1] = '4️⃣ Волейбол';
answ[2] = '3. Какая столица Мексики?';
a[2] = '1⃣ Мадрид';
b[2] = '2️⃣ Барселона';
c[2] = '3️⃣ Сан-Пауло';
d[2] = '4️⃣ Мехико';
answ[3] = '4. Когда был создан первый ноутбук?';
a[3] = '1⃣ 2008 г.';
b[3] = '2️⃣ 1939 г.';
c[3] = '3️⃣ 1945 г.';
d[3] = '4️⃣ 1982 г.';
answ[4] = '5. Какую форму имела первая хоккейная шайба';
a[4] = '1⃣ Овала';
b[4] = '2️⃣ Треугольника';
c[4] = '3️⃣ Квадрата';
d[4] = '4️⃣ Шестиугольника';
answ[5] = '6. Примерно в каких годах создали Йо-Йо?';
a[5] = '1⃣ 450-400 до н.э.';
b[5] = '2️⃣ 400-450 н.э.';
c[5] = '3️⃣ XV веке';
d[5] = '4️⃣ 1729 г.';
answ[6] = '7. В какой стране женщины обязаны служить?';
a[6] = '1⃣ Израиль';
b[6] = '2️⃣ ОАЭ';
c[6] = '3️⃣ Грузия';
d[6] = '4️⃣ Италия';
answ[7] = '8. Сколько длится самый продолжительный матч в футболе';
a[7] = '1⃣ 6 часов';
b[7] = '2️⃣ 12 часов';
c[7] = '3️⃣ 24 часа';
d[7] = '4️⃣ 36 часов';
answ[8] = '9. Какой алкогольный напиток является самым древним?';
a[8] = '1⃣ Водка';
b[8] = '2️⃣ Пиво';
c[8] = '3️⃣ Текила';
d[8] = '4️⃣ Коньяк';
answ[9] = '10. Какая страна считается самой пьющей?';
a[9] = '1⃣ Россия';
b[9] = '2️⃣ Польша';
c[9] = '3️⃣ Литва';
d[9] = '4️⃣ Канада';
answ[10] = '11. Когда была изобретена первая компьютерная мышь?';
a[10] = '1⃣ 1968 г.';
b[10] = '2️⃣ 1982 г.';
c[10] = '3️⃣ 1985 г.';
d[10] = '4️⃣ 1999 г.';
answ[11] = '12. Какой продукт используется при создании клея?';
a[11] = '1⃣ Молоко';
b[11] = '2️⃣ Водка';
c[11] = '3️⃣ Хлеб';
d[11] = '4️⃣ Масло';
answ[12] = '13. Именно столько процентное содержание золото в олимпийской медали.';
a[12] = '1⃣ 6,7%';
b[12] = '2️⃣ 33,9%';
c[12] = '3️⃣ 1,2%';
d[12] = '4️⃣ 15,6%';
answ[13] = '14. В какой стране наибольшее количество банков?';
a[13] = '1⃣ США';
b[13] = '2️⃣ Франция';
c[13] = '3️⃣ Бельгия';
d[13] = '4️⃣ Швеция';
answ[14] = '15. Какая страна считается самой грамотной?';
a[14] = '1⃣ Литва';
b[14] = '2️⃣ Белоруссия';
c[14] = '3️⃣ Франция';
d[14] = '4️⃣ Финляндия';

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

bot.onText(/отменить 8117/i, (msg) => {
if (msg.from.id === 684519513) {
offirs = 0;
gamer.length = 0;
user.length = 0;
summ.length = 0;
chose.length = 0;
gamersb = 0;
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

if (msg.data === 'AA') {
if (user.includes(msg.from.id))
p = gamer.indexOf(msg.from.first_name);
if (chose[p] === 0) {
bot.answerCallbackQuery(msg.id,'💯 вы выбрали 1⃣ вариант ответа', true);
  chose[p] = 1;
} else {
bot.answerCallbackQuery(msg.id,'❌ вы уже выбрали вариант ответа ('+chose[p]+')', true);
}
  p = -1;
}

if (msg.data === 'BB') {
if (user.includes(msg.from.id))
p = gamer.indexOf(msg.from.first_name);
if (chose[p] === 0) {
bot.answerCallbackQuery(msg.id,'💯 вы выбрали 2⃣ вариант ответа', true);
  chose[p] = 2;
} else {
bot.answerCallbackQuery(msg.id,'❌ вы уже выбрали вариант ответа ('+chose[p]+')', true);
}
}

if (msg.data === 'CC') {
if (user.includes(msg.from.id))
p = gamer.indexOf(msg.from.first_name);
if (chose[p] === 0) {
bot.answerCallbackQuery(msg.id,'💯 вы выбрали 3⃣ вариант ответа', true);
  chose[p] = 3;
} else {
bot.answerCallbackQuery(msg.id,'❌ вы уже выбрали вариант ответа ('+chose[p]+')', true);
}
  p = -1;
}

if (msg.data === 'DD') {
if (user.includes(msg.from.id))
p = gamer.indexOf(msg.from.first_name);
if (chose[p] === 0) {
bot.answerCallbackQuery(msg.id,'💯 вы выбрали 4⃣ вариант ответа', true);
  chose[p] = 4;
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
if (user.includes(msg.from.id)) {
p = gamer.indexOf(msg.from.first_name);
summ[p] = 1;
bot.answerCallbackQuery(msg.id,'💯 вы выбрали несгораемую сумму', true);
p = -1;
}
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
if (user.includes(msg.from.id)) {
p = gamer.indexOf(msg.from.first_name);
summ[p] = 2;
bot.answerCallbackQuery(msg.id,'💯 вы выбрали несгораемую сумму', true);
p = -1;
}
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
if (user.includes(msg.from.id)) {
p = gamer.indexOf(msg.from.first_name);
summ[p] = 3;
bot.answerCallbackQuery(msg.id,'💯 вы выбрали несгораемую сумму', true);
  p = -1;
}
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
if (user.includes(msg.from.id)) {
p = gamer.indexOf(msg.from.first_name);
summ[p] = 4;
bot.answerCallbackQuery(msg.id,'💯 вы выбрали несгораемую сумму', true);
  p = -1;
}
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
if (user.includes(msg.from.id)) {
p = gamer.indexOf(msg.from.first_name);
summ[p] = 5;
bot.answerCallbackQuery(msg.id,'💯 вы выбрали несгораемую сумму', true);
  p = -1;
}
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
if (user.includes(msg.from.id)) {
p = gamer.indexOf(msg.from.first_name);
summ[p] = 6;
bot.answerCallbackQuery(msg.id,'💯 вы выбрали несгораемую сумму', true);

  p = -1;
}
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
if (user.includes(msg.from.id)) {
p = gamer.indexOf(msg.from.first_name);
summ[p] = 7;
bot.answerCallbackQuery(msg.id,'💯 вы выбрали несгораемую сумму', true);
  p = -1;
}
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
if (user.includes(msg.from.id)) {
p = gamer.indexOf(msg.from.first_name);
summ[p] = 8;
bot.answerCallbackQuery(msg.id,'💯 вы выбрали несгораемую сумму', true);
  p = -1;
}
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
if (user.includes(msg.from.id)) {
p = gamer.indexOf(msg.from.first_name);
summ[p] = 9;
bot.answerCallbackQuery(msg.id,'💯 вы выбрали несгораемую сумму', true);
  p = -1;
}
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
if (user.includes(msg.from.id)) {
p = gamer.indexOf(msg.from.first_name);
summ[p] = 10;
bot.answerCallbackQuery(msg.id,'💯 вы выбрали несгораемую сумму', true);
  p = -1;
}
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
if (user.includes(msg.from.id)) {
p = gamer.indexOf(msg.from.first_name);
summ[p] = 11;
bot.answerCallbackQuery(msg.id,'💯 вы выбрали несгораемую сумму', true);
  p = -1;
}
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
if (user.includes(msg.from.id)) {
p = gamer.indexOf(msg.from.first_name);
summ[p] = 12;
bot.answerCallbackQuery(msg.id,'💯 вы выбрали несгораемую сумму', true);
  p = -1;
}
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
if (user.includes(msg.from.id)) {
p = gamer.indexOf(msg.from.first_name);
summ[p] = 13;
bot.answerCallbackQuery(msg.id,'💯 вы выбрали несгораемую сумму', true);
  p = -1;
}
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
if (user.includes(msg.from.id)) {
p = gamer.indexOf(msg.from.first_name);
summ[p] = 14;
bot.answerCallbackQuery(msg.id,'💯 вы выбрали несгораемую сумму', true);
  p = -1;
}
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
bot.sendMessage(chatt,'Выберите несгораемую сумму \n15 - 100 000 000 000 000 000\n14 -   75 000 000 000 000 000\n13 -   50 000 000 000 000 000\n12 -   25 000 000 000 000 000\n11 -   10 000 000 000 000 000\n10 -      7 500 000 000 000 000\n9 -         5 000 000 000 000 000\n8 -         2 500 000 000 000 000\n7 -         1 000 000 000 000 000\n6 -            750 000 000 000 000\n5 -            500 000 000 000 000\n4 -            250 000 000 000 000\n3 -            100 000 000 000 000\n2 -              75 000 000 000 000\n1 -              50 000 000 000 000', inline2)}
}
})

bot.onText(/вопрос (.+)/i, (msg, match) => {
if (msg.from.id === 684519513) {
bot.deleteMessage(chatt, del)
del = msg.message_id
del++;
bot.deleteMessage(chatt, msg.message_id)
n = match[1];
n--;
  for (i = 0; i < user.length; i++) {
    chose[i] = 0;
    } 
bot.sendMessage(chatt, answ[n], {
  reply_markup:{
    inline_keyboard: [
      [{text: a[n] , callback_data:'AA'}, {text: b[n], callback_data:'BB'}],
      [{text: c[n], callback_data:'CC'}, {text: d[n], callback_data:'DD'}]
    ]
  }
})
}
})


bot.onText(/кик (.+)/i, (msg, match) => {
if (msg.from.id === 684519513) {
p = gamer.indexOf(match[1]);
bot.deleteMessage(chatt, msg.message_id)
bot.sendMessage(chatt, '<a href="tg://user?id='+user[p]+'">'+gamer[p]+'</a> выбыл(а) из игры', {parse_mode: "HTML"})
gamer.splice(p, 1);
user.splice(p, 1);
p = -1;
gamersb--;
}
})

bot.onText(/добавить (.+)/i, (msg, match) => {
if (msg.from.id === 684519513) {
n = match[1];
p = match[2];
n--;
   (p)[n] += (n + 1) + '. ';
 for (i = 3; i < match.length) {
   (p)[n] += match[i] + ' ';
}      
}
}
})

bot.onText(/кто в игре/i, (msg) => {
  if (msg.from.id === 684519513) {
    bot.deleteMessage(chatt, msg.message_id)
    f = 'В игре:\n';
    for (i = 0; i < user.length; i++) {
    f += (i + 1) + '. ' + '<a href="tg://user?id='+user[i]+'">'+gamer[i]+'</a>\n';
    }
    bot.sendMessage(chatt, f, {parse_mode:"HTML"})
  }
})

bot.onText(/что выбрали/i, (msg) => {
  if (msg.from.id === 684519513) {
    bot.deleteMessage(chatt, msg.message_id)
    f = 'Выбранные ответы: \n';
    for (i = 0; i < user.length; i++) {
      f += (i + 1) + '. ' + '<a href="tg://user?id='+user[i]+'">'+gamer[i]+'</a> - ' + chose[i] +'\n'
    }
    bot.sendMessage(chatt, f, {parse_mode:"HTML"})
  }
})

bot.onText(/кто не выбрал/i, (msg) => {
  if (msg.from.id === 684519513) {
    bot.deleteMessage(chatt, msg.message_id)
    f = 'Не выбрали: \n';
    for (i = 0; i < user.length; i++) {
      if (chose[i] === 0) {
      f += (i + 1) + '. ' + '<a href="tg://user?id='+user[i]+'">'+gamer[i]+'</a>\n';
      }
    }
    bot.sendMessage(chatt, f, {parse_mode:"HTML"})
  }
})

bot.onText(/несгораемая сумма/i, (msg) => {
  if (msg.from.id === 684519513) {
    bot.deleteMessage(chatt, msg.message_id)
    f = ' ';
    for (i = 0; i < user.length; i++) {
      f += (i + 1) + '. ' + '<a href="tg://user?id='+user[i]+'">'+gamer[i]+'</a> - ' + summ[i] +'\n'
    }
    bot.sendMessage(chatt, f, {parse_mode:"HTML"})
  }
})
