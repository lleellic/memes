const Telegraf = require('telegraf')

const bot = new Telegraf(process.env.783491645:AAGp_rUoPcyRDfgfGZzsXIzJ8HtXbpJThyk, {polling: true})
bot.start((ctx) => ctx.reply('Welcome!'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()
