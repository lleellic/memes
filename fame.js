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
var f3;
var inl;
var rea;
answ[0] = 'Выберите правильный вариант ответа.';
a[0] = ' 1⃣ ';
b[0] = ' 2️⃣ ';
c[0] = ' 3️⃣ ';
d[0] = ' 4️⃣ ';
var gamer = new Array();
var p1 = {
  parse_mode: "HTML",
  reply_markup:{
    inline_keyboard: [
      [{text: '+5 ', callback_data: 'fife'}, {text: 'Удвоить', callback_data: 'two'}],
      [{text: 'Отменить', callback_data: 'otmena'}, {text: 'Раздать', callback_data: 'gou'}]
    ]
  }
};
var p1 = {
  parse_mode: "HTML",
  reply_markup:{
    inline_keyboard: [
      [{text: 'Пас', callback_data: 'fife'}, {text: 'Принять', callback_data: 'two'}, {text: 'Удвоить', callback_data: 'otmena'}]
    ]
  }
};

db.run('CREATE TABLE statswedding(id int, fn text, sms int)');

var timerId = setInterval(() => itog(), 1000);


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


function itog() {
time++;
if (time == 86400) {
time = 0;
f='🤑ЕЖЕДНЕВНАЯ победа!🤑 \nФОНД 1 квинтиллионов\n\n';
db.serialize(() => {
db.all('SELECT sms, id, fn FROM statswedding ORDER BY sms DESC LIMIT 5', (err, row) => {
 if (err) throw err;
i=0;
row.forEach((row) => {
i++;
f += i+ '. <a href="tg://user?id='+row.id+'">'+row.fn+'</a> - '+row.sms+' сообщений';
})
db.run('UPDATE statswedding SET sms = 0')
})
}
f+='Коллектив чата поздравляет вас!\n\n💰Админы, выдайте победителям призы!\n\n🤓Случайные призы выдаются за активную игру в рулетку, слова, блекджек и даже за общение!\n\n😋Тут много случайных бонусов!\n\n😎Играйте у нас, в чате @wedding_Pedro!\n\nPS. Админы могут отсутствовать в чате, не тегайте много раз, иначе место приза будет бан.\nКто нибудь зайдет, увидит и даст.\n\nДля отчета от бота:  @fa11en_aHge1, @LadyDrak,  @Elena_S_O, @iamkamazik, @oscuIum\n\nPS: После выдачи приза просьба удалить это сообщение.;
bot.sendMessage(1344668642, f, {papse_mode: "HTML");
}
}


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


bot.onText(/^стата$/i, (msg) => {
if (msg.chat.id == 1344668642) {
  db.serialize(() => {
     f = 'Статистика по смс:\n\n';
    db.all('SELECT id, sms, fn FROM statswedding ORDER BY bal DESC LIMIT 10', (err, row) => {
      if (err) throw err;
      i = 0;
      row.forEach((row) => {
        i++;
        if (row.id == msg.from.id) {
        p = 5;
        f += i + '. '+row.fn+' - ' + row.sms +'\n';
} else {
        f += i + '. <a href="tg://user?id='+row.id+'">'+row.fn+'</a> - ' + row.sms +'\n';
}
    })
if (p == 5) {
db.get('SELECT bal FROM ba3 WHERE id ='+msg.from.id, (err, row) => {
    if (row) {
f += '\n<a href="tg://user?id='+row.id+'">'+row.fn+'</a> - ' + row.sms +' смс.\n\n';
    } else {
f += '\n<a href="tg://user?id='+msg.from.id+'">'+msg.from.fn+'</a> - ' 0 смс.\n\n';
    }
}
timecheck = time;
p = Math.floor(timecheck/3600);
timecheck -= p;
p+=' час(а/ов) ';
f+= 'Прошло времени: '+p+' ';
p = Math.floor(timecheck/60);
timecheck -= p;
if (p < 10) {
p = '0'+p;
}
p+=' минут(а/ы) ';
if (timecheck < 10) {
p+= '0'+timecheck+' секунд(а/ы).';
} else {
p+= timecheck+' секунд(а/ы).';
}
f+=p;
bot.sendMessage(msg.chat.id, f, {parse_mode:"HTML"});
f = '';
p = -1;
  })
  })
}
})

bot.onText(/\/^setime (.+)||/\/^setime@Weearntbot (.+)/, (msg, match) => {
if (msg.from.id == admin[0]) {
time = match [1];
f = '';
timecheck = time;
p = Math.floor(timecheck/3600);
timecheck -= p;
p+=' час(а/ов) ';
f+= 'Установлено время: '+p+' ';
p = Math.floor(timecheck/60);
timecheck -= p;
if (p < 10) {
p = '0'+p;
}
p+=' минут(а/ы) ';
if (timecheck < 10) {
p+= '0'+timecheck+' секунд(а/ы).';
} else {
p+= timecheck+' секунд(а/ы).';
}
f+=p;
bot.sendMessage(msg.chat.id, f, {parse_mode:"HTML", reply_to_message_id: msg.message_id});
f = '';
p = -1;
}
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
if (msg.chat.type == 'private') {
if (admin.includes(msg.from.id)) {
bot.sendMessage(msg.chat.id,'Команды:\n\n<code>Конфеты</code> - показывает баланс конфет 🍬\n\n<code>$(сумма)</code> - перевод средств\n\n<code>Топ конфет</code> - показывает глобальный топ первых 10 по балансу 🍬', {parse_mode: "HTML"});
bot.sendMessage(msg.chat.id,'Доп. команды:\n\n<code>Бонус id сумма</code> - бонус определенному игроку\n\n<code>Del</code> число - удаляет строку данных по его балансу\n\n<code>Показать бд</code> - показывает базу данных\n\n<code>Играть</code> - вызывает меню регистрации\n\n<code>Старт</code> - начинает игру\n\n<code>Кто в игре</code> - показывает всех участников и их id\n\n<code>Вопрос 1</code> - вызывает кнопки, 1️⃣2️⃣3️⃣4️⃣\n\n<code>Кто не выбрал</code> - показывает, кто не выбрал\n\n<code>Что выбрали</code> - показывает что выбрали\n\n<code>/kick</code> - кикает игрока\n\n<code>/add</code> - добавляет участника во время игры\n\n<code>Шансы</code> - показывает шансы игроков\n\n<code>Шанс +</code> или <code>шанс -</code> - привабавляет, либо убавляет шанс игрока, на чьё сообщение было это написано\n\n<code>/give</code> - даёт шанс игроку перевыбрать вариант\n\n<code>Отменить</code> - отменяет игру\n\n<code>/mute</code> - даёт мут игроку\n\n<code>/muted</code> - показывает список нарушителей\n\n<code>/unmute</code> - освобождает от мута игрока\n\n<code>/unmuteall</code> - освобождает всех от мута\n\n<code>/getid</code> - показывает id пользователя', {parse_mode: "HTML"})
} else {
bot.sendMessage(msg.chat.id,'Команды:\n\n<code>Конфеты</code> - показывает баланс конфет 🍬\n\n<code>$(сумма)</code> - перевод средств\n\n<code>Топ конфет</code> - показывает глобальный топ первых 10 по балансу 🍬\n\nДля тебя у меня нет доп. команд, попробуй попросить их через /link', {parse_mode:"HTML"})
}
} else {
bot.sendMessage(msg.chat.id,'Команду /help можно использовать только в ЛС с ботом',{reply_to_message_id: msg.message_id});
}
})

bot.onText(/^\/start$|^\/start@Weearntbot$/, (msg) => {
if (msg.chat.type == 'private') {
  bot.sendMessage(msg.chat.id,'Привет! Ты можешь узнать больше обо мне, написав команду /help');
  db.serialize(() => {
  db.get('SELECT bal FROM ba3 WHERE id ='+msg.from.id, (err, row) => {
    if (!row) db.run('INSERT INTO ba3(id, fn, bal) VALUES('+msg.from.id+', "'+msg.from.first_name+'", 5)')
})
})
} else {
bot.sendMessage(msg.chat.id,'Команду /start можно использовать только в ЛС с ботом',{reply_to_message_id: msg.message_id});
}
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
if (msg.chat.id == 1344668642) {
db.serialize(() => {
 db.get('SELECT sms FROM statswedding WHERE id = '+msg.from.id, (err, row) => {
if (row) {
db.run('UPDATE statswedding SET sms = sms + 1 WHERE id = '+msg.from.id);
} else {
db.run('INSERT INTO statswedding(id, fn, sms) VALUES('+msg.from.id+', "'+msg.from.first_name+'", 1)')
}
})
}
}
if (muted.includes(msg.from.id)) {
bot.deleteMessage(msg.chat.id, msg.message_id);
}
})

bot.on('callback_query', function (msg) {


  
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


