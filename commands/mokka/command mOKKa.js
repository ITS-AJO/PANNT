const { MessageEmbed, Client } = require("discord.js");


module.exports = {
  name: "cmdmokka",
//  aliases: ["cmdmokka"],
  description: "SetLink MOKKA",
  execute(message) { 
    
    const client = new Client({ disableMentions: "everyone" });
var fs = require('fs')
  var servers = {};
if (fs.existsSync(__dirname + "/servers.json"))

// var servers = JSON.parse(fs.readFileSync("./servers.json", "utf8"));
  var args = message.content.split(" ").slice(1);

   if(message.author.bot) return;
   
    if (![ "666553423222669323","677636822834085899", "513281065004040194", "465428784884088841","705193856035192882"].includes(message.author.id))  return; 
    //  `please wait ${timeLeft.toFixed(1)} more second(s) before reusing the  command.`
var richembed = new MessageEmbed()
    .setColor(`#ff0000`)
//.setThumbnail('https://images-ext-2.discordapp.net/external/Rumufd5qr9FN6RZWfjojXCKrUoDFu_8B_0l6IiN3plY/%3Fsize%3D1024/https/cdn.discordapp.com/icons/733449614740553732/a_e3bfdfd7daf7a86bd4b47914e84648c2.gif')
.setDescription(`<a:garis:738190119059587083><a:garis:738190119059587083><a:garis:738190119059587083><a:garis:738190119059587083><a:garis:738190119059587083><a:garis:738190119059587083><a:ozora:738190146758770708>**MOKKA COMMANDS**<a:np:738190082489450576><a:garis:738190119059587083><a:garis:738190119059587083><a:garis:738190119059587083><a:garis:738190119059587083><a:garis:738190119059587083><a:garis:738190119059587083>**  \n\n
\`m!vip  \``+"  <a:for:738679084191842404>  "+`    V I P  MOKKA LINKS
\n\`m!links\``+"  <a:for:738679084191842404>  "+`  ALL   LINKS  MOKKA
\n\`m!link \``+"  <a:for:738679084191842404>  "+`   ALL   LINKS  MOKKA
\n\`m!hax  \``+"  <a:for:738679084191842404>  "+`    ALL    HAX   LINKS
\n\`m!fix  \``+"  <a:for:738679084191842404>  "+`    EMULATOR FIX LINKS
              \n\n** <a:garis:738190119059587083><a:garis:738190119059587083><a:garis:738190119059587083><a:garis:738190119059587083><a:garis:738190119059587083><a:garis:738190119059587083><a:ozora:738190146758770708>**MOKKA COMMANDS**<a:np:738190082489450576><a:garis:738190119059587083><a:garis:738190119059587083><a:garis:738190119059587083><a:garis:738190119059587083><a:garis:738190119059587083><a:garis:738190119059587083>`)

.setTimestamp()
.setImage('https://media.discordapp.net/attachments/734773915536064622/735812133270454302/Cc5YXQ26.gif?width=526&height=50')
.setFooter("Dev By Ozoraa#9005");
    message.channel.send(richembed);
  }
}
