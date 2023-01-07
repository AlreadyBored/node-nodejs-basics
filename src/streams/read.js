import * as fs from 'fs'
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fileToRead = path.join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
    // Write your code here 
    let data = '';
    const readStream = fs.createReadStream(fileToRead, 'utf-8');
    readStream.on('data', chunk => data += chunk);
    readStream.on('end', () => process.stdout.write(data));
};

await read();