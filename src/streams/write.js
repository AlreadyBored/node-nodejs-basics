import * as fs from 'fs'
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const NameofFileToWite = path.join(__dirname, 'files', 'fileToWrite.txt');

console.log(NameofFileToWite)


const write = async () => {
  const StreamToWrite = fs.createWriteStream(NameofFileToWite);
  process.stdin.on('data', data => {
    StreamToWrite.write(data)
    process.exit();
  });
};

await write();