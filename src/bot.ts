if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

import { Client } from "discord.js";
import { prefix } from "../config.json";

const client = new Client();

client.on("ready", () => {
  console.log("Ready!");
});

client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift()?.toLowerCase();
  if (!command) return;

  if (message.content === "ping") {
    message.reply("Pong!");
  }
});

client.login(process.env.DISCORD_TOKEN);
