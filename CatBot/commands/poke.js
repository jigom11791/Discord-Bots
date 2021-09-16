module.exports = {
  name: "poke",
  description: "poke the cat",
  execute(message, args, cat) {
    var cat_anger = cat["pet"] + cat["poke"];
    if (cat_anger > 20) {
      message.channel.send("*cat is patiently waiting for you to sleep so it can murder you*");
    } else if(cat_anger > 5) {
      message.channel.send("*you reach you had out to poke cat. Before you can touch it, it hisses and attempts to scratch you*");
    } else if(cat_anger == 4) {
      message.channel.send("*cat tries to bite you*");
    } else if(cat_anger == 3) {
      message.channel.send("*angry meow*")
    } else {
      message.channel.send("...");
    }
    cat["poke"] += 1;
  },
};
