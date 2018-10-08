const Discord = require('discord.js');
const client = new Discord.Client();
let timer;
console.log("BOT ONLINE");

  client.on('ready', async () => {
      let ReBeL = ["Hii","Lol","wine","bader","Kiiiiiiiing","xD"]
  setInterval(() => {
client.channels.get("498855781232279563").send(`${ReBeL[Math.floor(Math.random() *ReBeL.length)]}`);//لا تنسى تحط أيدي الروم
},30000);
});
  

client.login(process.env.BOT_TOKEN);
