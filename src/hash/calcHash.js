import fs from 'fs';
import path from 'path'
import {fileURLToPath} from 'url';
import crypto from 'crypto';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const hashSum = crypto.createHash('sha256');

const calculateHash = async () => {
    const filenamePath = path.join(dirname, 'files', 'fileToCalculateHashFor.txt');

    fs.readFile(filenamePath, 'utf8', function (err, data) {
        if (err) {
            console.error(err);
        } else {
            hashSum.update(data)
            const hex = hashSum.digest('hex');

            console.log(hex);
        }
    });
};

await calculateHash();