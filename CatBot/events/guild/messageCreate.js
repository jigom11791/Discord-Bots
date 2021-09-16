let cat = { pet: 0, poke: 0 };

module.exports = (Discord, client, message) => {
  const prefix = "cat_";

  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const cmd = args.shift().toLowerCase();
  console.log(cmd);
  const command = client.commands.get(cmd);
  console.log("here");
  console.log(!command);
  if (command) {
    command.execute(client, message, args, cat);
  }
};
