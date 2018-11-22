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
    if(message.content === '!ريب'){
        message.channel.send('#rep <@476130473681092608>')
    }
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
