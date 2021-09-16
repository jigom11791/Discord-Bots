module.exports = {
  name: "look",
  description: "look at the cat",
  execute(message, args) {
    var action = Math.random() * 100 + 1;
    if (action < 30) {
      message.channel.send("*cat is ignoring you*");
    } else if (action > 30 && action < 40) {
      message.channel.send("*Cat stares deeply into your soul*");
    } else if (action >= 40 && action < 70) {
      message.channel.send("*cat is sleeping*");
    } else if (action >= 70 && action < 80) {
      message.channel.send("*cat is judging you*");
    } else if (action >= 80 && action < 90) {
      message.channel.send("meow");
    } else {
      message.channel.send("feed me");
    }
  },
};
