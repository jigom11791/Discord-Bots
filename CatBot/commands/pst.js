module.exports = {
  name: "pstpst",
  description: "call the cat",
  execute(client, message, args, cat) {
    var cat_anger = cat["pet"] + cat["poke"];
    var action = Math.random() * 100 + 1;

    if(cat_anger >= 20){
      message.channel.send("*cat is patiently waiting for you to sleep so it can murder you*");
    } else {
      if (action < 50) {
        message.channel.send("*cat ignores you*");
      } else if (action >= 50 && action < 75) {
        message.channel.send("moew");
      } else {
        message.channel.send("*cat runs towards you and meows for food*");
      }
    }
  },
};
