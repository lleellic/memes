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
  
const bot = new Telegraf("1097903013:AAHqfjyVsppFchDSZj9S_gJ6-MrZlgvDHyQ");


bot.start((ctx) => ctx.reply('Привет! Я бот для мышеловки! Рад познакомиться! Введи команду /help для ознакомления со списком моих команд!'))
bot.help((ctx) => ctx.reply('Я бот, у меня пока что нет комманд'))
bot.hears('Прости', (ctx) => ctx.reply('Хорошо, и ты меня🥺'))
bot.hears('прости', (ctx) => ctx.reply('Хорошо, и ты меня🥺'))

const Speech = require('@google-cloud/speech');

const speech = new Speech({
  projectId: 'voicy-151205',
  credentials: require('path/to/certificate/file.json')
});

speech.startRecognition(filepath, {
  'encoding': 'LINEAR16',
  'sampleRate': 16000,
  'languageCode': 'en-US',
})
  .then((results) => {
    const operation = results[0];
    return operation.promise();
  })
  .then((transcription) => {
    console.log(transcription[0]);
  })

bot.launch()
