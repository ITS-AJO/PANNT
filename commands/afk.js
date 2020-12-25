const { MessageEmbed, Client} = require("discord.js");
const client = new Client;
module.exports = {
  name: "afk",
//  aliases: ["afk"],
  description: "Display all commands and descriptions",
   execute(message) {
if (message.member.nickname == `[AFK] ${message.author.username}`){
  message.member.setNickname("").catch(console.error)
  message.channel.send(`${message.author} AFK OFF`);
  } 
     else {
    message.member.setNickname(
         `[AFK] ${message.author.username}`
        ).catch(console.error)
message.channel.send(`${message.author} AFK ON`);
  //  message.member.setNickname.nickname.replace("AFK {user}",message.author.username).catch(console.error)
  }
   }
};
    // var ping = Date.now() - message.createdTimestamp + " ms";
    // message.channel
    //   .send({
    //     embed: {
    //       color: 3447003,
    //       description: ":ping_pong: " + `**Latency is \`${Date.now() - message.createdTimestamp}\`ms.\nAPI Latency is \`${Math.round(client.ws.ping)}\`ms**`,
    //       footer: {
    //         icon_url: message.author.displayAvatarURL({dynamic: true}),
    //         text: "Request By " + message.author.tag
    //       }
    //     }
    //   })