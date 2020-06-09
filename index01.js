const Telegrambot = require('node-telegram-bot-api')
const TOKEN = '1097903013:AAHqfjyVsppFchDSZj9S_gJ6-MrZlgvDHyQ'

console.log('Бот стартовал...')

cons bot = new TelegramBot(TOKEN, {
polling: {
 interval: 300,
 autoStart: true,
  params: {
   timeout: 10
  }
}
})


  



bot.on('message', msg => {
       const { id } = msg.chat.id
       
       bot.sendMessage(id, debug)
       })
function debug(obj = {}) {
 return JSON.stringify(obj, null, 4)
}


