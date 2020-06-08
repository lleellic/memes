const Telegraf = require('telegraf')
const Extra = require('telegraf/extra')
const fs = require('fs')
const member_osculum = 684519513;
const member_dionisa = 687542018;
const member_smutne = 240481520;
const member_nikita = 757403329;
const member_bnclvr = 1178427119;
const member_ganna = 645483421;
const member_luna = 721564120;
const member_matvey = 1045964979;
const member_yui = 1074618502;
const member_hochu = 851957031;
const member_gerda = 612495949;
const member_domwid = 932348113;
const member_gerpa = 687329153;
const member_ira = 564553040;
const member_kaktus = 691269383;
const member_maximka = 751498406;
const member_saggitarius = 957137055;
const member_lockteva = 565160580;
const member_ekusok = 584206250;
  
//const bot = new Telegraf("1097903013:AAHqfjyVsppFchDSZj9S_gJ6-MrZlgvDHyQ");


const TelegramBot = require('node-telegram-bot-api');
const token = process.env.AAHqfjyVsppFchDSZj9S_gJ6-MrZlgvDHyQ;
const bot = new TelegramBot(token, {polling: true});
const idAdmin = 684519513;
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const first_name = msg.chat.first_name;

  if (msg.text) {

    const text = msg.text.toLowerCase();

    if (~text.indexOf("привет")) {  
      bot.sendMessage(chatId, 'Приветик, ' + first_name + '!');
    } else if (~text.indexOf("start")) {
    } else if (~text.indexOf("закрыть")) {
      bot.sendMessage(chatId, 'Клавиатура закрыта', {
        reply_markup: {
          remove_keyboard: true
        }
      });
    } else if (~text.indexOf("клав")) {
      openKlava(chatId);
    } else if (~text.indexOf("здраст")) {
      bot.sendMessage(chatId, 'Здравствуй, здравствуй, ' + first_name + '!');
    } else if (~text.indexOf("здравст")) {
      bot.sendMessage(chatId, 'Здравствуй, здравствуй, ' + first_name + '!');
    } else if (~text.indexOf("дур")) {
      bot.sendMessage(chatId, '' + first_name + ', не ругайся, а то обижусь!');
    } else if (~text.indexOf("туп")) {
      bot.sendMessage(chatId, '' + first_name + ', не ругайся, а то обижусь!');
    } else if (~text.indexOf("класи")) {
      openClassik(chatId, first_name);
    } else if (~text.indexOf("класси")) {
      openClassik(chatId, first_name);
    } else if (~text.indexOf("про автора")) {
      bot.sendMessage(chatId, 'Про автора бота', {
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: 'Автор',
                url: 'https://polyakovdmitriy.ru'
              }
            ],
            [
              {
                text: 'Классика',
                callback_data: 'classik'
              }
            ]
          ]
        }  
      })
    } else {
      bot.sendMessage(chatId, '' + first_name + ', я тебя не понимать!');
    }
  }

  bot.forwardMessage(chatId, idAdmin, msg.message_id);
});

bot.start((ctx) => ctx.reply('Привет! Я бот для мышеловки! Рад познакомиться! Введи команду /help для ознакомления со списком моих команд!'))
bot.help((ctx) => ctx.reply('Я бот, у меня пока что нет комманд'))
bot.hears('Прости', (ctx) => ctx.reply('Хорошо, и ты меня🥺'))
bot.hears('прости', (ctx) => ctx.reply('Хорошо, и ты меня🥺'))


bot.launch()
