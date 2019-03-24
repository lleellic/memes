const Telegraf = require('telegraf')
const Extra = require('telegraf/extra')
const fs = require('fs')
const AnimationUrl1 = 'https://media.giphy.com/media/ya4eevXU490Iw/giphy.gif'
const AnimationUrl2 = 'https://media.giphy.com/media/LrmU6jXIjwziE/giphy.gif'
const Maxim = '/media/Maxim.jpg'

const bot = new Telegraf("783491645:AAGp_rUoPcyRDfgfGZzsXIzJ8HtXbpJThyk");


bot.start((ctx) => ctx.reply('Привет! Я бот IT_camp и Profcamp версия 0.1! Рад познакомиться! Сейчас ты можешь узнать, как выглядит твой преподаватель или наставник. Для этого просто пришли мне его имя.'))
bot.help((ctx) => ctx.reply('Пришли мне стикер'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('привет', (ctx) => ctx.replyWithPhoto('https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Wikipedia-logo-v2.svg/1122px-Wikipedia-logo-v2.svg.png'))
bot.hears('Адвокат', (ctx) => ctx.replyWithPhoto('https://drive.google.com/uc?export=download&id=11YspfE9JEGrA4VOOQAeDNFWw4cwIIjsp'))
bot.hears('Алиса', (ctx) => ctx.replyWithPhoto({ 
  url:'95.213.199.235', 
  filename: 'Alice.jpg'                                             }))
//bot.hears('Максим', (ctx) => ctx.replyWithPhoto({ source: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Wikipedia-logo-v2.svg/1122px-Wikipedia-logo-v2.svg.png' }))
//bot.hears('Лера', (ctx) => ctx.replyWithPhoto({ source: '/media/Lera.jpeg' }))
//bot.hears('Паша', (ctx) => ctx.replyWithPhoto('Паша сделал этого бота'))
bot.launch()
