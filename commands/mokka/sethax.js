const { MessageEmbed, Client } = require("discord.js");


module.exports = {
  name: "sethack",
  aliases: ["sethax"],
  description: "SetLink MOKKA",
  execute(message) { 
    
    const client = new Client({ disableMentions: "everyone" });
var fs = require('fs')
  var servers = {};
if (fs.existsSync(__dirname + "/servers.json"))

 var servers = JSON.parse(fs.readFileSync("./servers.json", "utf8"));
  var args = message.content.split(" ").slice(1);

   if(message.author.bot) return;
   var richembed = new MessageEmbed();
    if (![ "666553423222669323","677636822834085899", "513281065004040194", "465428784884088841","705193856035192882"].includes(message.author.id)) {
            const embed = new MessageEmbed()
                .setAuthor("| Oops! This is Locked.", message.author.displayAvatarURL({ dynamic: true }))
                .setColor('#FF0000')
            return message.channel.send(embed);
    }
    if (args[0]) {
          servers.hax = args.join(" ")

     

          message.channel
            .send({
              embed: {
                color: 3447003,
                description:
                  "hax SETUP" + `\n\n\n`+
                     servers.hax  +
                  "SETUP hax",
                footer: {
                  icon_url: message.author.displayAvatarURL({dynamic: true}),
                  text: "Request By " + message.author.tag
                }
              }
            })
            .catch(function(e) {
              message.author.send(
                ":x:  " );
            });
         
          fs.writeFileSync("./servers.json", JSON.stringify(servers));
     
    } else {

          servers.hax = false;
                   message.channel.send({embed: {color: 3447003,description:
                  "**Bot disabLe By Owner Mokka **" ,
                  footer: {icon_url: message.author.displayAvatarURL({dynamic: true}),text: "Request By " + message.author.tag}}
          })
            .catch(function(e) {
              message.author.send(
                ":x:  " );
            });
         
        }
        fs.writeFileSync("./servers.json", JSON.stringify(servers));
    }
}