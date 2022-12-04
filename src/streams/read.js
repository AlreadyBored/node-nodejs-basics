import fs from "fs";
import path from "path";

import { getPath } from "../helpers/getPath.js";

const read = async () => {
  const { __dirname } = getPath(import.meta.url);
  const fullPath = path.join(__dirname, "/files", "fileToRead.txt");

  const stream = fs.createReadStream(fullPath);

  stream.pipe(process.stdout);
};

await read();
