import { createHash } from 'crypto';
import {createReadStream} from 'fs';
import path from 'node:path';
import { ERROR_MSG, FILES_PATH } from '../constants.js';

const FILE_NAME = 'fileToCalculateHashFor.txt';
const FILE_URL = path.join(import.meta.dirname, FILES_PATH, FILE_NAME);


const calculateHash = async () => {

try {
    const algorithm = 'sha256'
    const hash = await createHash(algorithm);
    const file = await createReadStream(FILE_URL); 
    file.on('readable', () => {
        const data = file.read();
        if (data)
          hash.update(data);
        else {
          console.log(`${hash.digest('hex')} ${FILE_URL}`);
        }})
} catch (err) {
        console.log(err);
        throw new Error(ERROR_MSG);
    }
}

await calculateHash();