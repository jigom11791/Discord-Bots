// Require the necessary discord.js classes
const { Client, Intents } = require("discord.js");
const { token } = require("./config.json");
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
  }
});

// Login to Discord with your client's token
client.login(token);
