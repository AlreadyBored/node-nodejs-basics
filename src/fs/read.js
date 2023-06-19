import * as fs from 'fs/promises';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const read = async () => {
    const workPath = `${dirname(fileURLToPath(import.meta.url))}/files`;
    try {
        let text = await fs.readFile(`${workPath}/fileToRead.txt`, {encoding: 'utf8'})
        text.split('\r\n').forEach(word => console.log(word))
    } catch {
        console.log(new Error('FS operation failed'))
    }
};

await read();