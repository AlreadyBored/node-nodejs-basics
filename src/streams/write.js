import fs from 'node:fs';
import path from 'path'
import {fileURLToPath} from 'url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const write = async () => {
    const filenamePath = path.join(dirname, 'files', 'fileToWrite.txt');

    const writeStream = fs.createWriteStream(filenamePath);

    process.stdin.on('data', data => {
        writeStream.write(`${data.toString()}`);

        writeStream.on('finish', () => {
            console.log('wrote all typed text to file');
        });

        writeStream.end();
        process.exit();
    });
};

await write();