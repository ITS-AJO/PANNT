const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "musichelp",
  aliases: ["mh"],
  description: "Display all commands and descriptions",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setAuthor(message.author.username , message.author.avatarURL({dynamic: true}))
      .setTitle("MOKKA SERVER BOT")
      .setDescription("List MusiC commands")
      .setColor("#F8AA2A")
.setImage('https://media.discordapp.net/attachments/735703490310963241/737813555251773601/70.gif');
    //commands.forEach((cmd) => {
      helpEmbed.addField(
        `**${message.client.prefix}help (h)**`,
`Display Music commands `
,true
      );
    
    
    
          helpEmbed.addField(
        `**${message.client.prefix}play(p)**`,
`Play Music`
,true
      );
`**${message.client.prefix}pause **`,
`Pause the currently playing music`
,true
          helpEmbed.addField(
`**${message.client.prefix}stop **`,
`Stops the music`
,true
      );

          helpEmbed.addField(
`**${message.client.prefix}skip (s)**`,
`Skip the currently playing song`
,true
      );
          helpEmbed.addField(
`**${message.client.prefix}np **`,
`Show now playing song`
,true
      );
          helpEmbed.addField(`**${message.client.prefix}playlist (pl)**`,
`Play a playlist from youtube`
,true
      );
          helpEmbed.addField(
`**${message.client.prefix}remove **`,
`Remove song from the queue`
,true
      );
          helpEmbed.addField(
`**${message.client.prefix}shuffle **`,
`Shuffle queue`
,true
      );
          helpEmbed.addField(
`**${message.client.prefix}loop (l)**`,
`Toggle music loop`
,true
      );
          helpEmbed.addField(
`**${message.client.prefix}pruning **`,
`Toggle pruning of bot messages`
,true
      );
          helpEmbed.addField(
`**${message.client.prefix}lyrics (ly)**`,
`Get lyrics for the currently playing song`
,true
      );
          helpEmbed.addField(
`**${message.client.prefix}queue (q)**`,
`Show the music queue and now playing`
,true
      );
          helpEmbed.addField(
            `**${message.client.prefix}search **`,
`Search and select videos to play`
,true
      );
          helpEmbed.addField(
`**${message.client.prefix}resume (r)**`,
`Resume currently playing music`
,true
      );
          helpEmbed.addField(
`**${message.client.prefix}shuffle **`,
`Shuffle queue`
,true
      );
          helpEmbed.addField(
`**${message.client.prefix}skipto (st)**`,
`Skip to the selected queue number`
,true
      );          helpEmbed.addField(
`**${message.client.prefix}volume (v)**`,
`Change volume of currently playing music`
,true
      );helpEmbed.addField(
`**${message.client.prefix}about (v)**`,
`About Bot`
,true
      );
  //  });

    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);
  }
};
