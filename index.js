

const { Client, Collection,MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");
const { join } = require("path");
const {  PREFIX } = require("./config.json");

const client = new Client({ disableMentions: "everyone" });

var fs = require('fs')
var log = {};
if (fs.existsSync(__dirname + "/log.json"))
    log = JSON.parse(fs.readFileSync("./log.json", "utf8")); 


const express = require("express");
const app = express();
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
app.get("/", function(request, response) {
  response.sendFile(__dirname + "/views/index.html");
});
client.login(process.env.SECRET);
client.commands = new Collection();
client.prefix = PREFIX;
client.queue = new Map();
const cooldowns = new Collection();
const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/**
 * Client Events
 */
client.on("ready", () => {
  console.log(`${client.user.username} ready!`);

  client.user.setActivity(
    `m!help || tech3d.net
`,
 { type: "WATCHING" }
  );

});
client.on("warn", (info) => console.log(info));
client.on("error", console.error);

/**
 * Import all commands
 */
const admcommandFiles = readdirSync(join(__dirname, "commands/mokka")).filter((file) => file.endsWith(".js"));
for (const file of admcommandFiles) {
  const admcommand = require(join(__dirname, "commands/mokka", `${file}`));
  client.commands.set(admcommand.name, admcommand);
}
const commandFiles = readdirSync(join(__dirname, "commands")).filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(join(__dirname, "commands", `${file}`));
  client.commands.set(command.name, command);
}

client.on("message", async (message) => {
  
  //client.guilds.cache.get("724435573926002788").channels.cache.get("735703490310963241").send("Message from an other channel: " + message.content);

  if (message.author.bot) return;
  if (!message.guild) return;

  const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(PREFIX)})\\s*`);
  if (!prefixRegex.test(message.content)) return;

  const [, matchedPrefix] = message.content.match(prefixRegex);

  const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  const command =
    client.commands.get(commandName) ||
    client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));

  if (!command) return;

  if (!cooldowns.has(command.name)) {
    cooldowns.set(command.name, new Collection());
  }

  const now = Date.now();
  const timestamps = cooldowns.get(command.name);
  const cooldownAmount = (command.cooldown || 1) * 1000;

  if (timestamps.has(message.author.id)) {
    const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

    if (now < expirationTime) {
      const timeLeft = (expirationTime - now) / 1000;
      return message.reply(
        `please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`
      );
    }
  }

  timestamps.set(message.author.id, now);
  setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

  try {
    command.execute(message, args);
    if (!message.channel.guild){
const embeda = new MessageEmbed()
	.setAuthor(`MESSAGE IN DMS`, `${message.author.avatarURL({dynamic: true})}`)
	.setColor('#0099ff')
.setThumbnail(message.author.avatarURL({dynamic: true}))
.setDescription(`[(${message.guild && message.guild.name}) **ID** ${message.guild &&
          message.guild.id} ]`+"**"+`\n **User ID** ${message.author.id} ${
          message.author.tag
        }`+"**" +` `+" ***"+`\n USE COMMAND: ${message.content} `+ "***" )
.setTimestamp()
.setFooter(` MESSAGE IN DMS`,`https://images-ext-1.discordapp.net/external/A-TZxFWhIgXZtdxlDvXC5PdujhMK6Tdf3sNRKNQOTgM/https/cdn.discordapp.com/icons/733449614740553732/a_e3bfdfd7daf7a86bd4b47914e84648c2.gif`)
client.channels.cache.get(`733453193719054348`).send(embeda)
}
      else{
	const embeda = new MessageEmbed()
	.setAuthor(`${message.guild.name}`, `${message.guild.iconURL({dynamic: true})}`)
	.setColor('#0099ff')
.setThumbnail(message.author.avatarURL({dynamic: true}))
.setDescription(`[(${message.guild && message.guild.name}) **ID** ${message.guild &&
          message.guild.id} ]`+"**"+`\n **User ID** ${message.author.id} ${
          message.author.tag
        }`+"**" +` `+" ***"+`\n USE COMMAND: ${message.content} `+ "***" )
.setTimestamp()
.setFooter(` Channel #${message.channel.name}`,`https://images-ext-1.discordapp.net/external/A-TZxFWhIgXZtdxlDvXC5PdujhMK6Tdf3sNRKNQOTgM/https/cdn.discordapp.com/icons/733449614740553732/a_e3bfdfd7daf7a86bd4b47914e84648c2.gif`)
client.channels.cache.get(`733453193719054348`).send(embeda)
};
  } catch (error) {
    console.error(error);
    message.reply("There was an error executing that command.").catch(console.error);
  }
});
client.on("guildMemberAdd", member => {
  member.send("VIP SG-BYPASS JOIN https://discord.gg/uGjcSWs").catch(console.error);
const lola = member.user.displayAvatarURL({dynamic: true})
const paka = member.user.tag
const pakak = member.user.username
  const guild = member.guild;

const fs=require('fs')
      var welcome = {};
if (fs.existsSync(__dirname + "/welcome.json"))
    welcome = JSON.parse(fs.readFileSync("./welcome.json", "utf8")); 
 if(!welcome[guild.id]) return;
 let room = welcome[guild.id].channel;
  let findroom = member.guild.channels.cache.find(channel => channel.name === `${room}`);
if (!findroom) return ;
  var isi = welcome[guild.id].isi
  var link = welcome[guild.id].link
  const embed = new MessageEmbed()
    .setAuthor(paka , lola)

    .setTitle("**WELCOME TO  " + member.guild.name  + "**")
    .setColor(`#ff0000`)
    .setURL("https://discord.gg/unCFhQM")
.setThumbnail(lola)
.setDescription(isi)
// .addField(
//         "``` LINKS  ```",
//         "**[INVITE BOT](https://github.com/ITS-AJO/AutoNicknameBot) | [SUPPORT SERVER](https://discord.gg/unCFhQM)**"      )
.setTimestamp()
.setImage(link)
.setFooter(member.guild.name + " | " + guild.members.cache.size + " Members**", member.guild.iconURL({dynamic: true}))
findroom.send(`${member.user}`);
findroom.send(embed);

});
 
  client.on("guildCreate", function(guild) {
  
  if (!guild.available) return;
  log[guild.id] = { channel: false, "onoff":"On" };
  fs.writeFileSync("./log.json", JSON.stringify(log));
  client.channels.cache
    .get(`735872607030607903`)
    .send(
      " ** :white_check_mark: :partying_face:  MOKKA bot has been added on the server  **" +
        guild.name +"  **with** " +guild.members.cache.size + " **members** " + 
        " now  **" +
        client.guilds.cache.size +
        "** servers use it" 
    )

  client.user.setActivity(
    `m!help || bit.ly/AutoNickname
`//,
    //{ type: "WATCHING" }
  );

});
const fetch = require('node-fetch');

