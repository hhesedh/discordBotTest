if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

import { Client } from "discord.js";

const client = new Client();

client.on("ready", () => {
  console.log("Ready!");
});

client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("Pong!");
  }
});

client.login(process.env.DISCORD_TOKEN);
