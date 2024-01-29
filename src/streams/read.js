import fs from 'fs'
import path from 'path'
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url))

const read = async () => {
  const fileToReadPath = path.join(__dirname, 'files', 'fileToRead.txt');

  const readStream = fs.createReadStream(fileToReadPath)

  readStream.on('data', (chunk) => {
    process.stdout.write(chunk)
  })
};

await read();
