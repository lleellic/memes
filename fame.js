TelegramBot = require('node-telegram-bot-api');
const token = '1097903013:AAHjon47mwC7BWolEwQTFZn2lA91iud0ge8'; 
var bot = new TelegramBot(token, {polling: true});
const sqlite3 = require('sqlite3').verbose();
var chatt; 
var offirs = 0;
var gamersb = 0;
var p;
var ag;
var f2;
var bb;
var i2;
var f;
var em;
var found;
var seek = new Array();
var seekfn = new Array();
var hide = new Array();
var hidefn = new Array();
var place = new Array();
var placeval = new Array();
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
var pole = new Array();
var pole1 = new Array();
var opt;
var s;
var h;
var can;
var inl;
var rea;
answ[0] = 'Выберите правильный вариант ответа.';
a[0] = ' 1⃣ ';
b[0] = ' 2️⃣ ';
c[0] = ' 3️⃣ ';
d[0] = ' 4️⃣ ';

var i2 = {
  parse_mode: "HTML",
  reply_markup:{
    inline_keyboard: [
      [{text: pole[1], callback_data:1}, {text: pole[2], callback_data:2}],
      [{text: pole[3], callback_data:3}, {text: pole[4], callback_data:4}],
      [{text: 'Готово', callback_data:'ready'}]
    ]
  }
};

var i3 = {
  parse_mode: "HTML",
  reply_markup:{
    inline_keyboard: [
      [{text: pole[1], callback_data:1}, {text: pole[2], callback_data:2}, {text: pole[3], callback_data:3}],
      [{text: pole[4], callback_data:4}, {text: pole[5], callback_data:5}, {text: pole[6], callback_data:6}],
      [{text: pole[7], callback_data:7}, {text: pole[8], callback_data:8}, {text: pole[9], callback_data:9}],
      [{text: 'Готово', callback_data:'ready'}]
    ]
  }
};

var i4 = {  
  parse_mode: "HTML",
  reply_markup:{
    inline_keyboard: [
      [{text: pole[1], callback_data:1},   {text: pole[2], callback_data:2},   {text: pole[3], callback_data:3},   {text: pole[4],  callback_data:4} ],
      [{text: pole[5], callback_data:5},   {text: pole[6], callback_data:6},   {text: pole[7], callback_data:7},   {text: pole[8],  callback_data:8} ],
      [{text: pole[9], callback_data:9},   {text: pole[10], callback_data:10}, {text: pole[11], callback_data:11}, {text: pole[12], callback_data:12}],
      [{text: pole[13], callback_data:13}, {text: pole[14], callback_data:14}, {text: pole[15], callback_data:15}, {text: pole[16], callback_data:16}],
      [{text: 'Готово', callback_data:'ready'}]
    ]
  }
};

var i5 = {
  parse_mode: "HTML",
  reply_markup:{
    inline_keyboard: [
      [{text: pole[1], callback_data:1},     {text: pole[2], callback_data:2},     {text: pole[3], callback_data:3},     {text: pole[4],  callback_data:4},   {text: pole[5], callback_data:5}  ],
      [{text: pole[6], callback_data:6},     {text: pole[7], callback_data:7},     {text: pole[8], callback_data:8},     {text: pole[9],  callback_data:9},   {text: pole[10], callback_data:10}],
      [{text: pole[11], callback_data:11},   {text: pole[12], callback_data:12},   {text: pole[12], callback_data:13},   {text: pole[14],  callback_data:14}, {text: pole[15], callback_data:15}],
      [{text: pole[16], callback_data:16},   {text: pole[17], callback_data:17},   {text: pole[18], callback_data:18},   {text: pole[19],  callback_data:19}, {text: pole[20], callback_data:20}],
      [{text: pole[21], callback_data:21},   {text: pole[22], callback_data:22},   {text: pole[23], callback_data:23},   {text: pole[24],  callback_data:24}, {text: pole[25], callback_data:25}],
      [{text: 'Готово', callback_data:'ready'}]
    ]
  }
}; 




const db = new sqlite3.Database('./mytest.db', (err) => {
  if (err) {
    console.error(err.message);
  }
});


var inline3 = {
  reply_markup:{
    inline_keyboard: [
      [{text:'Играть 😏', callback_data:'togame2'}, {text:'Выйти 😒', callback_data:'nogame2'}],
      [{text:'Сколько уч.?', callback_data:'members'}, {text:'Кто уч.?', callback_data:'whois'}]
    ]
  }
};





bot.onText(/^прятки$/i, (msg) => {
  rea = 2;
  chatt = msg.chat.id;
del = msg.message_id;
del++;
bot.deleteMessage(msg.chat.id, msg.message_id);
if (offirs === 0) {
bot.sendMessage(chatt,'Стартовал набор игроков для игры «Прятки»', inline3); 
offirs = 1;
} else {
bot.sendMessage(msg.chat.id,'Игра уже начата. Ожидайте...');
} 
})



