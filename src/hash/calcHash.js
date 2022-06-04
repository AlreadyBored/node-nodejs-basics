import crypto from 'crypto';

export const calculateHash = async () => {
    const path = './files/fileToCalculateHashFor.txt';

    const hash = crypto.createHash('sha256').update(path);
    
    console.log(`Calculated hash is ${hash.digest('hex')} for the file ${path}`);
};