client.on("guildDelete", function(guild) {
  delete log[guild.id];
fs.writeFileSync("./log.json", JSON.stringify(log));
  client.channels.cache
    .get(`735872607030607903`)
    .send(
      " ** :sob: :sob: MOKKA BOT has delete on the server  **" +
        guild.name + 
        " now  **" +
        client.guilds.cache.size +
        "** servers use it" 
    ).catch(function(e) {
    client.channels.cache
      .get(`735872607030607903`)
      .send(
        " ** :sob: :sob: Auto Nickname has delete on the server  **" +
        guild.name +
        " now  **" +
        client.guilds.cache.size +
        "** servers use it" 
      );
  });
  
  client.user.setActivity(
    `m!help || bit.ly/AutoNickname
`//,
    //{ type: "WATCHING" }
  );
});
// client.on('guildMemberRemove', async member => {
//   // member.send("VIP BYPASS JOIN https://discord.gg/vqkuqvP").catch(console.error);
// });
client.on("voiceStateUpdate", function (oldState, newState,) { 
if (oldState.member != newState.member) return;
  const member = newState.member;
//     var userAvatar = logs.entries.first().executor.avatarURL;
 
  // Get points


  // Set IDs
  const oldId = oldState.channelID;
  const newId = newState.channelID;
  const afkId = member.guild.afkChannelID;

  if (oldId === newId) return;
  else if ((!oldId || oldId === afkId) && newId && newId !== afkId) { 
    member.setNickname(
         `🎮 ${member.user.username}`
        ).catch(console.error)// Joining channel that is not AFK

    const embeda = new MessageEmbed()
	.setTitle(`**[JOIN VOICE CHANNEL]**` )
	.setColor('#4fb443')
.setThumbnail(member.user.displayAvatarURL({dynamic: true}))
.setDescription(`**User** ${member}  ${member.user.tag}\n **ID**` +member+`\n JOIN TO : **<#`+newId + ">**" )
.setTimestamp()
.setFooter("MOKKA","https://images-ext-1.discordapp.net/external/A-TZxFWhIgXZtdxlDvXC5PdujhMK6Tdf3sNRKNQOTgM/https/cdn.discordapp.com/icons/733449614740553732/a_e3bfdfd7daf7a86bd4b47914e84648c2.gif")
client.channels.cache.get('734773915536064622').send(embeda)
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  } else if (oldId && (oldId !== afkId && !newId )) { // Leaving voice chat or joining AFK
    member.setNickname(
         ``
        ).catch(console.error)

    const embeda = new MessageEmbed()
	.setTitle(`**[LEAVE VOICE CHANNEL]**` )
	.setColor('#de061a')
    .setThumbnail(member.user.displayAvatarURL({dynamic: true}))

.setDescription(`**User** ${member}  ${member.user.tag}\n **ID**` +member+`\n LEAVE : **<#`+oldId + ">**" )
.setTimestamp()
.setFooter("MOKKA","https://images-ext-1.discordapp.net/external/A-TZxFWhIgXZtdxlDvXC5PdujhMK6Tdf3sNRKNQOTgM/https/cdn.discordapp.com/icons/733449614740553732/a_e3bfdfd7daf7a86bd4b47914e84648c2.gif")
client.channels.cache.get('734773915536064622').send(embeda)    
    
    
    
     } else if (oldId && (oldId !== afkId && !newId || newId === afkId)) { 
    member.setNickname(
         `[AFK] ${member.user.username}`
        ).catch(console.error)
// Leaving voice chat or joining AFK
//client.channels.cache.get('734773915536064622').send(`${member} JOIN AFK!`);

       
     const embeda = new MessageEmbed()
	.setTitle(`**[MEMBER AFK]**` )
	.setColor('#333333')
     .setThumbnail(member.user.displayAvatarURL({dynamic: true}))

.setDescription(`**User** ${member}  ${member.user.tag}\n **ID**` +member+`\n FROM : **<#`+oldId + ">**"+`  TO : **<#`+newId + ">**"  )
.setTimestamp()
.setFooter("MOKKA","https://images-ext-1.discordapp.net/external/A-TZxFWhIgXZtdxlDvXC5PdujhMK6Tdf3sNRKNQOTgM/https/cdn.discordapp.com/icons/733449614740553732/a_e3bfdfd7daf7a86bd4b47914e84648c2.gif")
client.channels.cache.get('734773915536064622').send(embeda)        
       
       
       
       
       
       
       
       
       
       
       
       
      
} else if (oldId && (oldId !== afkId && newId )) { // Leaving voice chat or joining AFK
    // member.setNickname(
    //      ``
    //     ).catch(console.error)
//client.channels.cache.get('734773915536064622').send(`${member} move!`);
     const embeda = new MessageEmbed()
	.setTitle(`**[SWITCH VOICE CHANNEL]**` )
	.setColor('#d9b42c')
     .setThumbnail(member.user.displayAvatarURL({dynamic: true}))
.setDescription(`**User** ${member}  ${member.user.tag}\n **ID**` +member+`\n FROM : **<#`+oldId + ">**"+`  TO : **<#`+newId + ">**"  )
.setTimestamp()
.setFooter("MOKKA","https://images-ext-1.discordapp.net/external/A-TZxFWhIgXZtdxlDvXC5PdujhMK6Tdf3sNRKNQOTgM/https/cdn.discordapp.com/icons/733449614740553732/a_e3bfdfd7daf7a86bd4b47914e84648c2.gif")
client.channels.cache.get('734773915536064622').send(embeda)    


  }
}
          )//   let oldVoice = oldState.voiceChannel; 
