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



answ[0] = '1. Как называется компания, логотипом которой является надкушенное яблоко?';
a[0] = '1⃣ Pen';
b[0] = '2️⃣ Apple';
c[0] = '3️⃣ Pineapple';
d[0] = '4️⃣ Applepen';
answ[1] = '2. В 2007 г. появились в продаже телефоны, которые поддерживали...';
a[1] = '1⃣ Камеру';
b[1] = '2️⃣ GPS навигатор';
c[1] = '3️⃣ 740 р.';
d[1] = '4️⃣ Две SIM-карты';
answ[2] = '3. Логотип какой компании изображён на фотографии?';
a[2] = '1⃣ Nokia';
b[2] = '2️⃣ Blackberry';
c[2] = '3️⃣ Allison';
d[2] = '4️⃣ Fokia';
answ[3] = '4. Какая из этих компаний никогда не существовала??';
a[3] = '1⃣ LG';
b[3] = '2️⃣ BBK ELECTRONIC';
c[3] = '3️⃣ Lenovo.';
d[3] = '4️⃣ Honor';
answ[4] = '5. Какая компания первым своим логотипом использовала изображение физика, в честь которого названы 3 закона и 1 величина?';
a[4] = '1⃣ Huawei';
b[4] = '2️⃣ SONY';
c[4] = '3️⃣ LG';
d[4] = '4️⃣ Apple';
answ[5] = '6. Почему в Японии наиболее часто встречающиеся телефоны водонепроницаемы?';
a[5] = '1⃣ Для душа';
b[5] = '2️⃣ От дождя';
c[5] = '3️⃣ Для дайвинга';
d[5] = '4️⃣ От грязи';
answ[6] = '7. Назовите имя совладельца компании Apple, который имел телефонный номер 888-888-8888';
a[6] = '1⃣ Марсель Фернандес';
b[6] = '2️⃣ Александр Бэлл';
c[6] = '3️⃣ Стив Возняк';
d[6] = '4️⃣ Джон Дрэйпер';
answ[7] = '8. За что отсидел перчу часть своего срока Кевин Ситник, свистнувший в телефонную трубку?';
a[7] = '1⃣ Объявления Ядерной Войны';
b[7] = '2️⃣ Оглушение собеседника';
c[7] = '3️⃣ Кража свистка';
d[7] = '4️⃣ Поломка телефонной сети';
answ[8] = '9. Какая сумма в долларах была указана в квитанции 2012 года за услуги телефонной связи француженке Селене Сан-Хосе?';
a[8] = '1⃣ 11 миллионов';
b[8] = '2️⃣ 11 миллиардов';
c[8] = '3️⃣ 11 квадриллионов';
d[8] = '4️⃣ 11 квинтиллионов';
answ[9] = '10. Чем знаменит Марсело Фернандес из Бразилии?';
a[9] = '1⃣ Позвонил ~ 1000 раз';
b[9] = '2️⃣ Быстро печатал';
c[9] = '3️⃣ Оплатил SIM-картой';
d[9] = '4️⃣ Купил 243 телефона';
answ[10] = '11. В 1971 году хакер по имени Джон Дрэйпер взломал телефонную сеть при помощи свистка и...';
a[10] = '1⃣ Чипсов';
b[10] = '2️⃣ Трубочки сока';
c[10] = '3️⃣ Кукурузы';
d[10] = '4️⃣ Сахарной ваты';
answ[11] = '12. Назовите фобию остаться без телефона';
a[11] = '1⃣ Номофобия';
b[11] = '2️⃣ Климакообия';
c[11] = '3️⃣ Киберфобия';
d[11] = '4️⃣ Трендофобия';
answ[12] = '13. Кто из этих глав государств использовать телефон одной канадской компании прежне называющаяся «RIM»';
a[12] = '1⃣ Владимир Путин';
b[12] = '2️⃣ Ангелов Меркель';
c[12] = '3️⃣ Ким Чен Ын';
d[12] = '4️⃣ Барак Обама';
answ[13] = '14. По данным одного лондонского университета именно столько процентов подростков имеют зависимость от телефона';
a[13] = '1⃣ 19%';
b[13] = '2️⃣ 14%';
c[13] = '3️⃣ 27%';
d[13] = '4️⃣ 23%';
answ[14] = '15. Что производила компания NOKIA до смартфонов и телефонов?';
a[14] = '1⃣ Локомотивы';
b[14] = '2️⃣ Подушки';
c[14] = '3️⃣ Сигареты';
d[14] = '4️⃣ Туалетную бумагу';

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
bot.deleteMessage(chatt, msg.message_id)
bot.sendMessage(chatt,'Чат сохранен'); 
}
})

bot.onText(/отменить 8117/i, (msg) => {
if (msg.from.id === 684519513) {
bot.deleteMessage(chatt, msg.message_id)
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
    f = 'Выбранные ответы: \n';
    for (i = 0; i < user.length; i++) {
      f += (i + 1) + '. ' + gamer[i] + ' - ' + chose[i] +'\n'
    }
    bot.sendMessage(chatt, f)
  }
})

bot.onText(/кто не выбрал/i, (msg) => {
  if (msg.from.id === 684519513) {
    bot.deleteMessage(chatt, msg.message_id)
    f = 'Не выбрали: \n';
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
    f = 'Несгораемая сумма:';
    for (i = 0; i < user.length; i++) {
      f += (i + 1) + '. ' + gamer[i]+' - ' + summ[i] +'\n'
    }
    bot.sendMessage(chatt, f)
  }
})
