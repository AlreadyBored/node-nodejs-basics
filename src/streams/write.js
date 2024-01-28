import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const write = async () => {
    const writeStream = fs.createWriteStream(path.join(__dirname, 'files','fileToWrite.txt'));
    process.stdin.on('data', (data)=>{
        writeStream.write(data);
    })
    process.stdin.on('error', (error) => {
        console.error(`Error reading the file: ${error.message}`);
    });

    process.stdin.on('end', () => {
        writeStream.end();
    });
};

await write();