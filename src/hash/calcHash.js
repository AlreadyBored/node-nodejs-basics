import fs from 'fs/promises';
import { createHmac } from 'crypto';

const calculateHash = async () => {
    try {
        // get data from fileToCalculateHashFor.txt
        const data = await fs.readFile('./files/fileToCalculateHashFor.txt');

        // set secret key
        const secret = '123';

        // generate hashed data
        const hash = createHmac('sha256', secret).update(data).digest('hex');

        // print hashed data
        console.log(hash);
    } catch (err) {
        throw err;
    }
};

await calculateHash();
