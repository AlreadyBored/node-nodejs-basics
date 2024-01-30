import { createReadStream } from 'fs';
import { createHash } from 'crypto';
import { pipeline } from 'stream';
import { promisify } from 'util';

const pipelineAsync = promisify(pipeline);

async function calculateHash() {
    const filePath = 'src/hash/files/fileToCalculateHashFor.txt';
    const hash = createHash('sha256');

    try {
        const readStream = createReadStream(filePath);

        await pipelineAsync(
            readStream,
            hash
        );

        const hashHex = hash.digest('hex');

        console.log(`SHA256 Hash for ${filePath}: ${hashHex}`);
    } catch (error) {
        console.error(`Error calculating hash: ${error.message}`);
        process.exit(1);
    }
}

await calculateHash();