bot.onText(/^прятаться$/i, (msg) => {
if (offirs === 1) {
if (user.includes(msg.from.id)) {
if (gamersb > 1) {
  bot.deleteMessage(chatt, del);
  found = 0;
  em = msg.message_id;
  em++;
  for (i = 0; i < 36; i++) {
  pole[i] = ' ⏹ ';
}
      for (i = 0; i < 36; i++) {
  placeval[i] = 0;
}
  
i2 = {
  parse_mode: "HTML",
  reply_markup:{
    inline_keyboard: [
      [{text: pole[1], callback_data:1}, {text: pole[2], callback_data:2}],
      [{text: pole[3], callback_data:3}, {text: pole[4], callback_data:4}],
      [{text: 'Готово', callback_data:'ready'}]
    ]
  }
};

i3 = {
  parse_mode: "HTML",
  reply_markup:{
    inline_keyboard: [
      [{text: pole[1], callback_data:1}, {text: pole[2], callback_data:2}, {text: pole[3], callback_data:3}],
      [{text: pole[4], callback_data:4}, {text: pole[5], callback_data:5}, {text: pole[6], callback_data:6}],
      [{text: pole[7], callback_data:7}, {text: pole[8], callback_data:8}, {text: pole[9], callback_data:9}],
      [{text: 'Готово', callback_data:'ready'}]
    ]
  }
};

i4 = {  
  parse_mode: "HTML",
  reply_markup:{
    inline_keyboard: [
      [{text: pole[1], callback_data:1},   {text: pole[2], callback_data:2},   {text: pole[3], callback_data:3},   {text: pole[4],  callback_data:4} ],
      [{text: pole[5], callback_data:5},   {text: pole[6], callback_data:6},   {text: pole[7], callback_data:7},   {text: pole[8],  callback_data:8} ],
      [{text: pole[9], callback_data:9},   {text: pole[10], callback_data:10}, {text: pole[11], callback_data:11}, {text: pole[12], callback_data:12}],
      [{text: pole[13], callback_data:13}, {text: pole[14], callback_data:14}, {text: pole[15], callback_data:15}, {text: pole[16], callback_data:16}],
      [{text: 'Готово', callback_data:'ready'}]
    ]
  }
};

i5 = {
  parse_mode: "HTML",
  reply_markup:{
    inline_keyboard: [
      [{text: pole[1], callback_data:1},     {text: pole[2], callback_data:2},     {text: pole[3], callback_data:3},     {text: pole[4],  callback_data:4},   {text: pole[5], callback_data:5}  ],
      [{text: pole[6], callback_data:6},     {text: pole[7], callback_data:7},     {text: pole[8], callback_data:8},     {text: pole[9],  callback_data:9},   {text: pole[10], callback_data:10}],
      [{text: pole[11], callback_data:11},   {text: pole[12], callback_data:12},   {text: pole[12], callback_data:13},   {text: pole[14],  callback_data:14}, {text: pole[15], callback_data:15}],
      [{text: pole[16], callback_data:16},   {text: pole[17], callback_data:17},   {text: pole[18], callback_data:18},   {text: pole[19],  callback_data:19}, {text: pole[20], callback_data:20}],
      [{text: pole[21], callback_data:21},   {text: pole[22], callback_data:22},   {text: pole[23], callback_data:23},   {text: pole[24],  callback_data:24}, {text: pole[25], callback_data:25}],
      [{text: 'Готово', callback_data:'ready'}]
    ]
  }
}; 
    
offirs = 2;
del = msg.message_id;
del++;
bot.deleteMessage(chatt, msg.message_id);
switch(gamersb) {
  case 2: s = 1; can = 2; inl = 2; break;
  case 3: s = 1; can = 5; inl = 3; break;
  case 4: s = 1; can = 4; inl = 3; break;
  case 5: s = 1; can = 4; inl = 3; break;
  case 6: s = 2; can = 9; inl = 4; break;
  case 7: s = 2; can = 8; inl = 4; break;
  case 8: s = 2; can = 7; inl = 4; break;
  case 9: s = 3; can = 13; inl = 5; break;
  case 10: s = 3; can = 13; inl = 5; break;
  case 11: s = 3; can = 12; inl = 5; break;
  case 12: s = 3; can = 11; inl = 5; break;
  case 13: s = 3; can = 10; inl = 5; break;
  case 14: s = 3; can = 10; inl = 5; break;
  case 15: s = 4; can = 20; inl = 6; break;
  case 16: s = 4; can = 19; inl = 6; break;
  case 17: s = 4; can = 18; inl = 6; break;
  case 18: s = 4; can = 17; inl = 6; break;
  case 19: s = 4; can = 17; inl = 6; break;
}
  switch(inl) {
  case 2: opt = i2; break;
  case 3: opt = i3; break;
  case 4: opt = i4; break;
  case 5: opt = i5; break;
  case 6: opt = 0; break;  
}
f = '';
for (i = 0; i < s; i += 0) {
p = Math.floor(Math.random() * gamersb); 
if (!seek.includes(user[p])) {
  seek[seek.length] = user[p];
  seekfn[seekfn.length] = gamer[p];
  i++;
  f += i+'. <a href="tg://user?id='+user[p]+'">'+gamer[p]+'</a>\n';
}
}   
 
  for (i = 0; i < gamer.length; i++) {
    if (!seek.includes(user[i])) {
      hide[hide.length] = user[i];
      hidefn[hidefn.length] = gamer[i];
    }
  }
  for (i = 0; i < hide.length; i++) {
    place[i] = 0;
  }
bot.sendMessage(chatt,'Игра стартовала!\n\nИскатели:\n'+f+'\nОстальные прячущиеся - '+hide.length+'\n\nВнимание!\nКоманда: прятаться!', opt);
} else {
  bot.sendMessage(chatt,'Слишком мало игроков, необходимо минимум 2',{reply_to_message_id:msg.message_id});
} 
}
}
})






bot.onText(/^del (.+)$/i, (msg, match) => {
  if (msg.from.id == admin[0]) {
   db.serialize(() => {
     db.run('DELETE FROM ba3 WHERE bal = '+match[1])
   })
}
})

bot.onText(/^показать бд$/i, (msg) => {
  if (admin.includes(msg.from.id)) {
  db.serialize(() => {
     f = '';
    db.all('SELECT id, bal, fn FROM ba3', (err, row) => {
      if (err) throw err;
      i = 0;
      row.forEach((row) => {
        i++;
        if (i > 15) {
              i = 0;
              bot.sendMessage(msg.chat.id, f, {parse_mode:"HTML"});
          f = '';
        }
        f += '<code>'+row.id + '</code> '+row.fn+' - ' + row.bal +' 🍬\n';
    })
    bot.sendMessage(msg.chat.id, f, {parse_mode: "HTML"})
  })
  })
  }
})

bot.onText(/^топ конфет$/i, (msg) => {
  db.serialize(() => {
     f = 'Глобальный топ 10 по количеству 🍬:\n\n';
    db.all('SELECT id, bal, fn FROM ba3 ORDER BY bal DESC LIMIT 10', (err, row) => {
      if (err) throw err;
      i = 0;
      row.forEach((row) => {
        i++;
        f += i + '. '+row.fn+'  ' + row.bal +' 🍬\n';
    })
    bot.sendMessage(msg.chat.id, f);
      f = '';
  })
  })
})





