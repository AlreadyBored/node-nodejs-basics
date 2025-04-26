import { createReadStream } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const read = async () => {
    const filePath = join(__dirname, 'files', 'fileToRead.txt');
    const readStream = createReadStream(filePath);
    
    readStream.pipe(process.stdout);
    
    readStream.on('error', (error) => {
        console.error('Error reading file:', error.message);
    });
};

await read();