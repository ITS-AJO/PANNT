const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "welcomerhelp",
  aliases: ["wh"],
  description: "Display all commands and descriptions",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setAuthor(message.author.username , message.author.avatarURL({dynamic: true}))
      .setTitle("MOKKA SERVER BOT")
      .setDescription("List Welcomer commands")
      .setColor("#F8AA2A")
.setImage('https://media.discordapp.net/attachments/735703490310963241/737813555251773601/70.gif');
    //commands.forEach((cmd) => {
      helpEmbed.addField(
        `**${message.client.prefix}setjoinchannel **`,
`Set Join Channel Server `
,true
      );
          helpEmbed.addField(
        `**${message.client.prefix}setmessagejoin**`,
`Set Message Join Server`
,true
      );
helpEmbed.addField(

`**${message.client.prefix}setimagejoin **`,
`Set Image Join Server`
,true
    );        
    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);
  }
};
