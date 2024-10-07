import { createReadStream } from 'fs';
import { createHash } from 'crypto';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const calculateHash = async () => {
    const pathToFile = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');
    const readSteamFile = createReadStream(pathToFile);

    readSteamFile.on('data', (chunk) => {
        createHash('sha256').update(chunk);
    });

    readSteamFile.on('end', () => {
        console.log(createHash('sha256').digest('hex'));
    });
};

await calculateHash();
