if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
import { Client } from "discord.js";
import { prefix } from "../config.json";
import { commandsColletion } from "./handlers/handleCollections";

const client = new Client();

client.on("ready", () => {
  console.log("Ready!");
});

client.on("message", async (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift()?.toLowerCase();
  if (!command) return;

  if (!commandsColletion.has(command)) return;

  try {
    await commandsColletion.get(command)?.execute(message);
  } catch (error) {
    console.error(error);
    message.reply("there was an error trying to execute that command!");
  }
});

client.login(process.env.DISCORD_TOKEN);
