import fs from 'node:fs';
import url from 'node:url';
import path from 'node:path';
import pr from 'node:process';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fileToWritePath = path.join(__dirname, 'files', 'fileToWrite.txt');

const write = async () => {
    const writeStream = fs.createWriteStream(fileToWritePath);

    pr.stdin.on('readable', () => {
        let chunk;

        while ((chunk = pr.stdin.read()) !== null) {
            writeStream.write(chunk);
        }
    });
};

await write();