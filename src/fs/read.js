import {readFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';

const read = async () => {
    const _dirname = path.dirname(fileURLToPath(import.meta.url));
    try {
        const content  = await readFile(_dirname + '/files/fileToRead.txt', { encoding: 'utf8' });
        console.log(content);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await read();
