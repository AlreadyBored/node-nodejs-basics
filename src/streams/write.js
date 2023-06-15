import { createWriteStream } from 'node:fs';
import { stdin } from 'node:process';
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const write = async () => {
    // Write your code here
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  stdin.pipe(createWriteStream(`${__dirname}/files/fileToWrite.txt`, 'utf-8'));
};

await write();