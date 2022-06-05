import { createReadStream } from 'fs';
const { createHash } = await import('crypto');
import path from "path";

export const calculateHash = async () => {
    const __dirname = path.resolve();
    const filename = path.join(__dirname, "files/fileToCalculateHashFor.txt");

    const hash = createHash('sha256');
    const input = createReadStream(filename);

    input.on('readable', () => {
        const data = input.read();
        if (data)
            hash.update(data);
        else {
            console.log(`${hash.digest('hex')}`);
        }
    });
};

calculateHash();