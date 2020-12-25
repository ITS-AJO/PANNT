const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  aliases: ["h"],
  description: "Display all commands and descriptions",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setAuthor(message.author.username , message.author.avatarURL({dynamic: true}))
      .setTitle("MOKKA SERVER BOT")
      .setDescription("List Help commands")
      .setColor("#F8AA2A")
.setImage('https://media.discordapp.net/attachments/735703490310963241/737813555251773601/70.gif');
    //commands.forEach((cmd) => {
      helpEmbed.addField(
        `**${message.client.prefix}help (h)**`,
`Display All Category commands `
,true
      );
    
    
    
          helpEmbed.addField(
        `**${message.client.prefix}musichelp (mh)**`,
`All Command Music`
,true
      );
     helpEmbed.addField(
`**${message.client.prefix}welcomerhelp (wh)**`,
`All Welcomer Command`
,true
         ); 
    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);
  }
};
