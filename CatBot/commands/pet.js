module.exports = {
  name: "pet",
  description: "pet the cat",
  execute(message, args, cat) {
    var cat_anger = cat["pet"] + cat["poke"];
    if(cat_anger > 3) {
      var action = Math.random() * 100 + 1;
      if(action < 33) {
        message.channel.send("*cat tries to bite you*");
      } else if(action >= 33 && anction < 66) {
        message.channel.sends("*cat tries to scratch you");
      } else {
        message.channel.send("*angry meow*");
      }
    } else {
      message.channel.send("purr purr purr ...");
      cat["pet"] += 1;
    }
  },
};
