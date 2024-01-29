import {createHash} from 'node:crypto';
import {createReadStream} from 'node:fs';
const calculateHash = async () => {
    const hash = createHash('sha256');
    const file = "./src/hash/files/fileToCalculateHashFor.txt";
    const input = createReadStream(file);
    input.on('readable', () => {
    const data = input.read();
    if (data)
        hash.update(data);
    else {
        console.log(`${hash.digest('hex')}`);
    }
    });
};

await calculateHash();