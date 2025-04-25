import { stdin } from "process";
import { pipeline } from "stream/promises";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const write = async () => {
  // Write your code here
  const __dirname = path.dirname(fileURLToPath(import.meta.url));

  await pipeline(
    stdin,
    fs.createWriteStream(path.resolve(__dirname, "./files/fileToWrite.txt"))
  );
};

await write();
