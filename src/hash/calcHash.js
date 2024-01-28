import { getFilePath } from '../utils/fs.js';
import { open } from 'node:fs/promises';
import { createHash } from 'node:crypto';

const filePath = getFilePath(import.meta.url, 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
    try {
        let fileData = '';
        const hash = createHash('sha256');
        const fileHandle = await open(filePath, 'r');
        const fileStream = fileHandle.createReadStream();

        fileStream.on('data', (chunk) => {
            fileData += chunk;
        })

        fileStream.on('end', () => {
            if (fileData) {
                console.log(hash.update(fileData).digest('hex'));
            };
            fileHandle.close();
        })
    } catch (error) {
        throw error;
    }
};

await calculateHash();