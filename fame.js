TelegramBot = require('node-telegram-bot-api');
const token = '1097903013:AAHjon47mwC7BWolEwQTFZn2lA91iud0ge8'; 
var bot = new TelegramBot(token, {polling: true});
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
var pas = 1201674;
admin[0] = 684519513;
admin[1] = 858371219;
var number = new Array();
var cg = new Array();

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



bot.onText(/\/help/i, (msg) => {
if (admin.includes(msg.from.id)) {
console.log(msg);
bot.sendMessage(msg.chat.id,'Команды:\n\nСохранить чат - после чего бот все сообщения будет писать туда, кде была написана эта команда  последний раз\n\nИграть в кто хочет стать квинтиллионером - вызывает меню регистрации\n\nСтарт - начинает игру\n\nКто в игре - показывает всех участников и их id\n\nВпрс 1 - вызывает кнопки, 1️⃣2️⃣3️⃣4️⃣\n\nКто не выбрал - показывает, кто не выбрал\n\nЧто выбрали - показывает что выбрали\n\nKk (id игрока) - кикает игрока по его id, показанное в команде Кто в игре\n\nDd и любое число - добавляет пароль, с помощью которого можно добавить участника во время игры, действует 1 раз. чтобы участник вошёл, ему просто надо написать этот пароль после команды ad\n\nШнсы - показывает шансы игроков\n\nъ +/- - привабавляет, либо убавляет шанс игрока, на чьё сообщение было это написано\n\nОтменить - отменяет игру')
} else {
bot.sendMessage(msg.chat.id,'Для тебя у меня нет команд, попробуй попросить их через /link')
}
})

bot.onText(/\/link/i, (msg) => {
bot.sendMessage(msg.chat.id, '<a href="tg://user?id='+admin[0]+'">osculum</a> - создатель бота\n\nВы можете написать ему и увидеть, как действует бот',{parse_mode:"HTML"})
})

bot.onText(/ъ (.+)/, (msg, match) => {
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
bot.sendMessage(chatt,'Шанс игрока'+gamer[i]+f+' на единицу');
i = -1;
}
})

bot.onText(/сохранить чат/i, (msg) => {
if (admin.includes(msg.from.id)) {
chatt = msg.chat.id;
bot.deleteMessage(chatt, msg.message_id);
bot.sendMessage(chatt,'Чат сохранен'); 
}
})

bot.onText(/отменить/i, (msg) => {
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
number.length = 0;
}
})

bot.onText(/играть в кто хочет стать квинтиллионером/i, (msg) => {
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




bot.on('callback_query', function (msg) {

if (msg.data === 'togame') {
if (gamer.includes(msg.from.first_name)) {
bot.answerCallbackQuery(msg.id,'Вы уже в игре', true)
} else {
gamer[gamersb] =  msg.from.first_name;
user[gamersb] = msg.from.id;
cg[gamersb] = 2;
number[gamersb] = gamersb;
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
number.splice(p, 1);
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
bot.answerCallbackQuery(msg.id,'❌ Вы уже выбрали вариант ответа ('+chose[p]+')', true);
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
bot.answerCallbackQuery(msg.id,'❌ Вы уже выбрали вариант ответа ('+chose[p]+')', true);
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
bot.answerCallbackQuery(msg.id,'❌ Вы уже выбрали вариант ответа ('+chose[p]+')', true);
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
bot.answerCallbackQuery(msg.id,'❌ Вы уже выбрали вариант ответа ('+chose[p]+')', true);
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

bot.onText(/старт/i, (msg) => {
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

bot.onText(/впрс (.+)/i, (msg, match) => {
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

bot.onText(/шнс (.+)/i, (msg, match) => {
if (admin.includes(msg.from.id)) {
p = match[1];
p--;
chose[p] = 0;
bot.deleteMessage(chatt, msg.message_id)
bot.sendMessage(chatt,'Выбор '+gamer[p]+' сброшен');
p = -1;
}
})

bot.onText(/dd (.+)/i, (msg, match) => {
if(admin.includes(msg.from.id)) {
pas = match[1]
bot.deleteMessage(chatt, msg.message_id)
bot.sendMessage(msg.chat.id,'Пароль: '+pas);
}
})

bot.onText(/ad (.+)/i, (msg, match) => {
if(pas === match[1]) {
pas = 1201674;
bot.deleteMessage(msg.chat.id, msg.message_id)
gamer[gamersb] =  msg.from.first_name;
user[gamersb] = msg.from.id;
cg[gamersb] = 2;
number [gamersb] = gamersb;
gamersb++;
bot.sendMessage(chatt,msg.from.first_name+' добавлен(а) в игру');
} else {
bot.deleteMessage(msg.chat.id, msg.message_id)
bot.sendMessage(msg.chat.id,'Этот пароль уже использовали');
}
})



bot.onText(/kk (.+)/i, (msg, match) => {
if (admin.includes(msg.from.id)) {
p = match[1];
p--;
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
    f +=  'id.'+(i + 1)+' ' +gamer[i]+'\n';
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

bot.onText(/шнсы/i, (msg) => {
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


