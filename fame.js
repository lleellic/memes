TelegramBot = require('node-telegram-bot-api');
const token = '1097903013:AAHjon47mwC7BWolEwQTFZn2lA91iud0ge8'; 
var bot = new TelegramBot(token, {polling: true});
const sqlite3 = require('sqlite3').verbose();
var bd = new sqlite3.Database('./balance.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    f = 'CREATE TABLE balance(id int, bal int DEFAULT 0)';
    bd.run(f);
    console.error(err.message);
  } else {
    console.log('Соединение прошло успешно');
  }
});
var chatt; 
var offirs = 0;
var gamersb = 0;
var p;
var ag;
var bb;
var f;
var admin = new Array();
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
admin[0] = 684519513;
admin[1] = 858371219;
var number = new Array();
var cg = new Array();
var muted = new Array();
var muten = new Array();
var hal = new Array();
var hal1;
var hal2;
var rest;
var endhal;
var resu;


answ[0] = 'Выберите правильный вариант ответа.';
a[0] = ' 1⃣ ';
b[0] = ' 2️⃣ ';
c[0] = ' 3️⃣ ';
d[0] = ' 4️⃣ ';


var inline1 = {
  reply_markup:{
    inline_keyboard: [
      [{text:'Играть 😏', callback_data:'togame'}, {text:'Выйти 😒', callback_data:'nogame'}],
      [{text:'Сколько уч.?', callback_data:'members'}, {text:'Кто уч.?', callback_data:'whois'}]
    ]
  }
};

bot.onText(/запрос/i, (msg) => {
bd.each('SELEST * FROM balance', (err, rows) => {
console.log(rows);
});
});

bot.onText(/конфеты/i, (msg) => {
 f = 'SELEST bal FROM balance WHERE id = ' + msg.from.id;
 bd.get(f, (err, result) => {
   resu = result;
 });
  if (resu === "undefined") {
    console.log('2.1')
 f = 'INSERT INTO balance(id, bal) VALUES (' + msg.from.id + ', 0)';
 bd.run(f, (err, row) => {
 bot.sendMessage(msg.chat.id,'Твой баланс 0 🍬');
 });
} else {
hal1 = resu;
}
hal.length = 0;
bot.sendMessage(msg.chat.id,'Твой баланс '+resu+' 🍬');
bd.close();
})





bot.onText(/\/mute/, (msg) => {
if (admin.includes(msg.from.id)) {
bot.deleteMessage(msg.chat.id, msg.message_id);
muted[muted.length] = msg.reply_to_message.from.id;
muten[muten.length] = msg.reply_to_message.from.first_name;
bot.sendMessage(msg.chat.id,'<a href="tg://user?id='+msg.reply_to_message.from.id+'">'+msg.reply_to_message.from.first_name+'</a> получил(а) мут',{parse_mode:"HTML"})
}
})

bot.onText(/\/mt/, (msg) => {
if (admin.includes(msg.from.id)) {
bot.deleteMessage(msg.chat.id, msg.message_id);
f = 'Нарушители закона😏\n';
for (i=0;i<muted.length;i++){
f+= (i + 1) + ' '+ muten[i] + '\n';
}
bot.sendMessage(msg.chat.id,f);
}
})

bot.onText(/\/unm/, (msg) => {
if (admin.includes(msg.from.id)) {
bot.deleteMessage(msg.chat.id, msg.message_id);
p = muten.indexOf(msg.reply_to_message.from.first_name);
muted.splice(p, 1);
muten.splice(p, 1);
bot.sendMessage(msg.chat.id,'<a href="tg://user?id='+msg.reply_to_message.from.id+'">'+msg.reply_to_message.from.first_name+'</a> избавлен(а) от мута',{parse_mode:"HTML"})
}
})

bot.onText(/\/unall/, (msg) => {
if (admin.includes(msg.from.id)) {
bot.deleteMessage(msg.chat.id, msg.message_id);
muten.length = 0;
muted.length = 0;
bot.sendMessage(msg.chat.id,'Все нарушители закона получили амнистию и избавились от мута');
}
})

bot.onText(/\/help/, (msg) => {
if (admin.includes(msg.from.id)) {
bot.sendMessage(msg.chat.id,'Команды:\n\nСсохранить - после чего бот все сообщения будет писать туда, кде была написана эта команда  последний раз\n\nИиграть - вызывает меню регистрации\n\nСстарт - начинает игру\n\nКто в игре - показывает всех участников и их id\n\nВвопрос 1 - вызывает кнопки, 1️⃣2️⃣3️⃣4️⃣\n\nКто не выбрал - показывает, кто не выбрал\n\nЧто выбрали - показывает что выбрали\n\n/kick - кикает игрока\n\n/add - добавляет участника во время игры\n\nШшансы - показывает шансы игроков\n\nШшанс +/- - привабавляет, либо убавляет шанс игрока, на чьё сообщение было это написано\n\n/give - даёт шанс игроку перевыбрать вариант\n\nОотменить - отменяет игру\n\n/mute - даёт мут игроку\n\n/mt - показывает список нарушителей\n\n/unm - освобождает от мута игрока\n\n/unall - освобождает всех от мута')
} else {
bot.sendMessage(msg.chat.id,'Для тебя у меня нет команд, попробуй попросить их через /link')
}
})

