import {createWriteStream} from 'fs';
import {fileURLToPath} from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'files', 'fileToWrite.txt');

const write = async () => {
    const writeStream = createWriteStream(filePath);

    process.stdin.on('data', (data) => {
        const text = data.toString('utf-8');
   
        writeStream.write(text);
    });

    process.stdin.on('close', () => {
        writeStream.end();
    });

    writeStream.on('error', (err) => {
        console.error(err);
    });
};

await write();