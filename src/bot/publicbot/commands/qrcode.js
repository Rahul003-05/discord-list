 if (!args.length) {
   message.reply('Usage: `a!qrcode <your text to for creating qrcode`');
  }
  else{
  qr = args.join('%20');
  let link = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + qr;
  let qrembed = new Discord.MessageEmbed()
   .setColor("RANDOM")
   .setImage(link)
   .setFooter(`Requested by ${message.author.tag}`);
  message.channel.send(qrembed);
  }