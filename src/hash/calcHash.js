import { createHash } from 'crypto';
import { createReadStream } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const calculateHash = async () => {
    const filePath = join(__dirname, 'files', 'fileToCalculateHashFor.txt');
    const hash = createHash('sha256');
    
    try {
        const stream = createReadStream(filePath);
        
        await new Promise((resolve, reject) => {
            stream.on('data', chunk => hash.update(chunk));
            stream.on('end', () => {
                console.log(hash.digest('hex'));
                resolve();
            });
            stream.on('error', reject);
        });
    } catch (error) {
        console.error('Error calculating hash:', error.message);
    }
};

await calculateHash();
