import { createHash } from 'crypto';
import { readFile } from 'fs';

export const calculateHash = async () => {
    const filePath = './files/fileToCalculateHashFor.txt';
    const hash = createHash('sha256');

    await readFile(filePath, (err, file) => {
        if (err) throw err;

        const hexed = hash.update(file).digest('hex')
        console.log(`the hex of sha256 of fileToCalculateHashFor.txt is ${hexed}`)
        return hexed;
    });
};

calculateHash()