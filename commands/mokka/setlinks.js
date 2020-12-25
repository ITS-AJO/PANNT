const { MessageEmbed, Client } = require("discord.js");
const client = new Client({ disableMentions: "everyone" });



module.exports = {
  name: "setlinks",
  aliases: ["setlink"],
  description: "SetLink MOKKA",
  execute(message) { 
  if(message.author.bot) return;
    var fs = require('fs')

  var guild = message.guild;
  var servers = {};
if (fs.existsSync(__dirname + "/links.json"))
 var links = JSON.parse(fs.readFileSync("./links.json", "utf8"));
  var log = {};
if (fs.existsSync(__dirname + "/servers.json"))
  log = JSON.parse(fs.readFileSync("./log.json", "utf8"));  

var args = message.content.split(" ").slice(1);

  //var cmd = message.content.split(" ")[0].slice(prefix.length);
  // if (!message.content.startsWith('m!')) return;
 // if (!message.channel.guild) return;
if(message.author.bot) return;
    var richembed = new MessageEmbed();
    if (![ "666553423222669323","677636822834085899", "513281065004040194", "465428784884088841","705193856035192882"].includes(message.author.id)) {
            const embed = new MessageEmbed()
                .setAuthor("| Oops! This is Locked.", message.author.displayAvatarURL({ dynamic: true }))
                .setColor('#FF0000')
            return message.channel.send(embed);
        }
    if (args[0]) {

          links = args.join(" ");
          message.channel
            .send({
              embed: {
                color: 3447003,
                description:
                  "LINKS SETUP" +
				  `\n\n\n`+
                   links ,
                footer: {
                  icon_url: message.author.displayAvatarURL({dynamic: true}),
                  text: "Request By " + message.author.tag
                }
              }
            })
            .catch(function(e) {
              message.author.send(
                ":x: REPORT TO OZORAA"
              );
            })
          fs.writeFileSync("./links.json", JSON.stringify(links));
     
    } else {
servers.links = false;
                 message.channel.send({embed: {color: 3447003,description:
                  "**Bot disabLe By Owner Mokka **" ,
                  footer: {icon_url: message.author.displayAvatarURL({dynamic: true}),text: "Request By " + message.author.tag}}
          })
            .catch(function(e) {
              message.author.send(
                ":x:  " );
            });
         
        }
        fs.writeFileSync("./links.json", JSON.stringify(links));
  
  
  
    } 
  
  }  