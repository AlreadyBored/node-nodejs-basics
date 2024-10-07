import fs from 'fs';
import path from 'node:path';
import { getDirName } from '../fs/getDir.js';

const write = async () => {
    const filePath = path.join(getDirName(import.meta.url), './files/fileToWrite.txt');

    if (!fs.existsSync(filePath)) {
        throw Error('FS operation failed');
    }

    const ws =  fs.createWriteStream(filePath);

    process.stdin.on('data', (data) => {
        ws.write(data);
    })
};

await write();