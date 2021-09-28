const fs = require('fs');

module.exports = {
  name: "explode",
  description: "cursed cat image",
  execute(client, message, args, cat) {
      var files = fs.readdirSync("./commands/explode");
      var r = Math.floor(Math.random()*files.length);
      //console.log(files);

      message.channel.send({
          files: [{
            attachment: `./commands/explode/${files[r]}`,
            name: `${files[r]}`
          }]
      }).then(console.log).catch(console.error);
  },
};
