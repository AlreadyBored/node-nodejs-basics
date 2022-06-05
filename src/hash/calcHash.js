import crypto from 'crypto';
import fs from 'fs/promises';

export const calculateHash = async () => {  
    const fileBuffer = await fs.readFile('src/hash/files/fileToCalculateHashFor.txt');
    const hashSum = crypto.createHash('sha256');
    hashSum.update(fileBuffer);
    
    const hex = hashSum.digest('hex');
    
    console.log(hex);
};

calculateHash();
