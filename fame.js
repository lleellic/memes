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



answ[0] = '1. Сколько раз Мой Фон должна ударить противника шикаем чтобы он умер?';
a[0] = '1⃣ 1';
b[0] = '2️⃣ 4';
c[0] = '3️⃣ 2';
d[0] = '4️⃣ 11';
answ[1] = '2. Где Ичиго получил свою маск';
a[1] = '1⃣ Сообщество душ';
b[1] = '2️⃣ Магазин Урахары';
c[1] = '3️⃣ Хоэкомундо';
d[1] = '4️⃣ В сражении с Рендзи';
answ[2] = '3. Как выглядит Банкай Регдзри Абораи';
a[2] = '1⃣ Длинный меч Лев';
b[2] = '2️⃣ Огромный самурай';
c[2] = '3️⃣ Тысяча лезвий';
d[2] = '4️⃣ Кукла с ядом';
answ[3] = '4. На сколько увеличивается Шикай Нина Ичимару';
a[3] = '1⃣ 130 м.';
b[3] = '2️⃣ 50 м.';
c[3] = '3️⃣ 66 м.';
d[3] = '4️⃣ 10 м.';
answ[4] = '5. Как умер Арранкар Залиаппоро';
a[4] = '1⃣ От меча Зараки';
b[4] = '2️⃣ От яда Маюри';
c[4] = '3️⃣ От банки Бьякуи';
d[4] = '4️⃣ От Гецуги Ичиго';
answ[5] = '6. Как называется завершенная форма Ичиго';
a[5] = '1⃣ Гэкай';
b[5] = '2️⃣ Сэнкай';
c[5] = '3️⃣ Щухэй';
d[5] = '4️⃣ Дангай';
answ[6] = '7. Кого зарубили на пляже?';
a[6] = '1⃣ Арбуз';
b[6] = '2️⃣ Клубнивик';
c[6] = '3️⃣ Мэнос';
d[6] = '4️⃣ 8 Пустых';
answ[7] = '8. Как выглядит Банкай Зараки по фанфикам?';
a[7] = '1⃣ Огромный вид';
b[7] = '2️⃣ Дьявол';
c[7] = '3️⃣ Лавовый голем';
d[7] = '4️⃣ Черно-фиолетовый демон';
answ[8] = '9. Кем является Ёчиру для Зараки?';
a[8] = '1⃣ Дочь';
b[8] = '2️⃣ Сестрёнка';
c[8] = '3️⃣ Лейтенант';
d[8] = '4️⃣ Шикай';
answ[9] = '10. Как зовут Предателя-шинигами, который встал на сторону Зависимых?';
a[9] = '1⃣ Гинджо';
b[9] = '2️⃣ Соерен';
c[9] = '3️⃣ Маки';
d[9] = '4️⃣ Кусандзиси';
answ[10] = '11. Как называется камень, из которого построена стена и башни в Готэй 13?';
a[10] = '1⃣ Конки';
b[10] = '2️⃣ Усазуки';
c[10] = '3️⃣ Гэн-Гэн';
d[10] = '4️⃣ Сэки-Сэки';
answ[11] = '12. Как Маки-Ичиносэ (шининами-предатель) назвал свой шикай?';
a[11] = '1⃣ Ницугасуми';
b[11] = '2️⃣ Камуцеки';
c[11] = '3️⃣ Фэнзушини';
d[11] = '4️⃣ Цукишини';
answ[12] = '13. Кого уничтожил Айдзен в Разделителе Миров?';
a[12] = '1⃣ Гокецу';
b[12] = '2️⃣ Котоцу';
c[12] = '3️⃣ Мугецу';
d[12] = '4️⃣ Джукэцу';
answ[13] = '14. Кто любит кушать Гин?';
a[13] = '1⃣ Бамбук в сахаре';
b[13] = '2️⃣ Суши (основа рис)';
c[13] = '3️⃣ Вафли в глазури';
d[13] = '4️⃣ Хурма';
answ[14] = '15. Кто дал Ичиго орден временного шинигами и следил за ним?';
a[14] = '1⃣ Укитакэ Дзюсиру';
b[14] = '2️⃣ Янамото Гэнрусай';
c[14] = '3️⃣ Лейтенант Нэмо';
d[14] = '4️⃣ Курацучи Маюри';

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
      [{text:'1', callback_data:'q'},{text:'2', callback_data:'w'},{text:'3', callback_data:'e'},{text:'4', callback_data:'r'},{text:'5', callback_data:'t'},{text:'6', callback_data:'y'},{text:'7', callback_data:'u'}], 
      [{text:'8', callback_data:'i'},{text:'9', callback_data:'o'}, {text:'10', callback_data:'p'},{text:'11', callback_data:'a'},{text:'12', callback_data:'s'},{text:'13', callback_data:'d'},{text:'14', callback_data:'f'}]
    ]
  }
};

