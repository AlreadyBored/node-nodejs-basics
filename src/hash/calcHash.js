import { createHash} from 'crypto';
import { join} from 'path';
import { cwd } from 'process';
import { createReadStream } from 'fs';

const path = join(cwd(), 'src', 'hash', 'files','fileToCalculateHashFor.txt');

const calculateHash = async () => {
    const hash = createHash('sha256');
    const stream = createReadStream(path);

    stream.on('data', (chunk) => {
        hash.update(chunk);
    });

    stream.on('end', (chunk) => {
        console.log(hash.digest('hex'));
        
    });

    stream.on('error', (err) => {
        console.error('Error read file:', err)
    })
};

await calculateHash();