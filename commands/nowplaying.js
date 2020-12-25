const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "np",
  description: "Show now playing song",
  execute(message) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.reply("There is nothing playing.").catch(console.error);
    const song = queue.songs[0];

    let nowPlaying = new MessageEmbed()
    .setThumbnail(message.guild.iconURL({dynamic: true}))
   .setAuthor(message.author.username , message.author.avatarURL({dynamic: true}))
      .setTitle("Now playing")
      .setDescription("<a:np:738190082489450576>"+`${song.title}\n${song.url}`)
      .setColor("#F8AA2A")
.setImage('https://media.discordapp.net/attachments/735703490310963241/737813555251773601/70.gif')
      .setTimestamp();

    if (song.duration > 0) nowPlaying.setFooter(new Date(song.duration * 1000).toISOString().substr(11, 8));

    return message.channel.send(nowPlaying);
  }
};
