const Telegraf = require('telegraf')
const Extra = require('telegraf/extra')
const fs = require('fs')
var offir = 0;
const balance = new Array();
for (i=0; i < 19; i++) balance[i]= 1; 



var members = [684519513, 687542018, 240481520, 757403329, 1178427119, 645483421, 721564120, 1045964979, 1074618502, 851957031, 612495949, 932348113, 687329153, 564553040, 691269383, 751498406, 957137055, 565160580, 584206250]
const usernames =  new Array();
usernames[0] = 'oscu1um';
usernames[1] = 'karenbrattt';
usernames[2] = 'gloomyXIII';
usernames[3] = 'Son_Of_Moon_69';
usernames[4] = 'bnnclvr';
usernames[5] = 'none';
usernames[6] = 'linaaaaaaaaaaaaaaaaaaaaaaaaaq';
usernames[7] = 'nicebanana';
usernames[8] = 'Akana_Unamori';
usernames[9] = 'hochy_rollov';
usernames[10] = 'GeniusIlya';
usernames[11] = 'Get_away3';
usernames[12] = 'gerpaS';
usernames[13] = 'iraasynytsiaa';
usernames[14] = 'StupidKaktus';
usernames[15] = 'FastK1ll';
usernames[16] = 'askk1899';
usernames[17] = 'lokteva_olesya';
usernames[18] = 'ekusok';


let timex;
let tx = 86400;
function countdown(){
                    tx--;
 if (tx < 0){
  for (var i = 0; i< 19; i++) dday[i] = 1;
 } else {
  timex = setTimeout(coutdown, 1000)
 }}


const bot = new Telegraf("1097903013:AAHqfjyVsppFchDSZj9S_gJ6-MrZlgvDHyQ");


bot.hears(/Выключить извинения/gi, (ctx) => {
          if (ctx.from.id == 684519513 || ctx.from.id == 687542018) {
 if (offir == 1) ctx.reply('Извинения уже отключены')
 else {
        offir = 1;
        ctx.reply('Извинения отключены')  
  }}
else{
 ctx.reply('Недостаточно прав!')
}
})
          
bot.hears(/Включить извинения/gi, (ctx) => {
          if (ctx.from.id == 684519513 || ctx.from.id == 687542018) {
 if (offir == 0) ctx.reply('Извинения уже включены')
 else {
        offir = 0;
        ctx.reply('Извинения включены')  
  }}
 else{
 ctx.reply('Недостаточно прав!')
}
})

bot.start((ctx) => ctx.reply('Привет @'+ ctx.from.username +'! Я бот для мышеловки! Рад познакомиться! Введи команду /help для ознакомления со списком моих команд!'))
bot.help((ctx) => ctx.reply('@'+ctx.from.username+', я пока ничего не умею'))


bot.hears(/прости/gi, (ctx) => {
          if (offir == 0) ctx.reply('Хорошо, и ты меня🥺')
})
bot.hears(/извин/gi, (ctx) => {
          if (offir == 0) ctx.reply('Прости меня🥺')
})


bot.hears(/баланс/gi, (ctx) => {
   var idid;
  
           switch (ctx.from.username) {
  case 'oscu1um': idid = 0;
  case 'karenbrattt': idid = 1;
  case 'gloomyXIII': idid = 2;
  case 'Son_Of_Moon_69': idid = 3;
  case 'bnnclvr': idid = 4;
  case 'linaaaaaaaaaaaaaaaaaaaaaaaaaq': idid = 6;
  case 'nicebanana': idid = 7;
  case 'Akana_Unamori': idid = 8;  
  case 'hochy_rollov': idid = 9 ;
  case 'GeniusIlya':idid = 10 ;
  case 'Get_away3': idid = 11;  
  case 'gerpaS': idid = 12;
  case 'iraasynytsiaa': idid = 13;
  case 'StupidKaktus': idid = 14;
  case 'FastK1ll': idid = 15;
  case 'askk1899': idid = 16;
  case 'lokteva_olesya': idid = 17;
  case 'ekusok': idid = 18;
  default: idid = 5;
}
  var optimess = {
    parse_mode: "HTML",
    disable_web_page_preview: false,
     reply_markup: JSON.stringify({
        inline_keyboard: [[{
            text: 'Название кнопки',
            callback_data: 'do_something'
        }]]
    })
}
bot.SendMessage('<a href=""//infostart.ru/"">Ссылка на Infostart</a>', optimess);
})

bot.hears(/имя/gi, (ctx) => {
  ctx.reply('Готово')
          console.log(ctx.macth)
})

bot.launch()
