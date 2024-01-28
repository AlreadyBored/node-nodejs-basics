import crypto from 'crypto';
import fs from 'fs';

const calculateHash = async () => {
    const filePath = 'src/hash/files/fileToCalculateHashFor.txt';
    const hash = crypto.createHash('sha256');

    try {
        const input = fs.createReadStream(filePath);

        input.on('readable', () => {
            const data = input.read();

            if (data)
                hash.update(data);
            else {
                console.log(hash.digest('hex'));
            }
        });

        input.on('error', (err) => {
            console.error(`Error reading ${filePath}`);
            throw err;
        });
    } catch (err) {
        console.error(`Error in calculateHash function`);
        throw err;
    }
};

await calculateHash();