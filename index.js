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
bot.command('Макс', (ctx) => ctx.replyWithPhoto('https://drive.google.com/uc?export=download&id=1Ya0Vcvug1qWNJsD5G2p4xexFI5hT8_9Y'))
bot.command('Алиса', (ctx) => ctx.replyWithPhoto('https://drive.google.com/uc?export=download&id=16c8d5woUroD-pFEUkmuQGhqVmS9EHeYV'))
bot.command('Максим', (ctx) => ctx.replyWithPhoto('https://drive.google.com/uc?export=download&id=1i-vrc6s4xKNSnGzF2uBjWYvH3NWxqVmc'))
bot.command('Валерия', (ctx) => ctx.replyWithPhoto({ 'https://drive.google.com/uc?export=download&id=1jfnmj4B_0ZJNGyqHXCqrFGPK5_0DO1XX' ))
bot.command('Светлана', (ctx) => ctx.replyWithPhoto({'https://drive.google.com/uc?export=download&id=1j0bS9WwOJGJTmwfI42A3bLo1KQ0z6PwC' ))
bot.command('Виктор', (ctx) => ctx.replyWithPhoto('https://drive.google.com/uc?export=download&id=11YspfE9JEGrA4VOOQAeDNFWw4cwIIjsp'))
bot.command('Александр', (ctx) => ctx.replyWithPhoto('https://drive.google.com/file/d/1_933lXN8z6uov7Tm0IfeUWkEIGK8IU7G/view?usp=sharing' ))
bot.command('Анастасия', (ctx) => ctx.replyWithPhoto( 'https://drive.google.com/file/d/18683o_y5KPguLeI74X6M97K3Tqt0o7uX/view?usp=sharing' ))
bot.command('Павел', (ctx) => ctx.replyWithPhoto( 'https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Wikipedia-logo-v2.svg/1122px-Wikipedia-logo-v2.svg.png' }))

bot.launch()
