import { createReadStream } from 'node:fs';
import { createHash } from 'node:crypto';
import { pipeline } from 'node:stream/promises';

const PATH = './src/hash/files/fileToCalculateHashFor.txt';

const calculateHash = async () => {
    try {
        const hash = createHash('sha256');
        await pipeline(createReadStream(PATH),
            async (source) => {
                source.setEncoding('utf8');
                for await (let chunk of source) {
                    hash.update(chunk);
                }
            });
        console.log(hash.digest('hex'));
    } catch (err) {
        console.log(err);
    }
};

await calculateHash();