const Telegraf = require('telegraf')
const Extra = require('telegraf/extra')
const fs = require('fs')

  
const bot = new Telegraf("1097903013:AAHqfjyVsppFchDSZj9S_gJ6-MrZlgvDHyQ");




bot.start((ctx) => ctx.reply('Привет! Я бот для мышеловки! Рад познакомиться! Введи команду /help для ознакомления со списком моих команд!'))
bot.help((ctx) => ctx.reply('Я бот, пока что я умею только прощать'))

bot.hears('Меня', (ctx) => telegram.setChatAdministratorCustomTitle(1241810361, 684519513, [Ботолюб]))

bot.launch()
