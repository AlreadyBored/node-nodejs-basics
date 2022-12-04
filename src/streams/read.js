import { createReadStream } from "node:fs";
import { stdout } from "node:process";

const read = async () => {
  const filePath = new URL("./files/fileToRead.txt", import.meta.url);
  createReadStream(filePath).pipe(stdout);
};

await read();
