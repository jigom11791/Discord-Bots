module.exports = {
  name: "pet",
  description: "pet the cat",
  execute(client, message, args, cat) {
    console.log("here2");
    var cat_anger = cat["pet"] + cat["poke"];
    if (cat_anger >= 3) {
      var action = Math.random() * 100 + 1;
      console.log(action);
      if (action < 33) {
        message.channel.send("*cat tries to bite you*");
      } else if (action >= 33 && action < 66) {
        message.channel.send("*cat tries to scratch you*");
      } else {
        message.channel.send("*angry meow*");
      }
    } else {
      message.channel.send("purr purr purr ...");
      cat["pet"] += 1;
    }
  },
};
