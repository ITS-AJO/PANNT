const { MessageEmbed } = require("discord.js");
var fs = require('fs')
var welcome = {};
if (fs.existsSync(__dirname + "/welcome.json"))
    welcome = JSON.parse(fs.readFileSync("./welcome.json", "utf8")); 

module.exports = {
  name: "setjoinchannel",
  aliases: ["sjc"],
  description: "SetWelcomerChannel in ur server",
  execute(message) {
    
       if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Sorry you don't have permission to use this!");

    
      var guild = message.guild;
  var args = message.content.split(" ").slice(1);

    if(!welcome[guild.id]) {
welcome[guild.id] = { channel: false, isi: "Have a great time here", link:"https://media.discordapp.net/attachments/735703490310963241/737813555251773601/70.gif?width=298&height=50" };
  fs.writeFileSync("./welcome.json", JSON.stringify(welcome))}

    if (!message.guild) return ;
    let room = args.join(" ")
  let findroom = message.guild.channels.cache.find(channel => channel.name === `${room}`);
welcome[guild.id].channel = room
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
    if (!room) return message.channel.send("Please Type The Channel Name Without Mentions Channel");
    if (!findroom)
      return message.channel.send("Please Type The Log Channel Name  Without Mentions Channel");
welcome[guild.id].channel = room
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

    fs.writeFile("./welcome.json", JSON.stringify(welcome), err => {
      if (err) console.error(err);
    });
  }  }