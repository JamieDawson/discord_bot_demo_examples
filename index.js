const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async (msg) => {
	if (msg.content.startsWith('!hello')) {
		msg.reply('world');
	}

	//Sending message from the bot
	if (msg.content.startsWith('!dm')) {
		let messageContent = msg.content.replace('!dm', '');
		msg.member.send(messageContent);
	}

	if (msg.content.startsWith('!args')) {
		const args = msg.content.split(' ');
		let messageContent = '';
		if (args.includes('foo')) {
			messageContent += 'bar';
		}
		if (args.includes('bar')) {
			messageContent += 'baz';
		}
		if (args.includes('baz')) {
			messageContent += 'foo';
		}
		msg.reply(messageContent);
	}
});

client.login('NzY3Nzk4ODU5Mjc4NTgxODAz.X43KaQ.E1Xzx0Ui1WAQppUxydzw4RA1_ec');
