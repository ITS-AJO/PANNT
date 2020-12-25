const { MessageEmbed } = require("discord.js");
var fs = require('fs')
var welcome = {};
if (fs.existsSync(__dirname + "/welcome.json"))
    welcome = JSON.parse(fs.readFileSync("./welcome.json", "utf8")); 

module.exports = {
  name: "setimagejoin",
  aliases: ["sim"],
  description: "SetWelcomerImage in ur server",
  execute(message) {
          var guild = message.guild;
  var args = message.content.split(" ").slice(1);

       if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Sorry you don't have permission to use this!");

if(message.author.bot) return;
    if (!guild.me.permissions.has("SEND_MESSAGES"))
      return message.author.send(
        ":x:  Auto Nickname cant send message in this channel because Missing Permission in this channel Please Give me Permission **SEND_MESSAGE and EMBED_LINKS** in this Channels  "
      );
    if (!message.member.permissions.has("MANAGE_GUILD")) {
      return message.channel.send({
        embed: {
          color: 3447003,
          description:
            " :warning: You Cannot Use Bots Because You Don't Have a Permission Manage Server. ",
          footer: {
            icon_url: message.author.displayAvatarURL({dynamic: true}),
            text: "Request By " + message.author.tag
          }
        }
      });
    }
    if (args[0]) {
      welcome[guild.id].link = args[0];

      message.channel.send({
        embed: {
          color: 3447003,
          description: "Links Welcome Has Changed ",
          footer: {
            icon_url: message.author.displayAvatarURL({dynamic: true}),
            text: "Request By " + message.author.tag
          }
        }
      });
      fs.writeFileSync("./welcome.json", JSON.stringify(welcome));
     // client.channels.cache
        // .get(`721788946954059829`)
        // .send(
        //   "**Bot's prefix has Changed on the server**   " +
        //     message.guild.name +
        //     "  by " +
        //     message.author.tag +
        //     "  NEW PREFIX = " +
        //     args[0]
        // );
    }
  } }