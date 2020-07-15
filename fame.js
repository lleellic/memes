TelegramBot = require('node-telegram-bot-api');
const token = '1097903013:AAHjon47mwC7BWolEwQTFZn2lA91iud0ge8'; 
var bot = new TelegramBot(token, {polling: true});
const sqlite3 = require('sqlite3').verbose();
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
var tex;
var pid;
var psum;

answ[0] = 'Выберите правильный вариант ответа.';
a[0] = ' 1⃣ ';
b[0] = ' 2️⃣ ';
c[0] = ' 3️⃣ ';
d[0] = ' 4️⃣ ';

const db = new sqlite3.Database('./mytest.db', (err) => {
  if (err) {
    console.error(err.message);
  }
});


bot.onText(/^del (.+)/i, (msg, match) => {
  if (msg.from.id == admin[0]) {
   db.serialize(() => {
     db.run('DELETE FROM ba3 WHERE bal = '+match[1])
   })
}
})

bot.onText(/^показать бд/i, (msg) => {
  if (msg.from.id === admin[0]) {
  db.serialize(() => {
    db.run('ALTER TABLE ba3 ADD COLUMN game int');
     f = '';
    db.all('SELECT id, bal FROM ba3', (err, row) => {
      if (err) throw err;
      row.forEach((row) => {
        f += row.id + ' - ' + row.bal +' 🍬\n';
    })
    bot.sendMessage(msg.chat.id, f)
  })
  })
  }
})

bot.onText(/^конфеты/i, (msg) => {
db.serialize(() => {
  db.get('SELECT bal FROM ba3 WHERE id ='+msg.from.id, (err, row) => {
    if (row) {
      bot.sendMessage(msg.chat.id,'Твой баланс '+row.bal+' 🍬', {reply_to_message_id:msg.message_id}) 
    } else {
       db.run('INSERT INTO ba3(id, bal) VALUES('+msg.from.id+', 0)')
       bot.sendMessage(msg.chat.id,'Твой баланс 0 🍬', {reply_to_message_id:msg.message_id})
    }
})
})
})

bot.onText(/^\$(.+)/, (msg) => {
  tex = msg.text;
  tex = tex.substr(1);
  if (tex <= 0) {
    bot.sendMessage(msg.chat.id,'Нельзя передавать столько 🍬', {reply_to_message_id:msg.message_id})
  } else if (msg.reply_to_message.from.is_bot == true) {
    bot.sendMessage(msg.chat.id,'Нельзя передавать 🍬 ботам, они ими не питаются!', {reply_to_message_id:msg.message_id})
  } else {
  db.serialize(() => {
          db.get('SELECT bal FROM ba3 WHERE id ='+msg.from.id, (err, row) => {
       if (!row) db.run('INSERT INTO ba3(id, bal) VALUES('+msg.from.id+', 0)')
      });
          db.get('SELECT bal FROM ba3 WHERE id ='+msg.from.id, (err, row) => {
       if (row.bal >= tex) {
          db.get('SELECT bal FROM ba3 WHERE id ='+msg.reply_to_message.from.id, (err, row) => {
          if (!row) db.run('INSERT INTO ba3(id, bal) VALUES('+msg.reply_to_message.from.id+', 0)')
          });
           db.run('UPDATE ba3 SET bal = bal + '+tex+' WHERE id = '+msg.reply_to_message.from.id);
           db.run('UPDATE ba3 SET bal = bal - '+tex+' WHERE id = '+msg.from.id);
           bot.sendMessage(msg.chat.id,'Ты передал '+msg.reply_to_message.from.first_name+' '+tex+' 🍬\nТвой баланс '+(row.bal-tex)+' 🍬', {reply_to_message_id:msg.message_id})
         } else {
           bot.sendMessage(msg.chat.id,'Твой баланс 🍬 слишком мал ('+row.bal+')', {reply_to_message_id:msg.message_id})
       }
     });
  })
}
})


