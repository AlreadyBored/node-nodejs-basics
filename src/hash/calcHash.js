import { fileURLToPath  } from 'node:url';
import { createHash } from 'node:crypto';
import { dirname, join } from 'node:path';
import { createReadStream } from 'node:fs';

const __filename = fileURLToPath(import.meta.url);

const calculateHash = async () => {
    const hash = createHash('sha256');
    const PATH = join(dirname(__filename), 'files/fileToCalculateHashFor.txt');
    const stream = createReadStream(PATH);
    stream.pipe(hash);

    hash.on('finish', () => {
        console.log(hash.digest('hex'));
    });
};

await calculateHash();