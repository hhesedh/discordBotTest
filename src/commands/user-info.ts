import { CommandInterface } from "../types/command";

const userInfo: CommandInterface = {
  name: "user-info",
  description: "Display info about yourself.",
  async execute(message) {
    await message.channel.send(
      `Your username: ${message.author.username}\nYour ID: ${message.author.id}`
    );
  },
};

export default userInfo;
