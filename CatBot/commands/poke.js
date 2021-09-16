module.exports = {
  name: "poke",
  description: "poke the cat",
  execute(client, message, args, cat) {
    var cat_anger = cat["pet"] + cat["poke"];
    if (cat_anger > 20) {
      message.channel.send(
        "*cat is patiently waiting for you to sleep so it can murder you*"
      );
    } else if (cat_anger > 5) {
      var action = Math.random() * 100 + 1;
      if (action < 25) {
        message.channel.send(
          "*you reach you hand out to poke cat. Before you can touch it, it hisses and attempts to scratch you*"
        );
      } else if (action >= 25 && action < 50) {
        message.channel.send("*cat tries to bite you*");
      } else if (action >= 50 && action < 75) {
        message.channel.send("hissssss");
      } else {
        message.channel.send("*cat scratches you drawing blood*");
      }
    } else if (cat_anger == 4) {
      message.channel.send("*cat tries to bite you*");
    } else if (cat_anger == 3) {
      message.channel.send("*angry meow*");
    } else {
      message.channel.send("...");
    }
    cat["poke"] += 1;
  },
};
