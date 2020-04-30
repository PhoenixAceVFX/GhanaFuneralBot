const Discord = require('discord.js');
require('console-stamp')(console, '[HH:MM:ss.l]');
const { prefix, token_coffin, token_guy1, token_guy2, token_guy3, token_guy4, token_guy5, token_guy6} = require('./config.json');
const clients = [new Discord.Client(),new Discord.Client(),new Discord.Client(),new Discord.Client(),new Discord.Client(),new Discord.Client(), new Discord.Client()];
var tokens = [token_guy1, token_guy2, token_guy3, token_guy4, token_guy5, token_guy6,token_coffin];

//Okay before I get destroyed, I suck at programming, Im already aware

for(var i = 0; i < clients.length; i++)
{
	clients[i].login(tokens[i]);
	console.log("Client " + i + " has logged in.");
	
}
console.log("exit loop");

clients[0].once('ready', () => {
    console.log('Ready to run!');
	clients[0].user.setActivity("Astronomia", { type: "LISTENING"});
});

clients[0].on('message', async (message) => {

	if(message.content === (`${prefix}join`) && message.member.hasPermission("ADMINISTRATOR"))
	{	
		let channel_info = message.member.guild.voiceStates.cache.find(user => user.id == message.author.id)

		console.log("Command Recieved in Channel: " + message.member.voice.channel.id)
		const connection = await message.member.voice.channel.join();
		const dispatcher = connection.play('./Astronomia.mp3');

		dispatcher.on('start', () => {
			console.log('Astronomia now playing in: ' + message.member.voice.channel.id);
		});

		dispatcher.on('finish', () => {
			console.log('Astronomia done playing in: ' + message.member.voice.channel.id);
			connection.disconnect();
		});
	}
	if(message.content === (`${prefix}leave`) && message.member.hasPermission("ADMINISTRATOR"))
		{
			message.member.voice.channel.leave();	
		}
	if(message.content === (`${prefix}help`) && message.member.hasPermission("ADMINISTRATOR"))
	{
		const helpEmbed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle('Ghana Funeral Meme Bots')
                .setAuthor('Bot by shaftAndi#1825', 'https://cdn.discordapp.com/avatars/571412838388727809/d1e411fb103171344f9dc0271460857b.webp?size=128')
                .setDescription('Benjamin and his Henchmen will join your voice channel and play Astronomia! A neato fun bot!')
                .setThumbnail('https://media1.tenor.com/images/c0bfc4509ae66de179e7499517031dc8/tenor.gif')
                .addFields(
					{ name: '- !g help', value: 'This command...' },
					{ name: '- !g join', value: 'Joins the voice channel you are in' },
					{ name: '- !g leave', value: 'Leaves the voice channel incase needed!' }
                );
            return message.channel.send(helpEmbed);

	}
})

 function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
  }

clients[1].on('message', async (message) => {

	if(message.content === (`${prefix}join`) && message.member.hasPermission("ADMINISTRATOR"))
		{
			await sleep(19500);
			console.log("Client 1 is joining voice chat");
			const connection = await message.member.voice.channel.join();
			await sleep(19000)
			connection.disconnect();
			console.log("Client 1 has left voice chat");
		}
		if(message.content === (`${prefix}leave`))
		{
			message.member.voice.channel.leave();	
		}
})

clients[2].on('message', async (message) => {

	if(message.content === (`${prefix}join`) && message.member.hasPermission("ADMINISTRATOR"))
	{
		await sleep(19500);
		console.log("Client 2 is joining voice chat");
		const connection = await message.member.voice.channel.join();
		await sleep(19000)
		connection.disconnect();
		console.log("Client 2 has left voice chat");
	}
	if(message.content === (`${prefix}leave`) && message.member.hasPermission("ADMINISTRATOR"))
	{
		message.member.voice.channel.leave();	
	}
})


clients[3].on('message', async (message) => {

	if(message.content === (`${prefix}join`) && message.member.hasPermission("ADMINISTRATOR"))
	{
		await sleep(19500);
		console.log("Client 3 is joining voice chat");
		const connection = await message.member.voice.channel.join();
		await sleep(19000)
		connection.disconnect();
		console.log("Client 3 has left voice chat");
	}
	if(message.content === (`${prefix}leave`) && message.member.hasPermission("ADMINISTRATOR"))
	{
		message.member.voice.channel.leave();	
	}
})


clients[4].on('message', async (message) => {

	if(message.content === (`${prefix}join`) && message.member.hasPermission("ADMINISTRATOR"))
	{
		await sleep(19500);
		console.log("Client 4 is joining voice chat");
		const connection = await message.member.voice.channel.join();
		await sleep(19000)
		connection.disconnect();
		console.log("Client 4 has left voice chat");
	}
	if(message.content === (`${prefix}leave`) && message.member.hasPermission("ADMINISTRATOR"))
	{
		message.member.voice.channel.leave();	
	}
})


clients[5].on('message', async (message) => {

	if(message.content === (`${prefix}join`) && message.member.hasPermission("ADMINISTRATOR"))
	{
		await sleep(19500);
		console.log("Client 5 is joining voice chat");
		const connection = await message.member.voice.channel.join();
		await sleep(19000)
		connection.disconnect();
		console.log("Client 5 has left voice chat");
	}
	if(message.content === (`${prefix}leave`) && message.member.hasPermission("ADMINISTRATOR"))
	{
		message.member.voice.channel.leave();	
	}
})


clients[6].on('message', async (message) => {

	if(message.content === (`${prefix}join`) && message.member.hasPermission("ADMINISTRATOR"))
	{
		await sleep(19500);
		console.log("Client 6 is joining voice chat");
		const connection = await message.member.voice.channel.join();
		await sleep(19000)
		connection.disconnect();
		console.log("Client 6 has left voice chat");
	}
	if(message.content === (`${prefix}leave`) && message.member.hasPermission("ADMINISTRATOR"))
	{
		message.member.voice.channel.leave();	
	}
})

