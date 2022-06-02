import {open} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
import process from 'node:process';

export const write = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const subDir = 'files'
    const fileName = 'fileToWrite.txt';
    const absolutePath = path.join(__dirname, subDir, fileName);

    const fd = await open(absolutePath, 'r+').catch(err => err);

    if (fd instanceof Error) {
        throw new Error('FS operation failed');
    }

    const writeStream = fd.createWriteStream({encoding: 'utf8'});

    process.stdin
        .on('end', () => {
            inStream.close();
            writeStream.close();
        })
        .pipe(writeStream);
};

write();