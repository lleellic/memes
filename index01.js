const Telegraf = require('telegraf')
const Extra = require('telegraf/extra')
const fs = require('fs')
const members = require('./members')
const balances = require('./members')
const offir = 0;






const bot = new Telegraf("1097903013:AAHqfjyVsppFchDSZj9S_gJ6-MrZlgvDHyQ");


bot.hears('Выключить извинения', (ctx) => {
          if (ctx.from.id == 684519513 || ctx.from.id == 687542018) {
 if (offir == 1) ctx.reply('Извинения уже отключены')
 else {
        offir = 1;
        ctx.reply('Извинения отключены')  
  }
 }
})
          
bot.hears('Включить извинения', (ctx) => {
          if (ctx.from.id == 684519513 || ctx.from.id == 687542018) {
 if (offir == 0) ctx.reply('Извинения уже включены')
 else {
        offir = 0;
        ctx.reply('Извинения включены')  
  }
 }
})

bot.start((ctx) => ctx.reply('Привет @'+ctx.from.username+'! Я бот для мышеловки! Рад познакомиться! Введи команду /help для ознакомления со списком моих команд!'))
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
