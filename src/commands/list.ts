import { CommandInterface } from "../types/command";
import { commandsColletion } from "../handlers/handleCollections";
import { prefix } from "../../config.json";
import { MessageEmbed } from "discord.js";

const list: CommandInterface = {
  name: "list",
  description: "List all commands.",
  async execute(message) {
    const allComandsList = commandsColletion
      .keyArray()
      .sort()
      .reduce((all, command) => `${all}\n${prefix}${command}`, "");

    const embed = new MessageEmbed()
      .setTitle("Comandos do bot")
      .setColor(0xff0000)
      .setDescription(allComandsList);

    await message.reply(embed);
  },
};

export default list;
