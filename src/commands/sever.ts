import { CommandInterface } from "../types/command";
import { Message } from "discord.js";

const server: CommandInterface = {
  name: "server",
  description: "Display info about this server.",
  async execute(message) {
    await message.channel.send(
      `Server name: **${message.guild?.name}**\nTotal members: **${message.guild?.memberCount}**`
    );
  },
};

export default server;
