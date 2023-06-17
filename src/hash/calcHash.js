const { createHash } = await import('node:crypto');
import { createReadStream } from 'node:fs';

const calculateHash = async () => {
    // Write your code here 
    try {
        const hash = createHash('sha256');

        const hashFile = './src/hash/files/fileToCalculateHashFor.txt';

        const readStream = createReadStream(hashFile);

        readStream.on('readable', () => {
            const data = readStream.read();
            if (data)
              hash.update(data);
            else {
              console.log(`${hash.digest('hex')}`);
            }
        });

    } catch (error) {
        console.log(error.message);
    }
};

await calculateHash();