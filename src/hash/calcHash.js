import crypto from 'crypto';
import fs from 'fs';

const calculateHash = async () => {
    // Write your code here
    const fileBuffer = fs.readFile('files/fileToCalculateHashFor.txt', (err, data) => {
        if (err) {
            return err;
        }
        // return data;
        const hash = crypto.createHash('sha256');
        const hex = hash.update(data).digest('hex');
        console.log(hex);
    });
};

await calculateHash();