bot.onText(/\/link/i, (msg) => {
bot.sendMessage(msg.chat.id, '<a href="tg://user?id='+admin[0]+'">osculum</a> - создатель бота\n\nВы можете написать ему и увидеть, как действует бот',{parse_mode:"HTML"})
})

bot.onText(/шшанс (.+)/i, (msg, match) => {
if (admin.includes(msg.from.id)) {
p = match[1];
f = ' ';
i = gamer.indexOf(msg.reply_to_message.from.first_name);
if (p === '-') {
f+='уменьшен ';
cg[i]--;
} else if (p === '+') {
f+='увеличен ';
cg[i]++;
}
bot.sendMessage(chatt,'Шанс игрока '+gamer[i]+f+' на единицу');
i = -1;
}
})

bot.onText(/ссохранить/i, (msg) => {
if (admin.includes(msg.from.id)) {
chatt = msg.chat.id;
bot.deleteMessage(chatt, msg.message_id);
bot.sendMessage(chatt,'Чат сохранен'); 
}
})

bot.onText(/оотменить/i, (msg) => {
if (admin.includes(msg.from.id)) {
bot.deleteMessage(msg.chat.id, msg.message_id);
bot.deleteMessage(chatt, del);
bot.sendMessage(chatt,'Игра отменена 🥴'); 
offirs = 0;
gamer.length = 0;
user.length = 0;
summ.length = 0;
chose.length = 0;
gamersb = 0;
}
})

bot.onText(/ииграть/i, (msg) => {
if (admin.includes(msg.from.id)) {
for (i=0; i < 40; i++) {
number[i] = i + 1;
}
del = msg.message_id;
del++;
bot.deleteMessage(msg.chat.id, msg.message_id);
if (offirs === 0) {
bot.sendMessage(chatt,'Стартовал набор игроков для игры «Кто хочет стать квинтиллионером»', inline1); 
offirs = 1;
} else {
bot.sendMessage(msg.chat.id,'Игра уже начата. Ожидайте...');
} 
}
})


bot.on('message',  (msg) => {
if (muted.includes(msg.from.id)) {
bot.deleteMessage(msg.chat.id, msg.message_id);
}
})

