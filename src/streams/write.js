import * as fs from 'fs'
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fileToWrite = path.join(__dirname, 'files', 'fileToWrite.txt');

const write = async () => {
    // Write your code here 
    const writeStream = fs.createWriteStream(fileToWrite, { flags: 'a' });
    process.stdin.on('data', data => writeStream.write(data));
};

await write();