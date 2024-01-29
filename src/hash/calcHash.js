import { createHash } from 'crypto';
import { createReadStream } from 'fs';
import { getNecessaryPathInCurrentDir } from '../utils/helpers/path.helper.js';

const path = getNecessaryPathInCurrentDir(import.meta.url, '/files/fileToCalculateHashFor.txt');

const calculateHash = async () => {
    const hash = createHash('sha256');
    const stream = createReadStream(path);

    stream.on('data', data => hash.update(data));

    stream.on('end', () => {
        const calculatedHash = hash.digest('hex');

        console.log(calculatedHash);
    });
};

await calculateHash();
