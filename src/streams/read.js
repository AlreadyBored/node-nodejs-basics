import {open} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
import process from 'node:process';

export const read = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const subDir = 'files'
    const fileName = 'fileToRead.txt';
    const absolutePath = path.join(__dirname, subDir, fileName);

    const fd = await open(absolutePath).catch(err => err);

    if (fd instanceof Error) {
        throw new Error('FS operation failed');
    }

    const stream = fd.createReadStream({encoding: 'utf8', autoClose: false});

    stream
        .on('end', () => {stream.close()})
        .pipe(process.stdout);
};

read();