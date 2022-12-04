import fs from "fs";
import path from "path";

import { getPath } from "../helpers/getPath.js";

const write = async () => {
  const { __dirname } = getPath(import.meta.url);
  const fullPath = path.join(__dirname, "/files", "fileToWrite.txt");

  const stream = fs.createWriteStream(fullPath);

  process.stdout.write(`Input something then close (cntrl + c).\n`);

  process.stdin.on("data", (data) => stream.write(data));
};

await write();