bot.onText(/^конфеты$/i, (msg) => {
db.serialize(() => {
  db.get('SELECT bal FROM ba3 WHERE id ='+msg.from.id, (err, row) => {
    if (row) {
      db.run('UPDATE ba3 SET fn = "'+msg.from.first_name+'" WHERE id = '+msg.from.id);
      bot.sendMessage(msg.chat.id,'Твой баланс '+row.bal+' 🍬', {reply_to_message_id:msg.message_id}) 
    } else {
       db.run('INSERT INTO ba3(id, fn, bal) VALUES('+msg.from.id+', "'+msg.from.first_name+'", 5)')
       bot.sendMessage(msg.chat.id,'Твой баланс 5 🍬', {reply_to_message_id:msg.message_id})
    }
})
})
})

bot.onText(/^\$(.+)$/, (msg) => {
  tex = msg.text;
  tex = tex.substr(1);
  if (msg.from.id != msg.reply_to_message.from.id) {
  if (tex <= 0) {
    bot.sendMessage(msg.chat.id,'Нельзя передавать столько 🍬', {reply_to_message_id:msg.message_id})
  } else if (msg.reply_to_message.from.is_bot == true) {
    bot.sendMessage(msg.chat.id,'Нельзя передавать 🍬 ботам, они ими не питаются!', {reply_to_message_id:msg.message_id})
  } else {
  db.serialize(() => {
          db.get('SELECT bal FROM ba3 WHERE id ='+msg.from.id, (err, row) => {
          if (!row) db.run('INSERT INTO ba3(id, fn, bal) VALUES('+msg.from.id+', "'+msg.from.first_name+'", 5)')
          });
          db.get('SELECT bal FROM ba3 WHERE id ='+msg.from.id, (err, row) => {
       if (row.bal >= tex) {
          db.get('SELECT bal FROM ba3 WHERE id ='+msg.reply_to_message.from.id, (err, row) => {
          if (!row) db.run('INSERT INTO ba3(id, fn, bal) VALUES('+msg.reply_to_message.from.id+', "'+msg.reply_to_message.from.first_name+'", 5)')
          });
           db.run('UPDATE ba3 SET bal = bal + '+tex+' WHERE id = '+msg.reply_to_message.from.id);
           db.run('UPDATE ba3 SET bal = bal - '+tex+' WHERE id = '+msg.from.id);
           bot.sendMessage(msg.chat.id,'Ты передал '+msg.reply_to_message.from.first_name+' '+tex+' 🍬. Твой баланс '+(row.bal-tex)+' 🍬', {reply_to_message_id:msg.message_id})
         } else {
           bot.sendMessage(msg.chat.id,'Твой баланс 🍬 слишком мал ('+row.bal+')', {reply_to_message_id:msg.message_id})
       }
     });
  })
}
}
})


