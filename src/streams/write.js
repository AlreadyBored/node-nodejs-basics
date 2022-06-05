import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { createWriteStream } from 'fs';

export const write = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const path = resolve(__dirname, 'files', 'fileToWrite.txt');
    const ws = createWriteStream(path, {flags: 'a'});

    process.stdin.pipe(ws);

    process.stdin.on('data', (chunk) => {
        if (chunk.toString().trim()) process.stdin.unpipe(ws);
    });
};

write();