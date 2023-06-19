import fs from 'fs';
import crypto from 'crypto';
import {FILE_TO_CALCULATE_HASH_FOR} from '../constants/fileNames.js';
import getPath from '../utils/getPath.js';

const calculateHash = async () => {
    const filePath = getPath(import.meta.url, '/files/', FILE_TO_CALCULATE_HASH_FOR);

    return fs.readFile(filePath, {encoding: 'utf-8'}, (err, fileData) => {
       if (!err) {
           const hashed = crypto
               .createHash('sha256')
               .update(fileData)
               .digest('hex');

           console.log(hashed);
       }
    });
};

await calculateHash();