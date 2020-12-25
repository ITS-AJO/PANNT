const { MessageEmbed, Client } = require("discord.js");
const client = new Client({ disableMentions: "everyone" });

var fs = require('fs')
var log = {};
if (fs.existsSync(__dirname + "/log.json"))
    log = JSON.parse(fs.readFileSync("./servers.log", "utf8")); 

module.exports = {
  name: "mokka",
  aliases: ["moka"],
  description: "SetLink MOKKA",
  execute(message) {     var guild = message.guild;

if (!message.channel.guild){
  

            const embed = new MessageEmbed()
                .setAuthor("| Oops! YOU CANNOT USE ME IN DM.", message.author.displayAvatarURL({ dynamic: true }))
                .setColor('#FF0000')
            return message.channel.send(embed);}
    if(!guild.me.hasPermission("ADMINISTRATOR")) return guild.leave();
    if (!log[guild.id]){
  log[guild.id] = { channel: false, "onoff":"On" };
  fs.writeFileSync("./log.json", JSON.stringify(log));}
 const embed = new MessageEmbed()
.setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
.setTitle("**MOKKA SERVER SECRET COMMAND**")
.setURL("https://discord.gg/unCFhQM")
.setColor(`#ff0000`)
.setThumbnail('https://images-ext-2.discordapp.net/external/Rumufd5qr9FN6RZWfjojXCKrUoDFu_8B_0l6IiN3plY/%3Fsize%3D1024/https/cdn.discordapp.com/icons/733449614740553732/a_e3bfdfd7daf7a86bd4b47914e84648c2.gif')
.setDescription("**" + `\n\n\n`+"m!setlinks - Set LINKS for Commands LINKS "+ `\n\n` +"m!sethax - Set LINKS For Command HAX "+`\n\n`+"m!setcmd - Set Channel for Commands "+ `\n\n`+"m!vip - MOKKA VIP LINKS"+`\n\n`+"m!link - MOKKA BYPASS LINKS"+ `\n\n`+"m!links - MOKKA BYPASS LINKS"+ `\n\n` +"m!hax - ALL HAX LINKS**" )
.setTimestamp()
.setImage('https://media.discordapp.net/attachments/734773915536064622/735812133270454302/Cc5YXQ26.gif?width=526&height=50')
.addField(
        "``` LINKS  ```",
        "**[INVITE BOT](https://discord.com/api/oauth2/authorize?client_id=695462114311012383&permissions=8&scope=bot) | [SERVER](https://discord.gg/vmJwvhY)**"      )
.setFooter("Dev: Ozoraa#9005")
message.channel.send(embed);
}

}