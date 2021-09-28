const fs = require('fs');

module.exports = {
    name: "fail",
    descriptions: "images of cats failing",
    execute(client, message, args, cat) {
        var files = fs.readdirSync("./commands/fail");
        var r = Math.floor(Math.random()*files.length);

        message.channel.send({
            files: [{
                attachment: `./commands/fail/${files[r]}`,
                name: `${files[r]}`
            }]
        }).then(console.log).catch(console.error);
    }
}