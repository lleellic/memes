const TelegramBot = require('node-telegram-bot-api')
const TOKEN = '1097903013:AAHqfjyVsppFchDSZj9S_gJ6-MrZlgvDHyQ'

console.log('Bot has been started...')

const bot = telebot.TeleBot("TOKEN")


  



bot.on('message', msg => {
       const { id } = msg.chat
     if(msg.text.toLowerCase() === 'hello') {
        bot.SendMessage(id, 'Hello, $(msg.from.firstname)')
        } else 
       bot.sendMessage(id, 'i do not understand!')
})


