import path from "path";
import { createReadStream } from "fs";
import { stdout } from "process";

import { getDirName } from "../utils.js";

const __dirname = getDirName(import.meta.url);
const filePath = path.join(__dirname, "files", "fileToRead.txt");

const read = async () => {
  const stream = createReadStream(filePath, { encoding: "utf-8" });
  stream.pipe(stdout);
};

await read();
