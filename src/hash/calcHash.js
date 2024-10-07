import fs from 'fs';
import { createHash } from 'crypto';

// Set the file path
const filePath = new URL('files/fileToCalculateHashFor.txt', import.meta.url);

const calculateHash = async () => {
    // Write your code here 
    
    // Calculate the hash
    const hash = createHash('sha256');

    // Read the file
    const fileStream = fs.createReadStream(filePath);

    fileStream.on('data', (data) => {
        hash.update(data);
    });


    fileStream.on('end', () => {
        const key = hash.digest('hex');
        console.log(key);
    });
    
}; 

await calculateHash();