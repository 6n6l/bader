const Discord = require('discord.js');

const client = new Discord.Client();

let timer;

console.log("BOT ONLINE");

  client.on('ready', async () => {

      let ReBeL = ["Hiiiiiiiiiii","Looooooool","frieends","badeeeeer","Kiiiiiiiing","xDDDDDDDD"]

  setInterval(() => {

client.channels.get("498855781232279563").send(`${ReBeL[Math.floor(Math.random() *ReBeL.length)]}`);//لا تنسى تحط أيدي الروم

},10000);

});


client.on('ready',async () => {

  let GUILDID = '491583378231918592'; // اي دي السيرفر

  let CHANNELID = '491667443547373568'; // اي دي الروم

  voiceStay(GUILDID, CHANNELID);

  function voiceStay(guildid, channelid) {

    if(!guildid) throw new Error('Syntax: voiceStay function requires guildid');

    if(!channelid) throw new Error('Syntax: voiceStay function requires channelid');

    let guild = client.guilds.get(guildid);

    let channel = guild.channels.get(channelid);

    if(channel.type === 'voice') {

      channel.join().catch(e => {

        console.log(`Failed To Join :: ${e.message}`);

      });

    } else {

      console.log(`Channel Type :: ${channel.type}, It must be Voice.`);

    }

  }

});



  
















client.login(process.env.BOT_TOKEN);
