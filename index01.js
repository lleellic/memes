const Telegraf = require('telegraf')
const Extra = require('telegraf/extra')
const fs = require('fs')

  
const bot = new Telegraf("1097903013:AAHqfjyVsppFchDSZj9S_gJ6-MrZlgvDHyQ");




bot.start((ctx) => ctx.reply('Привет, ${ctx.from.username}! Я бот для мышеловки! Рад познакомиться! Введи команду /help для ознакомления со списком моих команд!'))
bot.help((ctx) => ctx.reply('@'+ctx.from.username+', я пока ничего не умею'))


bot.hears(/прости/gi, (ctx) => ctx.reply('Хорошо, и ты меня🥺'))
bot.hears(/извин/gi, (ctx) => ctx.reply('Прости меня🥺'))



bot.launch()
