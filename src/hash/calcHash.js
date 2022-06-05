import path from 'path';
import {fileURLToPath} from "url";
import fs from 'fs';
import crypto from 'crypto';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const calculateHash = async () => {
    const file = path.join(__dirname, '/files/fileToCalculateHashFor.txt');
    if (!fs.existsSync(file)) {
      throw new Error('FS operation failed');
    }

    fs.readFile(file, 'utf8', (err, data) => {
      console.log(crypto.createHash('SHA256').update(data).digest('hex'));
    })
};

calculateHash()
