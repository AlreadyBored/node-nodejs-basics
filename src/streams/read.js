import { open } from "fs/promises";
import { pipeline } from "node:stream/promises";

export const read = async () => {
  const fd = await open("./streams/files/fileToRead.txt");
  let output = process.stdout;
  pipeline(fd.createReadStream({ encoding: "utf8" }), output);
};

read();
