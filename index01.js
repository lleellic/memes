const Telegraf = require('telegraf')
var TelegramBot = require('node-telegram-bot-api');
const Extra = require('telegraf/extra')
const fs = require('fs')
var balance = require('./balance');





var members = new Array();
members[0] = 684519513;
members[1] = 687542018;
members[2] = 240481520;
members[3] = 757403329;
members[4] = 1178427119;
members[5] = 645483421;
members[6] = 721564120;
members[7] = 1045964979;
members[8] = 1074618502;
members[9] = 851957031;
members[10] = 612495949;
members[11] = 932348113;
members[12] = 687329153;
members[13] = 564553040;
members[14] = 691269383;
members[15] = 751498406;
members[16] = 957137055;
members[17] = 565160580;
members[18] = 584206250;
const usernames =  new Array();
usernames[0] = 'oscu1um';
usernames[1] = 'karenbrattt';
usernames[2] = 'gloomyXIII';
usernames[3] = 'Son_Of_Moon_69';
usernames[4] = 'bnnclvr';
usernames[5] = 'none';
usernames[6] = 'linaaaaaaaaaaaaaaaaaaaaaaaaaq';
usernames[7] = 'nicebanana';
usernames[8] = 'Akana_Unamori';
usernames[9] = 'hochy_rollov';
usernames[10] = 'GeniusIlya';
usernames[11] = 'Get_away3';
usernames[12] = 'gerpaS';
usernames[13] = 'iraasynytsiaa';
usernames[14] = 'StupidKaktus';
usernames[15] = 'FastK1ll';
usernames[16] = 'askk1899';
usernames[17] = 'lokteva_olesya';
usernames[18] = 'ekusok';


let timex;
let tx = 86400;
function countdown(){
                    tx--;
 if (tx < 0){
  for (var i = 0; i< 19; i++) dday[i] = 1;
 } else {
  timex = setTimeout(coutdown, 1000)
 }}


const bot = new Telegraf("1097903013:AAHqfjyVsppFchDSZj9S_gJ6-MrZlgvDHyQ");


bot.hears(/Выключить извинения/gi, (ctx) => {
          if (ctx.from.id == 684519513 || ctx.from.id == 687542018) {
 if (offir == 1) ctx.reply('Извинения уже отключены')
 else {
        offir = 1;
        ctx.reply('Извинения отключены')  
  }}
else{
 ctx.reply('Недостаточно прав!')
}
})
          
bot.hears(/Включить извинения/gi, (ctx) => {
          if (ctx.from.id == 684519513 || ctx.from.id == 687542018) {
 if (offir == 0) ctx.reply('Извинения уже включены')
 else {
        offir = 0;
        ctx.reply('Извинения включены')  
  }}
 else{
 ctx.reply('Недостаточно прав!')
}
})

bot.start((ctx) => ctx.reply('Привет, <a href="tg://user?id='+ ctx.from.id+'">'+ctx.from.first_name+'</a>! Я бот для мышеловки! Рад познакомиться! Введи команду /help для ознакомления со списком моих команд!', {parse_mode : "HTML"}))
bot.help((ctx) => ctx.reply('<a href="tg://user?id='+ ctx.from.id+'">'+ctx.from.first_name+'</a>, я пока ничего не умею', {parse_mode : "HTML"}))


bot.hears(/прости/gi, (ctx) => {
          if (offir == 0) ctx.reply('Хорошо, и ты меня🥺')
})
bot.hears(/извин/gi, (ctx) => { 
  if (offir == 0) ctx.reply('Прости меня🥺')
})


bot.hears(/баланс/gi, (ctx) => {
   var idid;
  
           switch (ctx.from.id) {
  case 684519513: idid = 0; break
  case 687542018: idid = 1; break
  case 240481520: idid = 2; break
  case 1178427119: idid = 3; break
  case 1178427119: idid = 4; break
  case 645483421: idid = 5; break
  case 721564120: idid = 6; break
  case 1045964979: idid = 7; break
  case 1074618502: idid = 8; break
  case 851957031: idid = 9 ; break
  case 612495949:idid = 10 ; break
  case 932348113: idid = 11; break
  case 687329153: idid = 12; break
  case 564553040: idid = 13; break
  case 691269383: idid = 14; break
  case 751498406: idid = 15; break
  case 957137055: idid = 16; break
  case 565160580: idid = 17; break
  case 584206250: idid = 18; break

}

ctx.reply('<a href="tg://user?id='+ ctx.from.id+'">'+ctx.from.first_name+'</a>, твой балланс: '+balance[idid]+' конфет(а)', {parse_mode : "HTML"});
})
let textofg = {
    parse_mode: "HTML",
    disable_web_page_preview: false,
    reply_markup: ({
        inline_keyboard: [[
          {
            text: 'Играть!',
            callback_data: '1_1'
          },
          {
            text: 'Выйти!',
            callback_data: '1_2'
          }],
          [
            {
            text: 'Старт!',
            callback_data: '1_3'
          },
          {
            text: 'Стоп!',
            callback_data: '1_4'
          }
          ]]
    })
}



var gamevalue = 0;
var gamersb;
var gamerb = new Array();
bot.hears(/играть было/gi, (ctx) => {
  if (gamevalue == 0) {
gamevalue = 1;
var gamersb = 0;
var gamerb = [];
  ctx.reply('Начат набор игроков', textofg )
} else {
    ctx.reply('Игра уже начата')
  }
})
  
bot.on('callback_query', function onCallbackQuery(callbackQuery) {
switch (callbackQuery.data) {
case 1: {
ctx.reply('<a href="tg://user?id='+ ctx.from.id+'">'+ctx.from.first_name+'</a> вступил(а) в игру', {parse_mode : "HTML"});
gamerb[gamersb] = ctx.from.id;
gamersb++;
console.log(gamersb);
}; break
case 2: {
gamerb[gamersb] = 'null';
gamersb--;
}; break
case 3: {
if (gamersb > 1) {
gameb(gamersb)
} else {
ctx.reply('Количество игроков для старта слишком мало. Позовите кого-нибудь для старта');
}
}; break
case 4:{
for (i=0;i<mesbot.lenght;i++){
ctx.deleteMessage(ctx.chatid,mesbot[i])}
ctx.reply('Игра была отменена');
gamevalue = 0;
}; break
}
});






bot.launch()
