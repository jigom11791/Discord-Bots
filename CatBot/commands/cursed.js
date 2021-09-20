var Scrapper = require("images-scraper");

const google = new Scrapper({
  puppeteer: {
    headless: true,
  },
});

module.exports = {
  name: "cursed",
  description: "cursed cat image",
  async execute(client, message, args, cat) {
    // const image_query = args.join(" ");
    // if (!image_query) return message.channel.send("Please enter an image name");

    const image_results = await google.scrape("cursed cat", 100);
    //console.log(image_results);

    var image_index = Math.floor(Math.random() * 100 + 1);
    console.log(image_results[image_index].url);
    message.channel.send(image_results[image_index].url);
  },
};
