import fs from "node:fs";
import path from "node:path";
import { pipeline } from "node:stream/promises";
import { fileURLToPath } from "node:url";

const write = async () => {
  const scriptPath = fileURLToPath(import.meta.url);
  const dir = path.dirname(scriptPath);
  const destPath = path.join(dir, "files", "fileToWrite.txt");

  const writeStream = fs.createWriteStream(destPath);
  await pipeline(process.stdin, writeStream);

  // by default stdin is suspended
  process.stdin.resume();
};

await write();
