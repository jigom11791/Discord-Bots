module.exports = {
  name: "pstpst",
  description: "call the cat",
  execute(message, args, cat_poke) {
    var action = Math.random() * 100 + 1;
    if (action < 50) {
      message.channel.send("*cat ignores you*");
    } else if (action >= 50 && action < 75) {
      message.channel.send("moew");
    } else {
      message.channel.send("*cat runs towards you and meows for food*");
    }
  },
};
