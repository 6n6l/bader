const Discord = require('discord.js');
const client = new Discord.Client();

let timer;

client.on('ready', () => {
   console.log(`----------------`);
   console.log(`Credit Farmm - Script By : SirBader. `);
   console.log(`----------------`);
   console.log(`Loadinng`);
   console.log(`Loadinng.`);
   console.log(`Loadinng..`);
   console.log(`Loadinng...`);
   console.log(`This Bots Online ' `);
   console.log(`----------------`);
   console.log(`Logged in as ${client.user.tag}!`);
  
});


client.on('message', message => {
    if(message.content === '!راتب'){
        message.channel.send('#daily')
    }
});

client.on('message', message => {
    if(message.content === '!مبلغ'){
        message.channel.send('#credits')
    }
});

client.on('message', message => {
    if(message.content === '!ريب'){
        message.channel.send('#rep <@476130473681092608>')
    }
});



  client.on('ready', async () => {

      let ReBeL = ["Hiiiiبدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر iiiiiii","Looooبدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر ooool","frieenبدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر ds","badeeeeبدر  بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر er","Kiiiiiiبدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر iing","xDDDDDDDD"]

  setInterval(() => {

client.channels.get("506722849600569346").send(`${ReBeL[Math.floor(Math.random() *ReBeL.length)]}`);//لا تنسى تحط أيدي الروم

},5000);

});

client.on('message', message => {
    var prefix = "!";
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
 
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
 
 
  let args = message.content.split(" ").slice(1);
  let x = args.join(" ")
    if(message.content.startsWith(prefix + 'say')) {
        message.channel.send(''+x);
            message.delete(999)
    }
   
   
  });

client.login(process.env.BOT_TOKEN);
