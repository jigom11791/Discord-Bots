// Require the necessary discord.js classes
const { Client, Intents } = require("discord.js");
const { token } = require("./config.json");
const fs = require('fs');
const prefix = "-";

// Create a new client instance
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

// When the client is ready, run this code (only once)
client.once("ready", () => {
  console.log("First Bot is Ready!");
});

client.on("messageCreate", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (command == "ping") {
    message.channel.send("pong!");
  } else if (command == "youtube") {
    message.channel.send("no");
  } else if (command == "pic") {
    var files = fs.readdirSync("./test1");
    //console.log(files);

//     message.channel.send({
//       files: [{
//         attachment: `./test1/${files[3]}`,
//         name: `${files[3]}`
//       }]
//     }).then(console.log).catch(console.error);
//   }
// });

    message.channel.send({
      content: "This is an embed",
      files: [{
        attachment: `./002.gif`,
        name: `002.gif`
      }]
    }).then(console.log);
  }
});

// Login to Discord with your client's token
client.login(token);
