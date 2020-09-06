import { Collection } from "discord.js";
import { CommandInterface } from "../types/command";
import { DefaultCommandInterface } from "../types/defaultCommand";

import fs from "fs";
import { join } from "path";

const commandsColletion = new Collection<string, CommandInterface>();
const commandPath = join(__dirname, "..", "commands");

const commandFiles = fs
  .readdirSync(commandPath)
  .filter((file) => file.endsWith(".ts"));

for (const file of commandFiles) {
  const {
    default: command,
  }: DefaultCommandInterface = require(`${commandPath}/${file}`);
  commandsColletion.set(command.name, command);
}

export { commandsColletion };
