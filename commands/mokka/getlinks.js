const { MessageEmbed, Client } = require("discord.js");
const client = new Client({ disableMentions: "everyone" });


module.exports = {
  name: "links",
  aliases: ["link"],
  description: "Link MOKKA BYPASS",
    cooldown: 20,

  execute(message) { 
  //var args = room
      var guild = message.guild;
var fs=require('fs')
   var log = JSON.parse(fs.readFileSync("./log.json", "utf8")); 
  var servers = {};
if (fs.existsSync(__dirname + "/servers.json"))
  servers = JSON.parse(fs.readFileSync("./servers.json", "utf8"));

if(log[guild.id])
var room = log[guild.id].channel
 // var roo = log[guild.id].channel

if (!message.channel.guild){
            const embed = new MessageEmbed()
                .setAuthor("| Oops! YOU CANNOT USE ME IN DM.", message.author.displayAvatarURL({ dynamic: true }))
                .setColor('#FF0000')
            return message.channel.send(embed);}if(!guild.me.hasPermission("ADMINISTRATOR")) return guild.leave();
    if (!log[guild.id]){
  log[guild.id] = { channel: false };
  fs.writeFileSync("./log.json", JSON.stringify(log));}
  var logChannel = message.guild.channels.cache.find(channel => channel.name === `${log[message.guild.id].channel}`  );
if (!logChannel) return message.channel.send("Contact the server Moderator to activate the Channel Command type **m!setcmd** channel");
//      if(!message.member.roles.cache.has('733453145702662215')){ message.delete();
// message.reply()
// const embed = new Discord.MessageEmbed()
//                 .setAuthor("| Oops!  You do not have a verified role on the MOKKA server.", message.author.displayAvatarURL({ dynamic: true }))
//     .setTitle("**CLICK TO JOIN MOKKA SERVER**")
//     .setURL("https://discord.gg/vmJwvhY")
//                 .setColor('#FF0000')
//             return message.channel.send(embed);}
   if (message.channel!==logChannel){ message.delete(); return message.reply("Command Only Available on Channel "+ `${logChannel}`);             }
var fs = require('fs')
  
//if (fs.existsSync(__dirname + "/servers.json"))

 var links = JSON.parse(fs.readFileSync("./links.json", "utf8"));

    if (links) {
 const embed = new MessageEmbed()
 
	                .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))

    .setTitle("**CLICK TO JOIN MOKKA SERVER**")
    .setColor(`#ff0000`)
    .setURL("https://discord.gg/vmJwvhY")
.setThumbnail('https://images-ext-2.discordapp.net/external/Rumufd5qr9FN6RZWfjojXCKrUoDFu_8B_0l6IiN3plY/%3Fsize%3D1024/https/cdn.discordapp.com/icons/733449614740553732/a_e3bfdfd7daf7a86bd4b47914e84648c2.gif')
.setDescription("<a:garis:738190119059587083><a:garis:738190119059587083><a:garis:738190119059587083><a:garis:738190119059587083><a:ozora:738190146758770708>**MOKKA BYPASS**<a:np:738190082489450576><a:garis:738190119059587083><a:garis:738190119059587083><a:garis:738190119059587083><a:garis:738190119059587083>**" + `\n\n\n` +
                            links +
              "\n\n [VOTE BOT](https://discordbotlist.com/bots/mokka-server) | [MOKKA SERVER](https://discord.gg/vmJwvhY) | [BOT SERVER](https://discord.gg/RMqkk2v)**\n\n\n <a:garis:738190119059587083><a:garis:738190119059587083><a:garis:738190119059587083><a:garis:738190119059587083><a:ozora:738190146758770708>**MOKKA BYPASS**<a:np:738190082489450576><a:garis:738190119059587083><a:garis:738190119059587083><a:garis:738190119059587083><a:garis:738190119059587083>")
.setTimestamp()
.setImage('https://media.discordapp.net/attachments/734773915536064622/735812133270454302/Cc5YXQ26.gif?width=526&height=50')
.setFooter("Dev By Ozoraa#9005")
 
            message.delete(); message.author.send(embed).catch(function(e) {message.reply("I can't send a message to you, pls activate your DM")});
      
message.reply("Check Ur Dms")
  .then(message => {
    message.delete({ timeout: 5000 })
  })
  .catch(console.error);
        
    } else {
      
message.channel.send({embed: {color: 3447003,description:
                  "**Bot disabLe By Owner Mokka **" ,
                  footer: {icon_url: message.author.displayAvatarURL({dynamic: true}),text: "Request By " + message.author.tag}}
          })
            .catch(function(e) {
              message.author.send(
                ":x:  " );
            });
      
    }
  }
}