bot.onText(/сохранить чат/i, (msg) => {
if (msg.from.id === 684519513) {
chatt = msg.chat.id;
bot.deleteMessage(chatt, msg.message_id)
bot.sendMessage(chatt,'Чат сохранен'); 
}
})

bot.onText(/отменить/i, (msg) => {
if (msg.from.id === 684519513) {
bot.deleteMessage(chatt, msg.message_id)
bot.deleteMessage(chatt, msg.message_id)
bot.sendMessage(chatt,'Игра отменена 🥴'); 
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
bot.deleteMessage(chatt, msg.message_id)
if (offirs === 0) {
bot.sendMessage(chatt,'Стартовал набор игроков для игры «Кто хочет стать квинтиллионером»', inline1); 
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

bot.onText(/старт/i, (msg) => {
if (msg.from.id === 684519513) {
if (offirs === 1) {
offirs = 2;
bot.deleteMessage(chatt, del)
del = msg.message_id
del++;
bot.deleteMessage(chatt, msg.message_id)
bot.sendMessage(chatt,'Выберите несгораемую сумму\n15 вопросов\n15 -   300 000 000 000 000 000\n14 -   150 000 000 000 000 000\n13 -     80 000 000 000 000 000\n12 -     40 000 000 000 000 000\n11 -     20 000 000 000 000 000\n10 -     10 000 000 000 000 000\n9 -         5 000 000 000 000 000\n8 -         2 500 000 000 000 000\n7 -         1 500 000 000 000 000\n6 -         1 000 000 000 000 000\n5 -            500 000 000 000 000\n4 -            300 000 000 000 000\n3 -            200 000 000 000 000\n2 -            100 000 000 000 000\n1 -              50 000 000 000 000', inline2)}
}
})

bot.onText(/впрс (.+)/i, (msg, match) => {
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


bot.onText(/кк (.+)/i, (msg, match) => {
if (msg.from.id === 684519513) {
p = match[1];
p--;
bot.deleteMessage(chatt, msg.message_id)
bot.sendMessage(chatt, '<a href="tg://user?id='+user[p]+'">'+gamer[p]+'</a> выбыл(а) из игры',{parse_mode:"HTML"})
gamer.splice(p, 1);
user.splice(p, 1);
summ.splice(p, 1);
p = -1;
gamersb--;
}
})

bot.onText(/кто в игре/i, (msg) => {
  if (msg.from.id === 684519513) {
    bot.deleteMessage(chatt, msg.message_id)
    f = 'В игре:\n';
    for (i = 0; i < user.length; i++) {
    f += (i + 1) + '. ' +gamer[i]+'\n';
    }
    bot.sendMessage(chatt, f)
  }
})

bot.onText(/что выбрали/i, (msg) => {
  if (msg.from.id === 684519513) {
    bot.deleteMessage(chatt, msg.message_id)
    f = 'Выбранные ответы:\n';
    for (i = 0; i < user.length; i++) {
      f += (i + 1) + '. ' + gamer[i] + ' - ' + chose[i] +'\n'
    }
    bot.sendMessage(chatt, f)
  }
})

bot.onText(/кто не выбрал/i, (msg) => {
  if (msg.from.id === 684519513) {
    bot.deleteMessage(chatt, msg.message_id)
    f = 'Не выбрали:\n';
    for (i = 0; i < user.length; i++) {
      if (chose[i] === 0) {
      f += (i + 1) + '. ' + gamer[i] + '\n';
      }
    }
    bot.sendMessage(chatt, f)
  }
})

bot.onText(/несгораемая сумма/i, (msg) => {
  if (msg.from.id === 684519513) {
    bot.deleteMessage(chatt, msg.message_id)
    f = 'Несгораемая сумма:\n';
    for (i = 0; i < user.length; i++) {
      f += (i + 1) + '. ' + gamer[i]+' - ' + summ[i] +'\n'
    }
    bot.sendMessage(chatt, f)
  }
})
