import crypto from 'crypto';
import path from 'path';
import { createReadStream } from 'fs';

import { getDirPath } from '../utils/getDirPath.js';


const calculateHash = async () => {
    const fileStream = createReadStream(path.join(getDirPath(import.meta.url), 'files', 'fileToCalculateHashFor.txt'));
    const hash = crypto.createHash('sha256')

    fileStream
        .on("data", (data) => {
            hash.update(data);
        })
        .on("end", () => {
            console.log(hash.digest('hex'));
        })
        .on('error', (err) => {
            console.error(`Error while reading file: ${err.message}`);
        });
};

await calculateHash();
