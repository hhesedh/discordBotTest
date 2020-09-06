import { Collection } from "discord.js";
import { CommandInterface } from "../types/command";
import { DefaultCommandInterface } from "../types/defaultCommand";

import fs from "fs";
import { join } from "path";
import { createCommandAllList } from "../utils/createAllCommandsList";

const commandsColletion = new Collection<string, CommandInterface>();
const commandPath = join(__dirname, "..", "commands");

const allCommandsNames: string[] = [];
const commandFiles = fs
  .readdirSync(commandPath)
  .filter((file) => file.endsWith(".ts"));

for (const file of commandFiles) {
  const {
    default: command,
  }: DefaultCommandInterface = require(`${commandPath}/${file}`);
  commandsColletion.set(command.name, command);

  //contagem de todos os commandos
  allCommandsNames.push(command.name);
}

// cria um commando listando todos os comandos disponiveis
const allCommands: CommandInterface = createCommandAllList(allCommandsNames);
commandsColletion.set(allCommands.name, allCommands);

export { commandsColletion };
