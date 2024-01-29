import { createWriteStream } from 'node:fs';
import { getNecessaryPathInCurrentDir } from '../utils/helpers/path.helper.js';

const path = getNecessaryPathInCurrentDir(import.meta.url, '/files/fileToWrite.txt');

const write = async () => {
    const ws = createWriteStream(path);

    process.stdin.on('data', (input) => {
        ws.write(input.toString());
    })
};

await write();