client.on('messageUpdate',( oldMessage, newMessage) => {

  if (newMessage.webhookID) return; // Check for webhook

  // Detect edited commands
  if (
    newMessage.member && 
    newMessage.id === newMessage.member.lastMessageID &&
    !oldMessage.command
  ) {
    client.emit('message', newMessage);
  }

  const embed = new MessageEmbed()
    .setAuthor(`${newMessage.author.tag}`, newMessage.author.displayAvatarURL({ dynamic: true }))
    .setTimestamp()
    .setColor(`RED`);

  // Content change
  if (oldMessage.content != newMessage.content) {

    // Dont send logs for starboard edits
    const starboardChannelId = ('734773915536064622');
    const starboardChannel = newMessage.guild.channels.cache.get(starboardChannelId);
    if (newMessage.channel == starboardChannel) return;

    // Get message edit log
    const messageEditLogId = ('733453190229524560');
    const messageEditLog = newMessage.guild.channels.cache.get(messageEditLogId);
    if (
      messageEditLog &&
      messageEditLog.viewable &&
      messageEditLog.permissionsFor(newMessage.guild.me).has(['SEND_MESSAGES', 'EMBED_LINKS'])
    ) {

      if (newMessage.content.length > 1024) newMessage.content = newMessage.content.slice(0, 1021) + '...';
      if (oldMessage.content.length > 1024) oldMessage.content = oldMessage.content.slice(0, 1021) + '...';

      embed
        .setTitle('Message Update: `Edit`')
        .setDescription(`
          ${newMessage.member}'s **message** in ${newMessage.channel} was edited. [Jump to message!](${newMessage.url})
        `)
        .addField('Before', oldMessage.content)
        .addField('After', newMessage.content);
      messageEditLog.send(embed);
    }
  }

  // Embed delete
  if (oldMessage.embeds.length > newMessage.embeds.length) {
    // Get message delete log
    const messageDeleteLogId = ('733453192821604454');
    const messageDeleteLog = newMessage.guild.channels.cache.get(messageDeleteLogId);
    if (
      messageDeleteLog &&
      messageDeleteLog.viewable &&
      messageDeleteLog.permissionsFor(newMessage.guild.me).has(['SEND_MESSAGES', 'EMBED_LINKS'])
    ) {

      embed.setTitle('Message Update: `Delete`');
      if (oldMessage.embeds.length > 1)
        embed.setDescription(`${newMessage.member}'s **message embeds** in ${newMessage.channel} were deleted.`);
      else
        embed.setDescription(`${newMessage.member}'s **message embed** in ${newMessage.channel} was deleted.`);
      messageDeleteLog.send(embed);
    }
  }
});