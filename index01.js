const Telegraf = require('telegraf')
const Extra = require('telegraf/extra')
const fs = require('fs')
const members = require('./members')
const balances = require('./members')







const bot = new Telegraf("1097903013:AAHqfjyVsppFchDSZj9S_gJ6-MrZlgvDHyQ");




bot.start((ctx) => ctx.reply('Привет @'+ctx.from.username+'! Я бот для мышеловки! Рад познакомиться! Введи команду /help для ознакомления со списком моих команд!'))
bot.help((ctx) => ctx.reply('@'+ctx.from.username+', я пока ничего не умею'))


bot.hears(/прости/gi, (ctx) => ctx.reply('Хорошо, и ты меня🥺'))
bot.hears(/извин/gi, (ctx) => ctx.reply('Прости меня🥺'))
bot.command('shipper', (ctx) => { 
          var sh1 = Math.floor(Math.random() * 20) + 1;
          var sh2 = Math.floor(Math.random() * 10) + 1;
            for (var i = 0; i < 9; i++) {
             if (sh1 == sh2) sh2 = Math.floor(Math.random() * 10) + 1;
}
if (sh1 < 10) sh1 = '0'+sh1;
if (sh2 < 10) sh2 = '0'+sh1;
            
          ctx.reply('Пара дня: @' +        
            
 })



bot.launch()
