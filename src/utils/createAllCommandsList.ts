import { CommandInterface } from "../types/command";

import { prefix } from "../../config.json";

export function createCommandAllList(
  listAllCommands: string[]
): CommandInterface {
  const sortedNameAllCommands = listAllCommands
    .sort()
    .reduce((all, command) => `${all}\n${prefix}${command}`, "");

  const allCommands: CommandInterface = {
    name: "list",
    description: "list all commands",
    async execute(message) {
      message.reply(sortedNameAllCommands);
    },
  };

  return allCommands;
}
