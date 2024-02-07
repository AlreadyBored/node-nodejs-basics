import { createWriteStream } from 'node:fs';
import { getNecessaryPathInCurrentDir } from '../utils/helpers/path.helper.js';

const path = getNecessaryPathInCurrentDir(import.meta.url, '/files/fileToWrite.txt');

const write = async () => {
    const ws = createWriteStream(path);

    process.stdout.write('Type here (Type .end for stop):');
    process.stdout.write('\n');

    process.stdin.on('data', (chunk) => {
        const input = chunk.toString();

        if (input.trim() === '.end') {
            ws.end();
        } else {
            ws.write(input);
        }
    });

    ws.on('finish', () => {
        process.exit();
    });
};

await write();
