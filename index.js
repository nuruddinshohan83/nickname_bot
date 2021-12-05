require("dotenv").config();
const { Client,Intents } = require('discord.js');
//const { token } = require('./config.json');
//console.log(process.env.Token)

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS
,Intents.FLAGS.GUILD_MEMBERS,Intents.FLAGS.GUILD_MESSAGES] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});
client.on('messageCreate', (message) => {
	let messageChanelID = message.channelId
	let messageUser = message.member
	let messageContent = message.content
	let nickChannelID = "917098777955930133"
	if(nickChannelID == messageChanelID){
		messageUser.setNickname(`${messageContent}`,"Set by nickname_bot")
		console.log("Its form Nickname Channel")
	}
	
	
});


// Login to Discord with your client's token
client.login(process.env.Token);
