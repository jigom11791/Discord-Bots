// Require the necessary discord.js classes
const { Client, Intents, Collection } = require("discord.js");
const { token } = require("./config.json");
const prefix = "cat_";
const fs = require("fs");

let cat = { cat_poke: 0, cat_pet: 0 };

// Create a new client instance
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

// create collections
client.commands = new Collection();
const commandFiles = fs
  .readdirSync("./commands/")
  .filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

// When the client is ready, run this code (only once)
client.once("ready", () => {
  console.log("ready for cuteness");
});

//Respond to commands
client.on("messageCreate", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (command == "pet") {
    client.commands.get("pet").execute(message, args, cat);
  } else if (command == "pstpstpst") {
    client.commands.get("pstpst").execute(message, args);
  } else if (command == "uwu") {
    client.commands.get("uwu").execute(message, args);
  } else if (command == "look") {
    client.commands.get("look").execute(message, args, cat_poke);
  } else if (command == "poke") {
    client.commands.get("poke").execute(message, args, cat);
  }
});

// Login to Discord with your client's token
client.login(token);
