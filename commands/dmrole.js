const { MessageEmbed } = require("discord.js");
var fs = require('fs')
var welcome = {};
if (fs.existsSync(__dirname + "/welcome.json"))
    welcome = JSON.parse(fs.readFileSync("./welcome.json", "utf8")); 

module.exports = {
  name: "dmrole",
  aliases: ["dmrole"],
  description: "SetWelcomerChannel in ur server",
  execute(message) {
             var guild = message.guild;
  var args = message.content.split(" ").slice(1);
    
//     if (![ "705193856035192882", "677636822834085899","733403953147936910","580299866673250304"].includes(message.author.id)) {
//             const embed = new MessageEmbed()
//                 .setAuthor("| Oops! This is Locked.", message.author.displayAvatarURL({ dynamic: true }))
//                 .setColor('#FF0000')
//             return message.channel.send(embed);
//     }
//  if (!["705193856035192882", "677636822834085899"].includes(message.author.id)) return;

    let role = message.mentions.roles.first();
    let msg = args.slice(1).join(" ");

    if (!role) {
      message.author.send("No valid role mentioned!");
      return;
    }

    if (!msg || msg.length <= 0) {
      message.author.send("Specify a message!");
      return;
    }
    role.members.forEach(m => {
      setTimeout(function() {
        m.send(` ${m} \n ${msg}`).catch(err => {
          message.guild.channels.cache.find
            (c => c.name === "dmlogs")
            .send(" FUCK USER  **" + `${m}` + "**  has Direct Messages Disabled!");
        });
      });
    }, Math.floor(Math.random() * 9999));
    
    const embed = new MessageEmbed()
.setTitle("**DM BOT PREMIUM MOKKA **")
      
      .setDescription(

        "<a:okeboss:737752861039132753> Responding to " +`${message.author} `+" \n \n <a:lodi:727391572341162045> Sending message to " + `${role} \n\n`+ " TOTAL " +`${role}`+ `= ${role.members.size}`
      );
    message.guild.channels.cache.find(c => c.name === "dmlogs").send(embed);
  }
  }  