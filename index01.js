const Telegraf = require('telegraf')
const Extra = require('telegraf/extra')
const fs = require('fs')
var offir = 0;

let balance = new Array();
balance[0] = 1000;
for (var i = 0; i < 20; i++) {
   balance[i] = 0
}
let members = [684519513, 687542018, 240481520, 757403329, 1178427119, 645483421, 721564120, 1045964979, 1074618502, 851957031, 612495949, 932348113, 687329153, 564553040, 691269383, 751498406, 957137055, 565160580, 584206250]
let usernames = ['oscu1um','karenbrattt','gloomyXIII','Son_Of_Moon_69','bnnclvr','none','linaaaaaaaaaaaaaaaaaaaaaaaaaq','nicebanana','Akana_Unamori','hochy_rollov','GeniusIlya','Get_away3','gerpaS','iraasynytsiaa','StupidKaktus','FastK1ll','askk1899','lokteva_olesya','ekusok']







const bot = new Telegraf("1097903013:AAHqfjyVsppFchDSZj9S_gJ6-MrZlgvDHyQ");


bot.hears(/Выключить извинения/gi, (ctx) => {
          if (ctx.from.id == 684519513 || ctx.from.id == 687542018) {
 if (offir == 1) ctx.reply('Извинения уже отключены')
 else {
        offir = 1;
        ctx.reply('Извинения отключены')  
  }}
else{
 ctx.reply('Недосаточно прав!')
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
 ctx.reply('Недосаточно прав!')
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
          ctx.reply('Пара дня: @' + usernames[sh1]+' + @' +usernames[sh2]+' = 🥰')
            
 })



bot.launch()
