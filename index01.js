const Telegrambot = require('node-telegram-bot-api')
const TOKEN = '1097903013:AAHqfjyVsppFchDSZj9S_gJ6-MrZlgvDHyQ'

console.log('Bot hs been started...')

const bot = new TelegramBot(TOKEN, {
polling: {
 interval: 300,
 autoStart: true,
  params: {
   timeout: 10
  }
}
})


  



bot.on('message', msg => {
       const { id } = msg.chat
     if(msg.text.toLowerCase() === 'hello') {
        bot.SendMessage(id, 'Hello, $(msg.from.firstname)')
        } else 
       bot.sendMessage(id, "  i do not understand!)
})


