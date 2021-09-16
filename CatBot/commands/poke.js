module.exports = {
  name: "poke",
  description: "poke the cat",
  execute(message, args, cat) {
    var cat_anger = cat["cat_pet"] + cat["cat_poke"] - 2;
    if (cat["cat_pet"] + cat["cat_poke"] < 20) {
        message.channel.send("*cat is patiently waiting for you to sleep so it can murder you*");
    } else if()
  },
};