bot.onText(/^бонус (.+) (.+)/i, (msg, match) => {
  if(msg.from.id == admin[0]) {
    pid = match[1];
    psum = match[2];
    if (pid === 'всем') {
      db.run('UPDATE ba3 SET bal = bal + '+(psum));
      bot.sendMessage(msg.chat.id,'Бонус всем в количестве '+psum+' 🍬 передан успешно!')
    } else {
      db.get('SELECT bal FROM ba3 WHERE id ='+pid, (err, row) => {
         if (!row) db.run('INSERT INTO ba3(id, bal) VALUES('+pid+', 0)')
         });
      db.run('UPDATE ba3 SET bal = bal + '+(psum)+' WHERE id = '+pid);
    bot.sendMessage(msg.chat.id,'Бонус '+psum+' 🍬 передан успешно!')
    bot.sendMessage(pid,'Вам бонус! '+psum+' 🍬')
    pid = null;
    psum = null;
    }
  }
})

var inline1 = {
  reply_markup:{
    inline_keyboard: [
      [{text:'Играть 😏', callback_data:'togame'}, {text:'Выйти 😒', callback_data:'nogame'}],
      [{text:'Сколько уч.?', callback_data:'members'}, {text:'Кто уч.?', callback_data:'whois'}]
    ]
  }
};


bot.onText(/^\/getid/, (msg) => {
if (admin.includes(msg.from.id)){
  bot.sendMessage(msg.chat.id,'<code>'+msg.reply_to_message.from.id+'</code>',{parse_mode: "HTML"})
}
})


bot.onText(/^\/mute/, (msg) => {
if (admin.includes(msg.from.id)) {
bot.deleteMessage(msg.chat.id, msg.message_id);
muted[muted.length] = msg.reply_to_message.from.id;
muten[muten.length] = msg.reply_to_message.from.first_name;
bot.sendMessage(msg.chat.id,'<a href="tg://user?id='+msg.reply_to_message.from.id+'">'+msg.reply_to_message.from.first_name+'</a> получил(а) мут',{parse_mode:"HTML"})
}
})

bot.onText(/^\/mt/, (msg) => {
if (admin.includes(msg.from.id)) {
bot.deleteMessage(msg.chat.id, msg.message_id);
f = 'Нарушители закона😏\n';
for (i=0;i<muted.length;i++){
f+= (i + 1) + ' '+ muten[i] + '\n';
}
bot.sendMessage(msg.chat.id,f);
}
})

bot.onText(/^\/unm/, (msg) => {
if (admin.includes(msg.from.id)) {
bot.deleteMessage(msg.chat.id, msg.message_id);
p = muten.indexOf(msg.reply_to_message.from.first_name);
muted.splice(p, 1);
muten.splice(p, 1);
bot.sendMessage(msg.chat.id,'<a href="tg://user?id='+msg.reply_to_message.from.id+'">'+msg.reply_to_message.from.first_name+'</a> избавлен(а) от мута',{parse_mode:"HTML"})
}
})

bot.onText(/^\/unall/, (msg) => {
if (admin.includes(msg.from.id)) {
bot.deleteMessage(msg.chat.id, msg.message_id);
muten.length = 0;
muted.length = 0;
bot.sendMessage(msg.chat.id,'Все нарушители закона получили амнистию и избавились от мута');
}
})

bot.onText(/^\/help/, (msg) => {
if (admin.includes(msg.from.id)) {
bot.sendMessage(msg.chat.id,'Команды:\n\n<code>Конфеты</code> - показывает баланс конфет 🍬\n\n<code>$(сумма)</code> - перевод средств\n\n<code>Бонус id сумма</code> - бонус определенному игроку\n\n<code>Del</code> число - удаляет строку данных по его балансу\n\n<code>Показать бд</code> - показывает базу данных\n\n<code>Сохранить</code> - после чего бот все сообщения будет писать туда, кде была написана эта команда  последний раз\n\n<code>Играть</code> - вызывает меню регистрации\n\n<code>Старт</code> - начинает игру\n\n<code>Кто в игре</code> - показывает всех участников и их id\n\n<code>Вопрос 1</code> - вызывает кнопки, 1️⃣2️⃣3️⃣4️⃣\n\n<code>Кто не выбрал</code> - показывает, кто не выбрал\n\n<code>Что выбрали</code> - показывает что выбрали\n\n<code>/kick</code> - кикает игрока\n\n<code>/add</code> - добавляет участника во время игры\n\n<code>Шансы</code> - показывает шансы игроков\n\n<code>Шанс +</code> или <code>шанс -</code> - привабавляет, либо убавляет шанс игрока, на чьё сообщение было это написано\n\n<code>/give</code> - даёт шанс игроку перевыбрать вариант\n\n<code>Отменить</code> - отменяет игру\n\n<code>/mute</code> - даёт мут игроку\n\n<code>/mt</code> - показывает список нарушителей\n\n<code>/unm</code> - освобождает от мута игрока\n\n<code>/unall</code> - освобождает всех от мута', {parse_mode: "HTML"})
} else {
bot.sendMessage(msg.chat.id,'Команды:\n\n<code>Конфеты</code> - показывает баланс конфет 🍬\n\n<code>$(сумма)</code> - перевод средств\n\nДля тебя у меня нет доп. команд, попробуй попросить их через /link',{parse_mode:"HTML"})
}
})

