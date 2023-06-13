import fs from "node:fs";
import path from "node:path";
import { pipeline } from "node:stream/promises";
import { fileURLToPath } from "node:url";

const read = async () => {
  const scriptPath = fileURLToPath(import.meta.url);
  const dir = path.dirname(scriptPath);
  const srcPath = path.join(dir, "files", "fileToRead.txt");
  const readStream = fs.createReadStream(srcPath);
  await pipeline(readStream, process.stdout);
};

await read();
