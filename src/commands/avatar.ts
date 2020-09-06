import { CommandInterface } from "../types/command";

const avatar: CommandInterface = {
  name: "avatar",
  description: "Get the avatar URL of the tagged user(s), or your own avatar.",
  async execute(message) {
    if (!message.mentions.users.size) {
      await message.channel.send(
        `Your avatar: ${message.author.displayAvatarURL({ dynamic: true })}`
      );
      return;
    }

    const avatarList = message.mentions.users.map((user) => {
      return `${user.username}'s avatar: ${user.displayAvatarURL({
        dynamic: true,
      })}`;
    });

    await message.channel.send(avatarList);
  },
};

export default avatar;