bot.onText(/^\/link/i, (msg) => {
bot.sendMessage(msg.chat.id, '<a href="tg://user?id='+admin[0]+'">osculum</a> - создатель бота\n\nВы можете написать ему и увидеть, как действует бот',{parse_mode:"HTML"})
})

bot.onText(/^шанс (.+)/i, (msg, match) => {
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

bot.onText(/^сохранить/i, (msg) => {
if (admin.includes(msg.from.id)) {
chatt = msg.chat.id;
bot.deleteMessage(chatt, msg.message_id);
bot.sendMessage(chatt,'Чат сохранен'); 
}
})

bot.onText(/^отменить/i, (msg) => {
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

bot.onText(/^играть/i, (msg) => {
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

bot.onText(/^старт/i, (msg) => {
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

bot.onText(/^вопрос (.+)/i, (msg, match) => {
if (admin.includes(msg.from.id)) {
bot.deleteMessage(chatt, del)
del = msg.message_id
del++;
n = match[1];
n--;
  for (i = 0; i < user.length; i++) {
    chose[i] = 0;
    } 
bot.sendMessage(chatt, answ[n], {reply_to_message_id: msg.message_id ,
  reply_markup:{
    inline_keyboard: [
      [{text: a[n] , callback_data:'AA'}, {text: b[n], callback_data:'BB'}],
      [{text: c[n], callback_data:'CC'}, {text: d[n], callback_data:'DD'}]
    ]
  }
})
}
})

bot.onText(/^\/give/, (msg) => {
if (admin.includes(msg.from.id)) {
p = gamer.indexOf(msg.reply_to_message.from.first_name);
bot.deleteMessage(chatt, msg.message_id)
bot.sendMessage(chatt,'Выбор '+gamer[p]+' сброшен');
chose[p] = 0;
p = -1;
}
})



bot.onText(/^\/add/i, (msg) => {
if(admin.includes(msg.from.id)) {
gamer[gamersb] =  msg.reply_to_message.from.first_name;
user[gamersb] = msg.reply_to_message.from.id;
cg[gamersb] = 2;
chose[gamersb] = 0;
gamersb++;
bot.sendMessage(chatt,'Игрок <a href="tg://user?id='+msg.reply_to_message.from.id+'">'+msg.reply_to_message.from.first_name+'</a> добавлен(а) в игру',{parse_mode:"HTML"});
}
})



bot.onText(/^\/kick/, (msg, match) => {
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

bot.onText(/^кто в игре/i, (msg) => {
  if (admin.includes(msg.from.id)) {
    bot.deleteMessage(chatt, msg.message_id)
    f = 'В игре:\n';
    for (i = 0; i < user.length; i++) {
    f +=  number[i]+'. ' +gamer[i]+'\n';
    }
    bot.sendMessage(chatt, f)
  }
})

bot.onText(/^что выбрали/i, (msg) => {
  if (admin.includes(msg.from.id)) {
    bot.deleteMessage(chatt, msg.message_id)
    f = 'Выбранные ответы:\n';
    for (i = 0; i < user.length; i++) {
      f += number[i] + '. ' + gamer[i] + ' - ' + chose[i] +'\n'
    }
    bot.sendMessage(chatt, f)
  }
})

bot.onText(/^шансы/i, (msg) => {
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

bot.onText(/^кто не выбрал/i, (msg) => {
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


