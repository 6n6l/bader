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
  

client.on('ready', () => {

    let channel_id = "491586185605545986";

    var channel = client.channels.get(channel_id);

    if(channel.type == 'voice') {

        channel.join();

    } else {

        console.log('...');

    }

});

client.login(process.env.BOT_TOKEN);
