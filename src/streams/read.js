import { pipeline } from "stream/promises";
import { createReadStream } from "fs";
import { stdout } from "process";

export const read = async () => {
  await pipeline(createReadStream("./files/fileToRead.txt"), stdout);
};
read().catch(console.error);
