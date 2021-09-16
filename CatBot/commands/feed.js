module.exports = {
    name: "feed",
    description: "feed the cat",
    execute(message, args, cat) {
        message.channel.send("*cat eats happily");
        cat["poke"] = 0;
        cat["pet"] = 0;
    },
}