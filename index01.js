const Telegraf = require('telegraf')
const Extra = require('telegraf/extra')
const fs = require('fs')
var offir = 0;
const balance = new Array();
for (var i = 0; i < 19; i++) {
 balance[i]= 1;
}



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

function countdown(){
                    tx--;
 if (tx == 0){
  sday = 1;
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

bot.command('shipper', (ctx) => { 
          var sh1 = Math.random() * 19;
          var sh2 = Math.random() * 19;
            for (var i = 0; i < 9; i++) {
             if (sh1 == sh2) sh2 = Math.floor(Math.random() * 10) + 1;
}
  switch (sh1) {
     case 1: var sh11 = 'oscu1um';
     case 2: var sh11 = 'karenbrattt';
     case 3: var sh11 = 'gloomyXIII';
     case 4: var sh11 = 'Son_Of_Moon_69';
     case 5: var sh11 = 'bnnclvr';
     case 6: var sh11 = 'linaaaaaaaaaaaaaaaaaaaaaaaaaq';
     case 7: var sh11 = 'nicebanana';
     case 8: var sh11 = 'Akana_Unamori';
     case 9: var sh11 = 'hochy_rollov';
     case 10: var sh11 = 'GeniusIlya';
     case 11: var sh11 = 'Get_away3';
     case 12: var sh11 = 'gerpaS';
     case 13: var sh11 = 'iraasynytsiaa';
     case 14: var sh11 = 'StupidKaktus';
     case 15: var sh11 = 'FastK1ll';
     case 16: var sh11 = 'askk1899';
     case 17: var sh11 = 'lokteva_olesya';
     case 18: var sh11 = 'ekusok';
}
     switch (sh2) {
     case 1: var sh22 = 'oscu1um';
     case 2: var sh22 = 'karenbrattt';
     case 3: var sh22 = 'gloomyXIII';
     case 4: var sh22 = 'Son_Of_Moon_69';
     case 5: var sh22 = 'bnnclvr';
     case 6: var sh22 = 'linaaaaaaaaaaaaaaaaaaaaaaaaaq';
     case 7: var sh22 = 'nicebanana';
     case 8: var sh22 = 'Akana_Unamori';
     case 9: var sh22 = 'hochy_rollov';
     case 10: var sh22 = 'GeniusIlya';
     case 11: var sh22 = 'Get_away3';
     case 12: var sh22 = 'gerpaS';
     case 13: var sh22 = 'iraasynytsiaa';
     case 14: var sh22 = 'StupidKaktus';
     case 15: var sh22 = 'FastK1ll';
     case 16: var sh22 = 'askk1899';
     case 17: var sh22 = 'lokteva_olesya';
     case 18: var sh22 = 'ekusok';
}
          ctx.reply('Пара дня: @' + (sh11) +' + @' + (sh22) + ' = 🥰')
            
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
}
           ctx.reply('@'+ctx.from.username+', твой баланс: '+ balance[idid]+' конфет')
})


bot.launch()
