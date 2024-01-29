import { promises as fsPromises, createReadStream } from 'node:fs';
import { fileURLToPath } from 'node:url';
import * as path from 'node:path';
import { createHash } from 'node:crypto';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const calculateHash = async () => {
    const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt')

    const fileStream = createReadStream(filePath)

    // Create a hash object using the SHA256 algorithm
    const hash = createHash('sha256')

    fileStream.on('data', (item) => {
        hash.update(item);
    })

    // Wait for the stream to finish
    await new Promise((resolve, reject) => {
        fileStream.on('end', resolve)
        fileStream.on('error', reject)
    });

    const hexHash = hash.digest('hex')

    console.log(`SHA256: ${hexHash}`);
};

await calculateHash();