import { createReadStream  } from 'fs';
import path from "path";
import { createHash } from 'crypto';
import { pipeline } from 'stream';
import { promisify } from 'util';

const pipelineAsync = promisify(pipeline);

const calculateHash = async () => {
    const filePath = path.join(process.cwd(), 'src/hash/files/fileToCalculateHashFor.txt');
    const stream = createReadStream(filePath);
    const hash = createHash('sha256');

    pipeline(stream, hash, (error) => {
        if (!error) {
            const hexHash = hash.digest('hex');
            console.log(hexHash);
        }
    });
};

await calculateHash();
