import path from "path";
import { createWriteStream } from "fs";

import { getDirName } from "../utils.js";

const __dirname = getDirName(import.meta.url);

const filePath = path.join(__dirname, "files", "fileToWrite.txt");

const write = async () => {
  const stream = createWriteStream(filePath, { encoding: "utf-8" });
  process.stdin.pipe(stream);
};

await write();
