import fs from 'fs'
import path from 'path'
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url))

const write = async () => {
  const fileToWritePath = path.join(__dirname, 'files', 'fileToWrite.txt');
  
  const writeStream = fs.createWriteStream(fileToWritePath)

  process.stdin.on('data', (chunk) => {
    writeStream.write(chunk)
  })

  process.stdin.on('end', () => {
    writeStream.close();
  })
};

await write();
