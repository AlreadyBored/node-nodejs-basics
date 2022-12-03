import { createHmac } from 'node:crypto';
import { createReadStream } from 'node:fs';

const calculateHash = async (filename) => {
    const hmac = createHmac('sha256', 'a secret');

    const readStream = createReadStream(filename);
    readStream.on('readable', () => {
        const data = readStream.read();
        if (data)
            hmac.update(data);
        else {
            console.log(`${hmac.digest('hex')} ${filename}`);
        }
    });
};

await calculateHash('./files/fileToCalculateHashFor.txt');
