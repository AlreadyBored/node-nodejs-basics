import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import path  from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const read = async () => {

    try {
        const pathToFile = path.join(__dirname, 'files', 'fileToRead.txt');
        const readStream = fs.createReadStream(pathToFile);
    
        readStream.on('data', chunk => {
            process.stdout.write(chunk.toString() + '\n');
        }); 
    
    } catch (error) {
        throw error;
    }

};

await read();