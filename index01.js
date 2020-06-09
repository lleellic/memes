const Telegrambot = require('node-telegram-bot-api')
const TOKEN = '1097903013:AAHqfjyVsppFchDSZj9S_gJ6-MrZlgvDHyQ'
cons bot = new TelegramBot(TOKEN, {
polling: {
 interval: 300,
 autoStart: true,
  params: {
   timeout: 10
  }
}
})


  



bot.on('Тест' msg =>{
       console.log()
       bot.sendmessage(msg.chat.id, 'Тест прошёл успешно!')
       })
bot.start((ctx) => ctx.reply('Привет! Я бот для мышеловки! Рад познакомиться! Введи команду /help для ознакомления со списком моих команд!'))
bot.help((ctx) => ctx.reply('Я бот, пока что я умею только прощать'))
bot.hears('Прости', (ctx) => ctx.reply('Хорошо, и ты меня🥺'))
bot.hears('Ты будешь просить прощения?', (ctx) => ctx.reply('Да, прости меня🥺'))

bot.launch()
