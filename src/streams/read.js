import fs from 'node:fs';
import path from 'path'
import {fileURLToPath} from 'url';
import { Readable } from 'node:stream';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const read = async () => {
    const filenamePath = path.join(dirname, 'files', 'fileToRead.txt');
    const readable = fs.createReadStream(filenamePath);

    readable.on('readable', () => {
        let chunk;

        while (null !== (chunk = readable.read())) {
            process.stdout.write(`read: ${chunk}\n`);
        }
    });
};

await read();