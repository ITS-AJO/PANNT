const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "ping",
  aliases: ["pong"],
  description: "Display all commands and descriptions",
  execute(message) {
    message.channel.send('pinging...').then(msg => {
    let embed = new MessageEmbed() //For discord v11 Change to new Discord.RichEmbed()
        .setDescription(`${msg.createdTimestamp - message.createdTimestamp}`)
    msg.edit(embed)
})
  }
};
