const { MessageEmbed, Client} = require("discord.js");
const client = new Client({ disableMentions: "everyone" });
module.exports = {
  name: "about",
  aliases: ["about"],
  description: "Display about",
  execute(message) {
    let Embed = new MessageEmbed()
.setAuthor(message.author.username , message.author.avatarURL({dynamic: true}))
      .setTitle("MOKKA SERVER BOT")
      //.setDescription("MOKKA BOT PREMIUM")
      .setColor("#F8AA2A")
.setImage('https://media.discordapp.net/attachments/735703490310963241/737813555251773601/70.gif')
    .addField("``` MyDevelopers  ```","<@677636822834085899> **[Ozoraa#9005]**",true)
.addField("``` My Ping  ```",[`${Date.now() - message.createdTimestamp}` + 'MS'],true)
.addField("``` Ram Usage  ```", `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]` ,true)
    Embed.setTimestamp();

    return message.channel.send(Embed).catch(console.error);
  }
};
