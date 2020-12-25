const { MessageEmbed, Client } = require("discord.js");
const client = new Client({ disableMentions: "everyone" });


module.exports = {
  name: "vip",
  aliases: ["vvip"],
  description: "SetLink MOKKA",
    cooldown: 20,

  execute(message) { 
  if(message.author.bot) return;
//var args = room
      var guild = message.guild;
const fs=require('fs')
   var log = JSON.parse(fs.readFileSync("./log.json", "utf8")); 
if(log[guild.id])
var room = log[guild.id].channel
 // var roo = log[guild.id].channel

if (!message.channel.guild){
            const embed = new MessageEmbed()
                .setAuthor("| Oops! YOU CANNOT USE ME IN DM.", message.author.displayAvatarURL({ dynamic: true }))
                .setColor('#FF0000')
            return message.channel.send(embed);}
    if(!guild.me.hasPermission("ADMINISTRATOR")) return guild.leave();
  let findroom = guild.channels.cache.find(channel => channel.name ===  `${room}`);

    if (!findroom) return  message.channel.send("Contact the server Moderator to activate the Channel Command type **m!setcmd** channel");

  if (message.channel!==findroom){ message.delete(); return message.reply("Command Only Available on Channel "+ `${findroom}`);             }

 const embed = new MessageEmbed()

.setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
.setTitle("**CLICK ME TO BUY MOKKA VIP**")
.setURL("https://shoppy.gg/@mokkaa2")
.setColor(`#ff0000`)
.setTimestamp()
.setImage('https://media.discordapp.net/attachments/734773915536064622/735812133270454302/Cc5YXQ26.gif?width=526&height=50')
.setFooter("Dev: Ozoraa#9005")
            message.delete(); message.author.send(embed).catch(function(e) {message.reply("I can't send a message to you, pls activate your DM")});
message.reply("Check Ur Dms")   .then(message => {     message.delete({ timeout: 5000 })   })   .catch(console.error);

}
}