const Telegraf = require('telegraf')
const Extra = require('telegraf/extra')
const fs = require('fs')


const member_01 = 684519513;
const member_02 = 687542018;
const member_03 = 240481520;
const member_04 = 757403329;
const member_06 = 645483421;
const member_07 = 721564120;
const member_08 = 1045964979;
const member_09 = 1074618502;
const member_10 = 851957031;
const member_11 = 612495949;
const member_12 = 932348113;
const member_13 = 687329153;
const member_14 = 564553040;
const member_15 = 691269383;
const member_16 = 751498406;
const member_17 = 957137055;
const member_18 = 565160580;
const member_19 = 910787068;
const member_20 = 584206250;




const bot = new Telegraf("1097903013:AAHqfjyVsppFchDSZj9S_gJ6-MrZlgvDHyQ");




bot.start((ctx) => ctx.reply('Привет @'+ctx.from.username+'! Я бот для мышеловки! Рад познакомиться! Введи команду /help для ознакомления со списком моих команд!'))
bot.help((ctx) => ctx.reply('@'+ctx.from.username+', я пока ничего не умею'))


bot.hears(/прости/gi, (ctx) => ctx.reply('Хорошо, и ты меня🥺'))
bot.hears(/извин/gi, (ctx) => ctx.reply('Прости меня🥺'))
bot.command('shipper', (ctx) => { 
            console.log(ctx.from.id)
            
            
            
            })



bot.launch()
