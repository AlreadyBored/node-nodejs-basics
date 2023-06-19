import * as fs from "fs";
import { getPath } from '../utils/getPath.js';

const { stdin} = process;

const write = async () => {
  const src = getPath(import.meta.url, "fileToWrite.txt");
  const output = fs.createWriteStream(src);

  console.log("\nwrite smth here:");

  stdin.on("data", (data) => {
    output.write(data);
  });
};

await write();