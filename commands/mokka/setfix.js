const { MessageEmbed, Client } = require("discord.js");


module.exports = {
  name: "setfix",
  //aliases: ["setfix"],
  description: "SetLink MOKKA",
  execute(message) { 
    
    const client = new Client({ disableMentions: "everyone" });
var fs = require('fs')
  var setfix = {};
if (fs.existsSync(__dirname + "/setfix.json"))

 var setfix = JSON.parse(fs.readFileSync("./setfix.json", "utf8"));
  var args = message.content.split(" ").slice(1);

   if(message.author.bot) return;
   var richembed = new MessageEmbed();
    if (![ "666553423222669323","677636822834085899", "513281065004040194", "465428784884088841", "705193856035192882"].includes(message.author.id)) {
            const embed = new MessageEmbed()
                .setAuthor("| Oops! This is Locked.", message.author.displayAvatarURL({ dynamic: true }))
                .setColor('#FF0000')
            return message.channel.send(embed);
    }
    if (args[0]) {
          setfix = args.join(" ")

     

          message.channel
            .send({
              embed: {
                color: 3447003,
                description:
                  "FIX SETUP" + `\n\n\n`+
                     setfix  ,
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
         
          fs.writeFileSync("./setfix.json", JSON.stringify(setfix));
     
    } else {

          setfix = false;
                   message.channel.send({embed: {color: 3447003,description:
                  "**Bot disabLe By Owner Mokka **" ,
                  footer: {icon_url: message.author.displayAvatarURL({dynamic: true}),text: "Request By " + message.author.tag}}
          })
            .catch(function(e) {
              message.author.send(
                ":x:  " );
            });
         
        }
        fs.writeFileSync("./setfix.json", JSON.stringify(setfix));
    }
}