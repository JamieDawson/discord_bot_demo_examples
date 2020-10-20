require('dotenv').config();
const axios = require('axios');

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async (msg) => {
	if (msg.author.bot) {
		return;
	}

	//if someone types !hello. Run this serverless function and return the values.
	if (msg.content.startsWith('!hello')) {
		// msg.reply('world!');
		axios
			.get(
				'https://apigcp.nimbella.io/api/v1/web/jamierob-hzoysjqazdd/default/hello.json'
			)
			.then(function (response) {
				// handle success
				const value = response.data.body;
				//console.log(response.data.body);
				msg.reply(value);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
				msg.reply('screwed up');
			});
	}

	//If someone says !dm [message]. Email them the message.
	if (msg.content.startsWith('!dm')) {
		let messageContent = msg.content.replace('!dm', '');
		msg.member.send(messageContent);
	}

	//!args [arguments]. Creates string from replaced arguements.
	if (msg.content.startsWith('!args')) {
		const args = msg.content.split(' ');
		let messageContent = '';
		if (args.includes('foo')) {
			messageContent += 'bar ';
		}
		if (args.includes('bar')) {
			messageContent += 'baz ';
		}
		if (args.includes('baz')) {
			messageContent += 'foo ';
		}
		msg.reply(messageContent);
	}
});

client.login(process.env.DISCORD_BOT_TOKEN);
