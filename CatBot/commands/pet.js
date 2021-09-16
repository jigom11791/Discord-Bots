module.exports = {
  name: "pet",
  description: "pet the cat",
  execute(message, args, cat) {
    message.channel.send("purr purr purr ...");
    console.log(cat["cat_pet"]);
    cat["cat_pet"] += 1;
  },
};
