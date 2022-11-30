import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import { stdin } from 'node:process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const write = async () => {
    // Write your code here 
    const writeStream = fs.createWriteStream(`${__dirname}/files/fileToWrite.txt`);

    stdin.on('data', (data) => {
        writeStream.write(data.toString().slice(0,-1));
        process.exit();
    })
    stdin.on('error', (err) => {
        throw (err);
    })
};

await write();