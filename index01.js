const Telegraf = require('telegraf')
const Extra = require('telegraf/extra')
const fs = require('fs')

  
const bot = new Telegraf("1097903013:AAHqfjyVsppFchDSZj9S_gJ6-MrZlgvDHyQ");




bot.start((ctx) => ctx.reply('Привет! Я бот для мышеловки! Рад познакомиться! Введи команду /help для ознакомления со списком моих команд!'))
bot.help((ctx) => { 
  console.log(ctx)
  ctx.reply('Я бот, пока что я умею только прощать (уже не умею)')
                  })
bot.hears('Сколько учатников в чате?', (ctx) => {
  const idichat = IdChat;
  ctx.reply(getChatMembersCount(idichat))
            })


bot.launch()
