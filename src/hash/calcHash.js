import { createHash } from 'crypto';
import fs from 'fs/promises';

const calculateHash = async () => {
    try {
        const fh = await fs.open('./files/fileToCalculateHashFor.txt');
        const fst = await fh.stat();
        const fdata = await fh.readFile();
        const hash = createHash('sha256');

        hash.on('readable', () => {
            const hashData = hash.read();
            if (hashData) {
                console.log(hashData.toString('hex'));
            }
        });
        
        hash.write(fdata);
        hash.end();
    } catch (error) {
        if (error.code === 'ENOENT') {
            throw new Error('File not found!')
        }
        throw error;
    }
};

await calculateHash();