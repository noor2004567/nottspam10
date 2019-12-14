const Discord = require('discord.js');
const client = new Discord.Client();
const tokens = require('./tokens.json');

client.on('ready', () => {
  console.log('BOT STARTED UP!');
});

client.on('ready', () => {
  client.user.setActivity("help l shows help page.", {url: "https://www.twitch.tv"});
  console.log(`${client.user.tag} running on ${client.guilds.size} guilds with ${client.users.size} users.`);
});

client.on('message', async msg=> {
  if (msg.content === 'سبام واحد') {
	  msg.channel.send(`سبام ثنين)
  }
  ifسبام ثنينg.content === 'help') {
	  msg.channel.send(`سبام واحد`)
  }
});

client.login(tokens.token);