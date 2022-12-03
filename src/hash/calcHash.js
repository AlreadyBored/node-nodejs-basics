const { createHash } = await import('node:crypto');
import {isExistAsync} from "../helpers/isExistAsync.js";
import { readFile } from 'node:fs/promises';

const calculateHash = async () => {
    if (await isExistAsync('./files/fileToCalculateHashFor.txt')) {
        const filePath = new URL('./files/fileToCalculateHashFor.txt', import.meta.url);
        const content = await readFile(filePath, { encoding: 'utf8' });
        const hash = createHash('sha256');

        hash.on('readable', () => {
            const data = hash.read();
            if (data) {
                console.log(data.toString('hex'));
            }
        });

        hash.write(content);
        hash.end();
    } else {
        throw new Error('FS operation failed');
    }

};

await calculateHash();