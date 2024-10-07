import {fileURLToPath} from "node:url";
import path from "node:path";
import {createWriteStream} from "node:fs";
import {pipeline} from "node:stream/promises";
import {stdin} from "node:process";

const write = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const destPath = path.resolve(__dirname, 'files', 'fileToWrite.txt');
  const writeStream = createWriteStream(destPath);
  await pipeline(stdin, writeStream);
};

await write();
