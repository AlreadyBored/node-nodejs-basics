import { createHash } from 'node:crypto';
import { readdirSync, readFileSync, } from 'node:fs';

const calculateHash = async () => {
    const dir = readdirSync('./src/hash/files');
    for (let i = 0; i < dir.length; i++) {
        const file = readFileSync(`./src/hash/files/${dir[i]}`, 'utf-8');
        const hash = createHash('sha256');
        hash.update(file);
        console.log(hash.digest('hex'));
    }
};

await calculateHash();