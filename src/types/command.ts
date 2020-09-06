import { Message } from "discord.js";

export interface CommandInterface {
  name: string;
  description: string;
  execute: (message: Message) => Promise<void>;
}
