const fs = require('fs');

module.exports = {
  name: "cursed",
  description: "cursed cat image",
  execute(client, message, args, cat) {
    var files = fs.readdirSync("./commands/cursed");
    var r = Math.floor(Math.floor(Math.random()*files.length))
    console.log(files);

    message.channel.send({
      files: [{
        attachment: `./commands/cursed/${files[r]}`,
        name: `${files[r]}`
      }]
    }).then(console.log).catch(console.error);
  },
};
