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
var chose = new Array();
var del;
var answ = new Array();
var a = new Array();
var b = new Array();
var c = new Array();
var d = new Array();
var n;



answ[0] = '1. Закончите поговорку: «Тише едешь, дальше...»';
a[0] = '1⃣ Выйдешь';
b[0] = '2️⃣ Будешь';
c[0] = '3️⃣ Дальше';
d[0] = '4️⃣ Доедешь';
answ[1] = '2. Какая столица Бразилии?';
a[1] = '1⃣ Рио-де-Жанейро';
b[1] = '2️⃣ Сан-Пауло';
c[1] = '3️⃣ Кито';
d[1] = '4️⃣ Бразилиа';
answ[2] = '';
a[2] = '1⃣ Желтая';
b[2] = '2️⃣ Фиолетовая';
c[2] = '3️⃣ Розовая';
d[2] = '4️⃣ Зеленая';
answ[3] = '4. Чем изначально было кофе?';
a[3] = '1⃣ Удобрением';
b[3] = '2️⃣ Едой';
c[3] = '3️⃣ Кормом для животных';
d[3] = '4️⃣ Валютой';
answ[4] = '5. Сколько лет было самому молодому покорителю Эвереста?';
a[4] = '1⃣ 11';
b[4] = '2️⃣ 13';
c[4] = '3️⃣ 15';
d[4] = '4️⃣ 17';
answ[5] = '6. Что брали первые покорители полюсов для лечения разных заболеваний?';
a[5] = '1⃣ Аптечку';
b[5] = '2️⃣ Врача';
c[5] = '3️⃣ Травы';
d[5] = '4️⃣ Наркотики';
answ[6] = '7. Взамен чего раньше использовали шоколад?';
a[6] = '1⃣ Воды';
b[6] = '2️⃣ Денег';
c[6] = '3️⃣ Красителя';
d[6] = '4️⃣ Макияжа';
answ[7] = '8. За бороду раньше в Англии ...';
a[7] = '1⃣ Платили налог';
b[7] = '2️⃣ Садили в тюрьму';
c[7] = '3️⃣ Присуждали премию';
d[7] = '4️⃣ Выбривали брови';
answ[8] = '9. С какой скоростью читал Наполеон?';
a[8] = '1⃣ 500 слов/мин';
b[8] = '2️⃣ 1000 слов/мин';
c[8] = '3️⃣ 1500 слов/мин';
d[8] = '4️⃣ 2000 слов/мин';
answ[9] = '10. Что такое Кьерагболтен?';
a[9] = '1⃣ Холм';
b[9] = '2️⃣ Ручей';
c[9] = '3️⃣ Камень';
d[9] = '4️⃣ Дерево';
answ[10] = '11. Кто был последним западной Римской Империи?';
a[10] = '1⃣ Луций';
b[10] = '2️⃣ Антоний Пи';
c[10] = '3️⃣ Марка Аврелий';
d[10] = '4️⃣ Ромул Август';
answ[11] = '12. Какой цвет больше всего привлекает комаров?';
a[11] = '1⃣ Синий';
b[11] = '2️⃣ Красный';
c[11] = '3️⃣ Зелёный';
d[11] = '4️⃣ Жёлтый';
answ[12] = '13. Скольки долларовая монета была продана за $7590000?';
a[12] = '1⃣ 1';
b[12] = '2️⃣ 5';
c[12] = '3️⃣ 20';
d[12] = '4️⃣ 50';
answ[13] = '14. Сколько в длинну самый длинный лимузин?';
a[13] = '1⃣ 98 футов';
b[13] = '2️⃣ 100 футов';
c[13] = '3️⃣ 102 фута';
d[13] = '4️⃣ 104 фута';
answ[14] = '15. Какая страна является лидером по количеству нулей на самой ценной долларовой купюре?';
a[14] = '1⃣ Армения';
b[14] = '2️⃣ Австралия';
c[14] = '3️⃣ Зимбабве';
d[14] = '4️⃣ Анголла';

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
bot.sendMessage(chatt,'Выберите несгораемую сумму \n15 вопросов\n15 - 100 000 000 000 000 000\n14 -   50 000 000 000 000 000\n13 -   20 500 000 000 000 000\n12 -   10 000 000 000 000 000\n11 -      5 000 000 000 000 000\n10 -      2 500 000 000 000 000\n9 -         1 000 000 000 000 000\n8 -            500 000 000 000 000\n7 -            250 000 000 000 000\n6 -            100 000 000 000 000\n5 -              50 000 000 000 000\n4 -              25 000 000 000 000\n3 -              10 000 000 000 000\n2 -                5 000 000 000 000\n1 -                 1 000 000 000 000', inline2); 
}
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
p = gamer.indexOf(msg.from.first_name);
bot.deleteMessage(chatt, msg.message_id)
bot.sendMessage(chatt, '<a href="tg://user?id='+user[p]+'">'+gamer[p]+'</a> выбыл(а) из игры')
gamer.splice(p, 1);
user.splice(p, 1);
p = -1;
gamersb--;
}
})

bot.onText(/кто в игре/i, (msg) => {
  if (msg.from.id === 684519513) {
    bot.deleteMessage(chatt, msg.message_id)
    f = ' ';
    for (i = 0; i < user.length; i++) {
    f += gamer[i] + '\n'
    }
    bot.sendMessage(chatt, f))
  }
})

bot.onText(/что выбрали/i, (msg) => {
  if (msg.from.id === 684519513) {
    bot.deleteMessage(chatt, msg.message_id)
    f = ' ';
    for (i = 0; i < user.length; i++) {
      f += gamer[i] + ' ' + chose[i] +'\n'
    }
    bot.sendMessage(chatt, f))
  }
})
