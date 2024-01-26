import { createReadStream } from 'fs';
import { createHash } from 'crypto';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const calculateHash = async () => {
    const filePath = join(__dirname, 'files', 'fileToCalculateHashFor.txt');
    const readStream = createReadStream(filePath);
    const hash = createHash('sha256');
    
    readStream.on('data', (chunk) => {
        hash.update(chunk, 'utf8');
    });

    readStream.on('end', () => {
        console.log(hash.digest('hex'));
    }); 
};

await calculateHash();