bot.on('callback_query', function (msg) {

if (msg.data === 'togame') {
if (gamer.includes(msg.from.first_name)) {
bot.answerCallbackQuery(msg.id,'Вы уже в игре', true)
} else {
gamer[gamersb] =  msg.from.first_name;
user[gamersb] = msg.from.id;
cg[gamersb] = 2;
gamersb++;
bot.answerCallbackQuery(msg.id,'Вы вошли в игру', true);
} 
}

if (msg.data === 'nogame') {
if (user.includes(msg.from.id)) {
p = gamer.indexOf(msg.from.first_name);
gamer.splice(p, 1);
user.splice(p, 1);
cg.splice(p, 1);
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
f += '❗' + gamer[i];
}
bot.answerCallbackQuery(msg.id, f, true);
}

if (msg.data === 'AA') {
if (user.includes(msg.from.id)) {
p = gamer.indexOf(msg.from.first_name);
if (chose[p] === 0) {
bot.answerCallbackQuery(msg.id,'Вы выбрали 1⃣ вариант ответа', true);
  chose[p] = 1;
} else {
bot.answerCallbackQuery(msg.id,'Вы уже выбрали вариант ответа ('+chose[p]+')', true);
}
  p = -1;
} else {
bot.answerCallbackQuery(msg.id,'Вы не в игре', false);
}
}

if (msg.data === 'BB') {
if (user.includes(msg.from.id)) {
p = gamer.indexOf(msg.from.first_name);
if (chose[p] === 0) {
bot.answerCallbackQuery(msg.id,'Вы выбрали 2⃣ вариант ответа', true);
  chose[p] = 2;
} else {
bot.answerCallbackQuery(msg.id,'Вы уже выбрали вариант ответа ('+chose[p]+')', true);
}
p = -1;
} else {
bot.answerCallbackQuery(msg.id,'Вы не в игре', false);
}
}

if (msg.data === 'CC') {
if (user.includes(msg.from.id)) {
p = gamer.indexOf(msg.from.first_name);
if (chose[p] === 0) {
bot.answerCallbackQuery(msg.id,'Вы выбрали 3⃣ вариант ответа', true);
  chose[p] = 3;
} else {
bot.answerCallbackQuery(msg.id,'Вы уже выбрали вариант ответа ('+chose[p]+')', true);
}
  p = -1;
} else {
bot.answerCallbackQuery(msg.id,'Вы не в игре', false);
}
}

if (msg.data === 'DD') {
if (user.includes(msg.from.id)) {
p = gamer.indexOf(msg.from.first_name);
if (chose[p] === 0) {
bot.answerCallbackQuery(msg.id,'Вы выбрали 4⃣ вариант ответа', true);
  chose[p] = 4;
} else {
bot.answerCallbackQuery(msg.id,'Вы уже выбрали вариант ответа ('+chose[p]+')', true);
}
p = -1;
} else {
bot.answerCallbackQuery(msg.id,'Вы не в игре', false);
}
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

})

bot.onText(/сстарт/i, (msg) => {
if (admin.includes(msg.from.id)) {
if (offirs === 1) {
offirs = 2;
bot.deleteMessage(chatt, del);
del = msg.message_id;
del++;
bot.deleteMessage(chatt, msg.message_id);
bot.sendMessage(chatt,'Игра стартовала, ожидайте ведущего');
}
}
})

bot.onText(/ввопрос (.+)/i, (msg, match) => {
if (admin.includes(msg.from.id)) {
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

bot.onText(/\give/, (msg) => {
if (admin.includes(msg.from.id)) {
p = gamer.indexOf(msg.reply_to_message.from.first_name);
bot.deleteMessage(chatt, msg.message_id)
bot.sendMessage(chatt,'Выбор '+gamer[p]+' сброшен');
chose[p] = 0;
p = -1;
}
})



bot.onText(/\/add/i, (msg) => {
if(admin.includes(msg.from.id)) {
gamer[gamersb] =  msg.reply_to_message.from.first_name;
user[gamersb] = msg.reply_to_message.from.id;
cg[gamersb] = 2;
gamersb++;
bot.sendMessage(chatt,'Игрок <a href="tg://user?id='+msg.reply_to_message.from.id+'">'+msg.reply_to_message.from.first_name+'</a> добавлен(а) в игру',{parse_mode:"HTML"});
}
})



bot.onText(/\/kick/, (msg, match) => {
if (admin.includes(msg.from.id)) {
p = gamer.indexOf(msg.reply_to_message.from.first_name);
bot.deleteMessage(chatt, msg.message_id)
bot.sendMessage(chatt, '<a href="tg://user?id='+user[p]+'">'+gamer[p]+'</a> выбыл(а) из игры',{parse_mode:"HTML"})
gamer.splice(p, 1);
user.splice(p, 1);
chose.splice(p, 1);
number.splice(p, 1);
cg.splice(p, 1);
p = -1;
gamersb--;
}
})

bot.onText(/кто в игре/i, (msg) => {
  if (admin.includes(msg.from.id)) {
    bot.deleteMessage(chatt, msg.message_id)
    f = 'В игре:\n';
    for (i = 0; i < user.length; i++) {
    f +=  number[i]+'. ' +gamer[i]+'\n';
    }
    bot.sendMessage(chatt, f)
  }
})

bot.onText(/что выбрали/i, (msg) => {
  if (admin.includes(msg.from.id)) {
    bot.deleteMessage(chatt, msg.message_id)
    f = 'Выбранные ответы:\n';
    for (i = 0; i < user.length; i++) {
      f += number[i] + '. ' + gamer[i] + ' - ' + chose[i] +'\n'
    }
    bot.sendMessage(chatt, f)
  }
})

bot.onText(/шшансы/i, (msg) => {
  if (admin.includes(msg.from.id)) {
    bot.deleteMessage(chatt, msg.message_id);
    f = 'Шансы:\n';
    for (i = 0; i < user.length; i++) {
      f += number[i] + '. ' + gamer[i] + ' - ';
      if (cg[i] === 3) {
f += '3️⃣\n';
} else if (cg[i] === 2) {
f += '2️⃣\n';
} else if (cg[i] === 1) {
f += '1️⃣\n';
} else {
f += '0️⃣\n';
}
}
bot.sendMessage(chatt, f)
}
})

bot.onText(/кто не выбрал/i, (msg) => {
  if (admin.includes(msg.from.id)) {
    bot.deleteMessage(chatt, msg.message_id)
    f = 'Не выбрали:\n';
    for (i = 0; i < user.length; i++) {
      if (chose[i] === 0) {
      f += number[i] + '. ' + gamer[i] + '\n';
      }
    }
    bot.sendMessage(chatt, f)
  }
})


