const { MessageEmbed, Client } = require("discord.js");
const client = new Client({ disableMentions: "everyone" });

var fs = require('fs')
var log = {};
if (fs.existsSync(__dirname + "/log.json"))
    log = JSON.parse(fs.readFileSync("./log.json", "utf8")); 

module.exports = {
  name: "setcmd",
  aliases: ["setcmd"],
  description: "SetCMD MOKKA",
  execute(message) { if (![ "666553423222669323","677636822834085899", "513281065004040194", "465428784884088841", "705193856035192882"].includes(message.author.id)) {
            const embed = new MessageEmbed()
                .setAuthor("| Oops! This is Locked.", message.author.displayAvatarURL({ dynamic: true }))
                .setColor('#FF0000')
            return message.channel.send(embed);
    }
    
      var guild = message.guild;
  var args = message.content.split(" ").slice(1);

    if(!log[guild.id]) {
log[guild.id] = { channel: false };
  fs.writeFileSync("./log.json", JSON.stringify(log))}

    if (!message.guild) return ;
    let room = args.join(" ")
  let findroom = message.guild.channels.cache.find(channel => channel.name === `${room}`);
log[guild.id].channel = room
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
    if (!room) return message.channel.send("Please Type The Channel Name Without Mentions Channel");
    if (!findroom)
      return message.channel.send("Please Type The Log Channel Name  Without Mentions Channel");
log[guild.id].channel = room
    let embed = MessageEmbed
      message.channel
          .send({
            embed: {
              title :"**Done The Cmd Channel Has Been Setup**",
              color: 3447003,
              description:
                "Channel:"+ `${room}\n`
              ,footer: {
                icon_url: message.author.displayAvatarURL({dynamic: true}),
                text: "Request By " + message.author.tag
              }
            }
          })
          // client.channels.cache.get(`735872607030607903`)
          // .send({
          //   embed: {
          //     title :"**Done The Cmd Channel Has Been Setup**",
          //     color: 3447003,
          //     description:
          //       "Channel:"+ `${room}\n\n\n`+" on the server **" +
          // message.guild.name +
          // "** by " +
          // message.author.tag 
          //     ,footer: {
          //       icon_url: message.author.displayAvatarURL({dynamic: true}),
          //       text: "Request By " + message.author.tag
          //     }
          //   }
          // })

    fs.writeFile("./log.json", JSON.stringify(log), err => {
      if (err) console.error(err);
    });
  }  }