import { promises as fs } from 'fs'
import crypto from 'crypto';

export const calculateHash = async() => {
    const buf = await fs.readFile('./files/fileToCalculateHashFor.txt');
    const hash = crypto.createHash('sha256');
    hash.update(buf);
    const hex = hash.digest('hex');
    console.log(hex);
};
calculateHash();