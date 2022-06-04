import fs from 'fs';
import crypto from 'crypto';
import path from 'path';
import { errorMessage, hashFilePath } from '../common/constants.js';

export const calculateHash = async () => {
    fs.readFile(
        path.join(hashFilePath, 'fileToCalculateHashFor.txt'),
        (err, data) => {
        if(err) throw new Error(errorMessage);
        const fileHex = crypto.createHash('sha256').update(data).digest('hex');
        console.log(fileHex);
    })
};

calculateHash()