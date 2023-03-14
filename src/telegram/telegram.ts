/** @format */

import { Telegraf } from "telegraf";
require("dotenv").config();
const { txUser, BOT_TOKEN } = process.env;

const bot = new Telegraf(BOT_TOKEN!);

bot.start((ctx: any) => {
  ctx.reply(
    "Welcome ,You account is successfully setup and is ready to receive notifications  ..."
  );
});

export const notification = async (message: any) => {
  console.log("Sending telegram notification ...");
  bot.telegram
    .sendMessage(`${txUser}`, message, {
      parse_mode: "HTML",
      disable_web_page_preview: true,
    })
    .catch((err: any) => {
      console.log(
        "Encountered an error while sending notification to the bot "
      );
      console.log("==============================");
      console.log(err);
    });
  console.log("Done");
};
bot.launch();
