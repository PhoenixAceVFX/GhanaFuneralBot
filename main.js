const Discord = require('discord.js');
const { prefix, token_coffin, token_guy1, token_guy2, token_guy3, token_guy4, token_guy5, token_guy6} = require('./config.json');
const clients = [new Discord.Client(),new Discord.Client(),new Discord.Client(),new Discord.Client(),new Discord.Client(),new Discord.Client(), new Discord.Client()];
var tokens = [token_guy1, token_guy2, token_guy3, token_guy4, token_guy5, token_guy6,token_coffin];

//Okay before I get destroyed, I suck at programming, Im already aware
//Feel free to add on and fix things!


for(var i = 0; i < clients.length; i++)	//Loops through all clients to login
{
	clients[i].login(tokens[i]);
	console.log("Client " + i + " has logged in.");
}
console.log("All bots are logged in");	

clients[0].once('ready', () => {	//Just sets status
    console.log('Ready!');
	clients[0].user.setActivity("Astronomia", { type: "LISTENING"});
});

clients[0].on('message', async (message) => {

	if(message.content === (`${prefix}join`) && message.member.hasPermission("ADMINISTRATOR"))
	{	
		console.log(message.member.voice.channel.id)
		let channel_info = message.member.guild.voiceStates.cache.find(user => user.id == message.author.id)	//Unused but can potentially be used to limit voice channels in the future

		console.log("command recieved")
		const connection = await message.member.voice.channel.join();
		const dispatcher = connection.play('./Astronomia.mp3');

		dispatcher.on('start', () => {
			console.log('Music playing!');
		});

		dispatcher.on('finish', () => {
			console.log('Music done playing!');
			connection.disconnect();
		});
	}
	if(message.content === (`${prefix}leave`) && message.member.hasPermission("ADMINISTRATOR"))	//Force leave if needed
		{
			message.member.voice.channel.leave();	
		}
})

 function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
  }

clients[1].on('message', async (message) => {

	if(message.content === (`${prefix}join`) && message.member.hasPermission("ADMINISTRATOR"))
		{
			await sleep(20500);
			console.log("client 1 stopped sleeping");
			const connection = await message.member.voice.channel.join();
			await sleep(18000)
			connection.disconnect();
		}
		if(message.content === (`${prefix}leave`))
		{
			message.member.voice.channel.leave();	
		}
})

clients[2].on('message', async (message) => {

	if(message.content === (`${prefix}join`) && message.member.hasPermission("ADMINISTRATOR"))
	{
		await sleep(20500);
		console.log("client 2 stopped sleeping");
		const connection = await message.member.voice.channel.join();
		await sleep(18000)
		connection.disconnect();
	}
	if(message.content === (`${prefix}leave`) && message.member.hasPermission("ADMINISTRATOR"))
	{
		message.member.voice.channel.leave();	
	}
})


clients[3].on('message', async (message) => {

	if(message.content === (`${prefix}join`) && message.member.hasPermission("ADMINISTRATOR"))
	{
		await sleep(20500);
		console.log("client 3 stopped sleeping");
		const connection = await message.member.voice.channel.join();
		await sleep(18000)
		connection.disconnect();
	}
	if(message.content === (`${prefix}leave`) && message.member.hasPermission("ADMINISTRATOR"))
	{
		message.member.voice.channel.leave();	
	}
})


clients[4].on('message', async (message) => {

	if(message.content === (`${prefix}join`) && message.member.hasPermission("ADMINISTRATOR"))
	{
		await sleep(20500);
		console.log("client 4 stopped sleeping");
		const connection = await message.member.voice.channel.join();
		await sleep(18000)
		connection.disconnect();
	}
	if(message.content === (`${prefix}leave`) && message.member.hasPermission("ADMINISTRATOR"))
	{
		message.member.voice.channel.leave();	
	}
})


clients[5].on('message', async (message) => {

	if(message.content === (`${prefix}join`) && message.member.hasPermission("ADMINISTRATOR"))
	{
		await sleep(20500);
		console.log("client 5 stopped sleeping");
		const connection = await message.member.voice.channel.join();
		await sleep(18000)
		connection.disconnect();
	}
	if(message.content === (`${prefix}leave`) && message.member.hasPermission("ADMINISTRATOR"))
	{
		message.member.voice.channel.leave();	
	}
})


clients[6].on('message', async (message) => {

	if(message.content === (`${prefix}join`) && message.member.hasPermission("ADMINISTRATOR"))
	{
		await sleep(20500);
		console.log("client 6 stopped sleeping");
		const connection = await message.member.voice.channel.join();
		await sleep(18000)
		connection.disconnect();
	}
	if(message.content === (`${prefix}leave`) && message.member.hasPermission("ADMINISTRATOR"))
	{
		message.member.voice.channel.leave();	
	}
})

