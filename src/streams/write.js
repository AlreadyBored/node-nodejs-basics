import { pipeline } from "stream/promises";
import { createWriteStream } from "fs";
import { stdin } from "process";

export const write = async () => {
  await pipeline(stdin, createWriteStream("./files/fileToWrite.txt"));
};
write().catch(console.error);
