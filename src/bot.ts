if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

import { Client, Collection } from "discord.js";
import { prefix } from "../config.json";
import fs from "fs";
import { CommandInterface } from "./types/command";

const client = new Client();
const commandsColletion = new Collection<string, CommandInterface>();

const commandFiles = fs
  .readdirSync(__dirname + "/commands")
  .filter((file) => file.endsWith(".ts"));

for (const file of commandFiles) {
  const {
    default: command,
  }: { default: CommandInterface } = require(`./commands/${file}`);
  commandsColletion.set(command.name, command);
}

client.on("ready", () => {
  console.log("Ready!");
  console.log(commandsColletion);
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
