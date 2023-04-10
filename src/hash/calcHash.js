import fs from 'fs/promises';
import { createHmac } from 'crypto';

const calculateHash = async () => {
    try {
        // Get data from 'fileToCalculateHashFor.txt'
        const data = await fs.readFile('./files/fileToCalculateHashFor.txt');

        // Set secret key
        const secret = '123';

        // Generate hashed data
        const hash = createHmac('sha256', secret).update(data).digest('hex');

        // Print hashed data
        console.log(hash);
    } catch (err) {
        throw err;
    }
};

await calculateHash();