bot.onText(/^бонус (.+) (.+)$/i, (msg, match) => {
  if(admin.includes(msg.from.id)) {
    pid = match[1];
    psum = match[2];
    if (pid === 'всем') {
      db.run('UPDATE ba3 SET bal = bal + '+(psum));
      bot.sendMessage(msg.chat.id,'Бонус всем в количестве '+psum+' 🍬 передан успешно!')
    } else {
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


bot.onText(/^\/getid$|^\/getid@Weearntbot$/, (msg) => {
if (admin.includes(msg.from.id)){
  bot.sendMessage(msg.chat.id,'<code>'+msg.reply_to_message.from.id+'</code>',{parse_mode: "HTML"})
}
})


bot.onText(/^\/mute$|^\/mute@Weearntbot$/, (msg) => {
if (admin.includes(msg.from.id)) {
bot.deleteMessage(msg.chat.id, msg.message_id);
muted[muted.length] = msg.reply_to_message.from.id;
muten[muten.length] = msg.reply_to_message.from.first_name;
bot.sendMessage(msg.chat.id,'<a href="tg://user?id='+msg.reply_to_message.from.id+'">'+msg.reply_to_message.from.first_name+'</a> получил(а) мут',{parse_mode:"HTML"})
}
})

bot.onText(/^\/muted$|^\/muted@Weearntbot/, (msg) => {
if (admin.includes(msg.from.id)) {
bot.deleteMessage(msg.chat.id, msg.message_id);
f = 'Нарушители закона😏\n';
for (i=0;i<muted.length;i++){
f+= (i + 1) + ' '+ muten[i] + '\n';
}
bot.sendMessage(msg.chat.id,f);
}
})

bot.onText(/^\/unmute$|^\/unmute@Weearntbot$/, (msg) => {
if (admin.includes(msg.from.id)) {
bot.deleteMessage(msg.chat.id, msg.message_id);
p = muten.indexOf(msg.reply_to_message.from.first_name);
muted.splice(p, 1);
muten.splice(p, 1);
bot.sendMessage(msg.chat.id,'<a href="tg://user?id='+msg.reply_to_message.from.id+'">'+msg.reply_to_message.from.first_name+'</a> избавлен(а) от мута',{parse_mode:"HTML"})
}
})

bot.onText(/^\/unmuteall$|^\/unmuteall@Weearntbot$/, (msg) => {
if (admin.includes(msg.from.id)) {
bot.deleteMessage(msg.chat.id, msg.message_id);
muten.length = 0;
muted.length = 0;
bot.sendMessage(msg.chat.id,'Все нарушители закона получили амнистию и избавились от мута');
}
})

bot.onText(/^\/help$|^\/help@Weearntbot$/, (msg) => {
  console.log(msg.chat.type);
if (msg.chat.type == 'private') {
if (admin.includes(msg.from.id)) {
bot.sendMessage(msg.chat.id,'Команды:\n\n<code>Конфеты</code> - показывает баланс конфет 🍬\n\n<code>$(сумма)</code> - перевод средств\n\n<code>Топ конфет</code> - показывает глобальный топ первых 10 по балансу 🍬\n\n<code>Прятки</code> - запускает игру в прятки\n\n<code>Прятаться</code> - игроки начнут прятаться', {parse_mode: "HTML"});
bot.sendMessage(msg.chat.id,'Доп. команды:\n\n<code>Бонус id сумма</code> - бонус определенному игроку\n\n<code>Del</code> число - удаляет строку данных по его балансу\n\n<code>Показать бд</code> - показывает базу данных\n\n<code>Играть</code> - вызывает меню регистрации\n\n<code>Старт</code> - начинает игру\n\n<code>Кто в игре</code> - показывает всех участников и их id\n\n<code>Вопрос 1</code> - вызывает кнопки, 1️⃣2️⃣3️⃣4️⃣\n\n<code>Кто не выбрал</code> - показывает, кто не выбрал\n\n<code>Что выбрали</code> - показывает что выбрали\n\n<code>/kick</code> - кикает игрока\n\n<code>/add</code> - добавляет участника во время игры\n\n<code>Шансы</code> - показывает шансы игроков\n\n<code>Шанс +</code> или <code>шанс -</code> - привабавляет, либо убавляет шанс игрока, на чьё сообщение было это написано\n\n<code>/give</code> - даёт шанс игроку перевыбрать вариант\n\n<code>Отменить</code> - отменяет игру\n\n<code>/mute</code> - даёт мут игроку\n\n<code>/muted</code> - показывает список нарушителей\n\n<code>/unmute</code> - освобождает от мута игрока\n\n<code>/unmuteall</code> - освобождает всех от мута\n\n<code>/getid</code> - показывает id пользователя', {parse_mode: "HTML"})
} else {
bot.sendMessage(msg.chat.id,'Команды:\n\n<code>Конфеты</code> - показывает баланс конфет 🍬\n\n<code>$(сумма)</code> - перевод средств\n\n<code>Топ конфет</code> - показывает глобальный топ первых 10 по балансу 🍬\n\n<code>Прятки</code> - запускает игру в прятки\n\n</code>Прятаться</code> - игроки начнут прятаться\n\nДля тебя у меня нет доп. команд, попробуй попросить их через /link', {parse_mode:"HTML"})
}
} else {
bot.sendMessage(msg.chat.id,'Команду /help можно использовать только в ЛС с ботом',{reply_to_message_id: msg.message_id});
}
})

bot.onText(/^\/start$|^\/start@Weearntbot$/, (msg) => {
  bot.sendMessage(msg.chat.id,'Привет! Ты можешь узнать больше обо мне, написав команду /help');
  db.serialize(() => {
  db.get('SELECT bal FROM ba3 WHERE id ='+msg.from.id, (err, row) => {
    if (!row) db.run('INSERT INTO ba3(id, fn, bal) VALUES('+msg.from.id+', "'+msg.from.first_name+'", 5)')
})
})
})

bot.onText(/^\/link$|^\/link@Weearntbot$/i, (msg) => {
bot.sendMessage(msg.chat.id, '<a href="tg://user?id='+admin[0]+'">osculum</a> - создатель бота\n\nВы можете написать ему и увидеть, как действует бот\n\nТакже существует канал @weearnt , в котором вы можете узнать о текущих обновлениях',{parse_mode:"HTML"})
})

bot.onText(/^шанс (.+)$/i, (msg, match) => {
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

bot.onText(/^отменить$/i, (msg) => {
if (admin.includes(msg.from.id)) {
bot.deleteMessage(msg.chat.id, msg.message_id);
bot.deleteMessage(chatt, del);
bot.sendMessage(chatt,'Игра отменена 🥴'); 
offirs = 0;
gamer.length = 0;
user.length = 0;
summ.length = 0;
chose.length = 0;
hide.length = 0;
hidefn.length = 0;
seek.length = 0;
seekfn.length = 0;
gamersb = 0;
}
})

bot.onText(/^играть$/i, (msg) => {
if (admin.includes(msg.from.id)) {
  chatt = msg.chat.id;
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

if (msg.data > 0) {
  if (msg.data < 20) {
      if (rea > 0) {
      if (hide.includes(msg.from.id)) {
      if (place.includes(msg.data)) {
        bot.answerCallbackQuery(msg.id,'Место занято', false);
      } else if (placeval[msg.data] > 0) {
      bot.answerCallbackQuery(msg.id,'Вы уже спрятались', false);
      } else {
          place[hidefn.indexOf(msg.from.first_name)] = msg.data;
          placeval[msg.data] = 1;
        bot.answerCallbackQuery(msg.id,'Вы выбрали это место', true);
      }
  } else {
    bot.answerCallbackQuery(msg.id,'Не вы прячетесь', false);
  }
  } else {
    if (seek.includes(msg.from.id)) {
      if (can !== 0) {
      if (placeval[msg.data] === 2) {
        bot.answerCallbackQuery(msg.id,'Сюда уже тыкали', false);
      } else if (placeval[msg.data] === 1) {
        can--;
        bot.answerCallbackQuery(msg.id,'Вы нашли игрока!', true);
        found++;
        placeval[msg.data] = 2;
        pole[msg.data] = ' ✅ ';
         i2 = {
  parse_mode: "HTML",
  reply_markup:{
    inline_keyboard: [
      [{text: pole[1], callback_data:1}, {text: pole[2], callback_data:2}],
      [{text: pole[3], callback_data:3}, {text: pole[4], callback_data:4}]
    ]
  }
};

i3 = {
  parse_mode: "HTML",
  reply_markup:{
    inline_keyboard: [
      [{text: pole[1], callback_data:1}, {text: pole[2], callback_data:2}, {text: pole[3], callback_data:3}],
      [{text: pole[4], callback_data:4}, {text: pole[5], callback_data:5}, {text: pole[6], callback_data:6}],
      [{text: pole[7], callback_data:7}, {text: pole[8], callback_data:8}, {text: pole[9], callback_data:9}]
    ]
  }
};

i4 = {  
  parse_mode: "HTML",
  reply_markup:{
    inline_keyboard: [
      [{text: pole[1], callback_data:1},   {text: pole[2], callback_data:2},   {text: pole[3], callback_data:3},   {text: pole[4],  callback_data:4} ],
      [{text: pole[5], callback_data:5},   {text: pole[6], callback_data:6},   {text: pole[7], callback_data:7},   {text: pole[8],  callback_data:8} ],
      [{text: pole[9], callback_data:9},   {text: pole[10], callback_data:10}, {text: pole[11], callback_data:11}, {text: pole[12], callback_data:12}],
      [{text: pole[13], callback_data:13}, {text: pole[14], callback_data:14}, {text: pole[15], callback_data:15}, {text: pole[16], callback_data:16}]
    ]
  }
};

i5 = {
  parse_mode: "HTML",
  reply_markup:{
    inline_keyboard: [
      [{text: pole[1], callback_data:1},     {text: pole[2], callback_data:2},     {text: pole[3], callback_data:3},     {text: pole[4],  callback_data:4},   {text: pole[5], callback_data:5}  ],
      [{text: pole[6], callback_data:6},     {text: pole[7], callback_data:7},     {text: pole[8], callback_data:8},     {text: pole[9],  callback_data:9},   {text: pole[10], callback_data:10}],
      [{text: pole[11], callback_data:11},   {text: pole[12], callback_data:12},   {text: pole[12], callback_data:13},   {text: pole[14],  callback_data:14}, {text: pole[15], callback_data:15}],
      [{text: pole[16], callback_data:16},   {text: pole[17], callback_data:17},   {text: pole[18], callback_data:18},   {text: pole[19],  callback_data:19}, {text: pole[20], callback_data:20}],
      [{text: pole[21], callback_data:21},   {text: pole[22], callback_data:22},   {text: pole[23], callback_data:23},   {text: pole[24],  callback_data:24}, {text: pole[25], callback_data:25}]
    ]
  }
}; 
           switch(inl) {
            case 2: opt = i2; break;
            case 3: opt = i3; break;
            case 4: opt = i4; break;
            case 5: opt = i5; break;
            case 6: opt = 0; break;  
           };
       opt.chat_id = chatt;
       opt.message_id = em;
        bot.editMessageText('Игра стартовала!\n\nШансов на поиск ('+can+')\n\nИскатели:\n'+f+'\nОстальные прячущиеся - '+(hide.length-found)+'\n\nВнимание!\nКоманда: искать!', opt);
      } else {
        can--;
        bot.answerCallbackQuery(msg.id,'Тут никого нет', true);
        placeval[msg.data] = 2;
        pole[msg.data] = ' ❌ ';
i2 = {
  parse_mode: "HTML",
  reply_markup:{
    inline_keyboard: [
      [{text: pole[1], callback_data:1}, {text: pole[2], callback_data:2}],
      [{text: pole[3], callback_data:3}, {text: pole[4], callback_data:4}]
    ]
  }
};

i3 = {
  parse_mode: "HTML",
  reply_markup:{
    inline_keyboard: [
      [{text: pole[1], callback_data:1}, {text: pole[2], callback_data:3}, {text: pole[3], callback_data:3}],
      [{text: pole[4], callback_data:4}, {text: pole[5], callback_data:5}, {text: pole[6], callback_data:6}],
      [{text: pole[7], callback_data:7}, {text: pole[8], callback_data:8}, {text: pole[9], callback_data:9}]
    ]
  }
};

i4 = {  
  parse_mode: "HTML",
  reply_markup:{
    inline_keyboard: [
      [{text: pole[1], callback_data:1},   {text: pole[2], callback_data:2},   {text: pole[3], callback_data:3},   {text: pole[4],  callback_data:4} ],
      [{text: pole[5], callback_data:5},   {text: pole[6], callback_data:6},   {text: pole[7], callback_data:7},   {text: pole[8],  callback_data:8} ],
      [{text: pole[9], callback_data:9},   {text: pole[10], callback_data:10}, {text: pole[11], callback_data:11}, {text: pole[12], callback_data:12}],
      [{text: pole[13], callback_data:13}, {text: pole[14], callback_data:14}, {text: pole[15], callback_data:15}, {text: pole[16], callback_data:16}]
    ]
  }
};

i5 = {
  parse_mode: "HTML",
  reply_markup:{
    inline_keyboard: [
      [{text: pole[1], callback_data:1},     {text: pole[2], callback_data:2},     {text: pole[3], callback_data:3},     {text: pole[4],  callback_data:4},   {text: pole[5], callback_data:5}  ],
      [{text: pole[6], callback_data:6},     {text: pole[7], callback_data:7},     {text: pole[8], callback_data:8},     {text: pole[9],  callback_data:9},   {text: pole[10], callback_data:10}],
      [{text: pole[11], callback_data:11},   {text: pole[12], callback_data:12},   {text: pole[12], callback_data:13},   {text: pole[14],  callback_data:14}, {text: pole[15], callback_data:15}],
      [{text: pole[16], callback_data:16},   {text: pole[17], callback_data:17},   {text: pole[18], callback_data:18},   {text: pole[19],  callback_data:19}, {text: pole[20], callback_data:20}],
      [{text: pole[21], callback_data:21},   {text: pole[22], callback_data:22},   {text: pole[23], callback_data:23},   {text: pole[24],  callback_data:24}, {text: pole[25], callback_data:25}]
    ]
  }
}; 
          switch(inl) {
            case 2: opt = i2; break;
            case 3: opt = i3; break;
            case 4: opt = i4; break;
            case 5: opt = i5; break;
            case 6: opt = 0; break;  
           }
        opt.chat_id = chatt;
        opt.message_id = em;
        bot.editMessageText('Игра стартовала!\n\nШансов на поиск ('+can+')\n\nИскатели:\n'+f+'\nОстальные прячущиеся - '+(hide.length-found)+'\n\nВнимание!\nКоманда: искать!', opt);
      }
        if (placeval.includes(1)) {
          if (can === 0) {
          h = 0;
          f2 = '';
          f = '';
          for (i = 0; i < 36; i++) {
            console.log(i + ' - 1')
            if (placeval[i] === 1) {
                  h++; 
                 pole[i] = ' ☑️ ';
              for (i2 = 0; i2 < 20; i2++) {
                console.log(i2 + ' - 2')
                if (place[i2] === i) {
                  f2 += h +'. '+hidefn[i2]+' +2 🍬\n';
                  db.run('UPDATE ba3 SET bal = bal + 2 WHERE id = '+hide[i2]);
                }
              }
            }
          }
          s = Math.floor((gamersb * 2)/s) - (h * 2);
          for (i = 0; i < seek.length; i++) {
            f += (i+1)+'. '+seekfn[i]+' +'+s+' 🍬\n';
            db.run('UPDATE ba3 SET bal = bal + '+s+' WHERE id = '+seek[i]);
          }
            i2 = {
  parse_mode: "HTML",
  reply_markup:{
    inline_keyboard: [
      [{text: pole[1], callback_data:0}, {text: pole[2], callback_data:0}],
      [{text: pole[3], callback_data:0}, {text: pole[4], callback_data:0}]
    ]
  }
};

i3 = {
  parse_mode: "HTML",
  reply_markup:{
    inline_keyboard: [
      [{text: pole[1], callback_data:0}, {text: pole[2], callback_data:0}, {text: pole[3], callback_data:0}],
      [{text: pole[4], callback_data:0}, {text: pole[5], callback_data:0}, {text: pole[6], callback_data:0}],
      [{text: pole[7], callback_data:0}, {text: pole[8], callback_data:0}, {text: pole[9], callback_data:0}]
    ]
  }
};

i4 = {  
  parse_mode: "HTML",
  reply_markup:{
    inline_keyboard: [
      [{text: pole[1], callback_data:0},  {text: pole[2], callback_data:0},  {text: pole[3], callback_data:0},  {text: pole[4],  callback_data:0} ],
      [{text: pole[5], callback_data:0},  {text: pole[6], callback_data:0},  {text: pole[7], callback_data:0},  {text: pole[8],  callback_data:0} ],
      [{text: pole[9], callback_data:0},  {text: pole[10], callback_data:0}, {text: pole[11], callback_data:0}, {text: pole[12], callback_data:0}],
      [{text: pole[13], callback_data:0}, {text: pole[14], callback_data:0}, {text: pole[15], callback_data:0}, {text: pole[16], callback_data:0}]
    ]
  }
};

i5 = {
  parse_mode: "HTML",
  reply_markup:{
    inline_keyboard: [
      [{text: pole[1], callback_data:0},    {text: pole[2], callback_data:0},    {text: pole[3], callback_data:0},    {text: pole[4],  callback_data:0},  {text: pole[5], callback_data:0} ],
      [{text: pole[6], callback_data:0},    {text: pole[7], callback_data:0},    {text: pole[8], callback_data:0},    {text: pole[9],  callback_data:0},  {text: pole[10], callback_data:0}],
      [{text: pole[11], callback_data:0},   {text: pole[12], callback_data:0},   {text: pole[12], callback_data:0},   {text: pole[14],  callback_data:0}, {text: pole[15], callback_data:0}],
      [{text: pole[16], callback_data:0},   {text: pole[17], callback_data:0},   {text: pole[18], callback_data:0},   {text: pole[19],  callback_data:0}, {text: pole[20], callback_data:0}],
      [{text: pole[21], callback_data:0},   {text: pole[22], callback_data:0},   {text: pole[23], callback_data:0},   {text: pole[24],  callback_data:0}, {text: pole[25], callback_data:0}]
    ]
  }
}; 
            switch(inl) {
            case 2: opt = i2; break;
            case 3: opt = i3; break;
            case 4: opt = i4; break;
            case 5: opt = i5; break;
            case 6: opt = 0; break;  
           }
          bot.deleteMessage(chatt, em);
          bot.sendMessage(chatt,'Игра окончена!\n\Искатели:\n'+f+'\nКого не нашли:\n\n'+f2+'\n\nПоздравляем!', opt); 
          offirs = 0;
          gamer.length = 0;
          user.length = 0;
          hide.length = 0;
          hidefn.length = 0;
          seek.length = 0;
          seekfn.length = 0;
          gamersb = 0;
      } else {
          f = '';
      };
      } else {
          f = '';
          can = -1;
          h = 0;
          f2 = '';
          f = '';
          s = Math.floor(((gamersb - h) * 2)/s);
          for (i = 0; i < seek.length; i++) {
            f += (i+1)+'. '+seekfn[i]+' +'+s+' 🍬\n';
            db.run('UPDATE ba3 SET bal = bal + '+s+' WHERE id = '+seek[i]);
}
                    i2 = {
  parse_mode: "HTML",
  reply_markup:{
    inline_keyboard: [
      [{text: pole[1], callback_data:0}, {text: pole[2], callback_data:0}],
      [{text: pole[3], callback_data:0}, {text: pole[4], callback_data:0}]
    ]
  }
};

i3 = {
  parse_mode: "HTML",
  reply_markup:{
    inline_keyboard: [
      [{text: pole[1], callback_data:0}, {text: pole[2], callback_data:0}, {text: pole[3], callback_data:0}],
      [{text: pole[4], callback_data:0}, {text: pole[5], callback_data:0}, {text: pole[6], callback_data:0}],
      [{text: pole[7], callback_data:0}, {text: pole[8], callback_data:0}, {text: pole[9], callback_data:0}]
    ]
  }
};

i4 = {  
  parse_mode: "HTML",
  reply_markup:{
    inline_keyboard: [
      [{text: pole[1], callback_data:0},  {text: pole[2], callback_data:0},  {text: pole[3], callback_data:0},  {text: pole[4],  callback_data:0} ],
      [{text: pole[5], callback_data:0},  {text: pole[6], callback_data:0},  {text: pole[7], callback_data:0},  {text: pole[8],  callback_data:0} ],
      [{text: pole[9], callback_data:0},  {text: pole[10], callback_data:0}, {text: pole[11], callback_data:0}, {text: pole[12], callback_data:0}],
      [{text: pole[13], callback_data:0}, {text: pole[14], callback_data:0}, {text: pole[15], callback_data:0}, {text: pole[16], callback_data:0}]
    ]
  }
};

i5 = {
  parse_mode: "HTML",
  reply_markup:{
    inline_keyboard: [
      [{text: pole[1], callback_data:0},    {text: pole[2], callback_data:0},    {text: pole[3], callback_data:0},    {text: pole[4],  callback_data:0},  {text: pole[5], callback_data:0} ],
      [{text: pole[6], callback_data:0},    {text: pole[7], callback_data:0},    {text: pole[8], callback_data:0},    {text: pole[9],  callback_data:0},  {text: pole[10], callback_data:0}],
      [{text: pole[11], callback_data:0},   {text: pole[12], callback_data:0},   {text: pole[12], callback_data:0},   {text: pole[14],  callback_data:0}, {text: pole[15], callback_data:0}],
      [{text: pole[16], callback_data:0},   {text: pole[17], callback_data:0},   {text: pole[18], callback_data:0},   {text: pole[19],  callback_data:0}, {text: pole[20], callback_data:0}],
      [{text: pole[21], callback_data:0},   {text: pole[22], callback_data:0},   {text: pole[23], callback_data:0},   {text: pole[24],  callback_data:0}, {text: pole[25], callback_data:0}]
    ]
  }
}; 
            switch(inl) {
            case 2: opt = i2; break;
            case 3: opt = i3; break;
            case 4: opt = i4; break;
            case 5: opt = i5; break;
            case 6: opt = 0; break;  
           }
          bot.deleteMessage(chatt, em);
          bot.sendMessage(chatt, 'Игра окончена!\n\Победители:\n'+f+'\nВсех нашли!\n\nПоздравляем искателей!', opt); 
          offirs = 0;
          gamer.length = 0;
          user.length = 0;
          hide.length = 0;
          hidefn.length = 0;
          seek.length = 0;
          seekfn.length = 0;
          gamersb = 0;
}
} 
} else bot.answerCallbackQuery(msg.id,'Вы не искатель', false);
}
}
}
  
if (msg.data === 0) {
    bot.answerCallbackQuery(msg.id,'Не тыкаёте просто так', false);
}
  
if (msg.data === 'ready') {
 if(hide.includes(msg.from.id)) {
   if (place.includes(0)) {
      bot.answerCallbackQuery(msg.id,'Не все выбрали своё место', false);
   } else {
     if (rea == 2) {
       rea--;
       bot.answerCallbackQuery(msg.id,'Точно готовы?', true);
     } else if (rea == 1) {
       rea--;
       bot.answerCallbackQuery(msg.id,'Поехали!', true);
        i2 = {
  parse_mode: "HTML",
  reply_markup:{
    inline_keyboard: [
      [{text: pole[1], callback_data:1}, {text: pole[2], callback_data:2}],
      [{text: pole[3], callback_data:3}, {text: pole[4], callback_data:4}]
    ]
  }
};

i3 = {
  parse_mode: "HTML",
  reply_markup:{
    inline_keyboard: [
      [{text: pole[1], callback_data:1}, {text: pole[2], callback_data:2}, {text: pole[3], callback_data:3}],
      [{text: pole[4], callback_data:4}, {text: pole[5], callback_data:5}, {text: pole[6], callback_data:6}],
      [{text: pole[7], callback_data:7}, {text: pole[8], callback_data:8}, {text: pole[9], callback_data:9}]
    ]
  }
};

i4 = {  
  parse_mode: "HTML",
  reply_markup:{
    inline_keyboard: [
      [{text: pole[1], callback_data:1},   {text: pole[2], callback_data:2},   {text: pole[3], callback_data:3},   {text: pole[4],  callback_data:4} ],
      [{text: pole[5], callback_data:5},   {text: pole[6], callback_data:6},   {text: pole[7], callback_data:7},   {text: pole[8],  callback_data:8} ],
      [{text: pole[9], callback_data:9},   {text: pole[10], callback_data:10}, {text: pole[11], callback_data:11}, {text: pole[12], callback_data:12}],
      [{text: pole[13], callback_data:13}, {text: pole[14], callback_data:14}, {text: pole[15], callback_data:15}, {text: pole[16], callback_data:16}]
    ]
  }
};

i5 = {
  parse_mode: "HTML",
  reply_markup:{
    inline_keyboard: [
      [{text: pole[1], callback_data:1},     {text: pole[2], callback_data:2},     {text: pole[3], callback_data:3},     {text: pole[4],  callback_data:4},   {text: pole[5], callback_data:5}  ],
      [{text: pole[6], callback_data:6},     {text: pole[7], callback_data:7},     {text: pole[8], callback_data:8},     {text: pole[9],  callback_data:9},   {text: pole[10], callback_data:10}],
      [{text: pole[11], callback_data:11},   {text: pole[12], callback_data:12},   {text: pole[12], callback_data:13},   {text: pole[14],  callback_data:14}, {text: pole[15], callback_data:15}],
      [{text: pole[16], callback_data:16},   {text: pole[17], callback_data:17},   {text: pole[18], callback_data:18},   {text: pole[19],  callback_data:19}, {text: pole[20], callback_data:20}],
      [{text: pole[21], callback_data:21},   {text: pole[22], callback_data:22},   {text: pole[23], callback_data:23},   {text: pole[24],  callback_data:24}, {text: pole[25], callback_data:25}]
    ]
  }
}; 
           switch(inl) {
            case 2: opt = i2; break;
            case 3: opt = i3; break;
            case 4: opt = i4; break;
            case 5: opt = i5; break;
            case 6: opt = 0; break;  
           };
       opt.chat_id = chatt;
       opt.message_id = em;
       bot.editMessageText('Игра стартовала!\n\nШансов на поиск ('+can+')\n\nИскатели:\n'+f+'\nОстальные прячущиеся - '+hide.length+'\n\nВнимание!\nКоманда: искать!', opt);
     } else {
       bot.answerCallbackQuery(msg.id,'Уже идёт поиск', false);
     }
   }
 } else if (seek.includes(msg.from.id)) {
   bot.answerCallbackQuery(msg.id,'Эта кнопка для прячущихся', false);
 } else {
   bot.answerCallbackQuery(msg.id,'Эта кнопка для игроков, ты не в игре!', false);
 }
}
  
if (msg.data === 'togame') {
if (gamer.includes(msg.from.first_name)) {
bot.answerCallbackQuery(msg.id,'Вы уже в игре', false)
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
p = null;
gamersb--;
bot.answerCallbackQuery(msg.id,'Вы вышли из игры',true);
} else {  
bot.answerCallbackQuery(msg.id,'Вы итак не в игре 😳',false)
}
} 

if (msg.data === 'members'){
bot.answerCallbackQuery(msg.id,gamersb+' участник(а/ов)',true)
}

  
  
if (msg.data === 'togame2') {
if (gamer.includes(msg.from.first_name)) {
bot.answerCallbackQuery(msg.id,'Вы уже в игре', false)
} else {
  db.serialize(() => {
  db.get('SELECT bal FROM ba3 WHERE id ='+msg.from.id, (err, row) => {
    if (row) {
      if (row.bal >= 1) {
       db.run('UPDATE ba3 SET bal = bal - 1 WHERE id = '+msg.from.id);
       gamer[gamersb] =  msg.from.first_name;
       user[gamersb] = msg.from.id;
       gamersb++;
       bot.answerCallbackQuery(msg.id,'Вы вошли в игру (вам сняли 1 🍬 с баланса)', true);
      } else {
        bot.answerCallbackQuery(msg.id,'Нужно иметь хотя бы 1 🍬 для игры', false);
      }
    } else {
       db.run('INSERT INTO ba3(id, fn, bal) VALUES('+msg.from.id+', "'+msg.from.first_name+'", 5)')
       db.run('UPDATE ba3 SET bal = bal - 1 WHERE id = '+msg.from.id);
       gamer[gamersb] =  msg.from.first_name;
       user[gamersb] = msg.from.id;
       gamersb++;
       bot.answerCallbackQuery(msg.id,'Вы вошли в игру (вам сняли 1 🍬 с баланса)', true);
    }
})
})
} 
}

if (msg.data === 'nogame2') {
if (user.includes(msg.from.id)) {
p = gamer.indexOf(msg.from.first_name);
gamer.splice(p, 1);
user.splice(p, 1);
p = null;
db.run('UPDATE ba3 SET bal = bal + 1 WHERE id = '+msg.from.id);
gamersb--;
bot.answerCallbackQuery(msg.id,'Вы вышли из игры (вам вернули 1 🍬 на баланс)', true);
} else {  
bot.answerCallbackQuery(msg.id,'Вы итак не в игре 😳', false)
}
} 
 

if (msg.data === 'whois') {
f = '';
  if (gamer.length === 0) {
    f += 'Пока никого нет';
    bot.answerCallbackQuery(msg.id, f, false);
  } else {
for (i = 0; i < gamer.length; i++) {
f += gamer[i]+'\n';
}
bot.answerCallbackQuery(msg.id, f, true);
}
}

if (msg.data === 'AA') {
if (user.includes(msg.from.id)) {
p = gamer.indexOf(msg.from.first_name);
if (chose[p] === 0) {
bot.answerCallbackQuery(msg.id,'Вы выбрали 1⃣ вариант ответа', true);
  chose[p] = 1;
} else {
bot.answerCallbackQuery(msg.id,'Вы уже выбрали вариант ответа ('+chose[p]+')', false);
}
  p = null;
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
bot.answerCallbackQuery(msg.id,'Вы уже выбрали вариант ответа ('+chose[p]+')', false);
}
p = null;
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
bot.answerCallbackQuery(msg.id,'Вы уже выбрали вариант ответа ('+chose[p]+')', false);
}
  p = null;
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
bot.answerCallbackQuery(msg.id,'Вы уже выбрали вариант ответа ('+chose[p]+')', false);
}
p = null;
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

bot.onText(/^старт$/i, (msg) => {
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

bot.onText(/^вопрос (.+)$/i, (msg, match) => {
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

bot.onText(/^\/give$|^\/give@Weearntbot$/, (msg) => {
if (admin.includes(msg.from.id)) {
p = gamer.indexOf(msg.reply_to_message.from.first_name);
bot.deleteMessage(chatt, msg.message_id)
bot.sendMessage(chatt,'Выбор '+gamer[p]+' сброшен');
chose[p] = 0;
p = -1;
}
})



bot.onText(/^\/add$|^\/add@Weearntbot$/i, (msg) => {
if(admin.includes(msg.from.id)) {
gamer[gamersb] =  msg.reply_to_message.from.first_name;
user[gamersb] = msg.reply_to_message.from.id;
cg[gamersb] = 2;
chose[gamersb] = 0;
gamersb++;
bot.sendMessage(chatt,'Игрок <a href="tg://user?id='+msg.reply_to_message.from.id+'">'+msg.reply_to_message.from.first_name+'</a> добавлен(а) в игру',{parse_mode:"HTML"});
}
})



bot.onText(/^\/kick$|^\/kick@Weearntbot$/, (msg, match) => {
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

bot.onText(/^кто в игре$/i, (msg) => {
  if (admin.includes(msg.from.id)) {
    bot.deleteMessage(chatt, msg.message_id)
    f = 'В игре:\n';
    for (i = 0; i < user.length; i++) {
    f +=  number[i]+'. ' +gamer[i]+'\n';
    }
    bot.sendMessage(chatt, f)
  }
})

bot.onText(/^что выбрали$/i, (msg) => {
  if (admin.includes(msg.from.id)) {
    bot.deleteMessage(chatt, msg.message_id)
    f = 'Выбранные ответы:\n';
    for (i = 0; i < user.length; i++) {
      f += number[i] + '. ' + gamer[i] + ' - ' + chose[i] +'\n'
    }
    bot.sendMessage(chatt, f)
  }
})

bot.onText(/^шансы$/i, (msg) => {
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

bot.onText(/^кто не выбрал$/i, (msg) => {
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


