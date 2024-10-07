import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import path  from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);



const write = async () => {

    try {
        const pathToFile = path.join(__dirname, 'files', 'fileToWrite.txt');
        const writeStream = fs.createWriteStream(pathToFile);
        
        process.stdin.on('data', chunk => {
            writeStream.write(chunk.toString());
        }); 
    
    } catch (error) {
        throw error;
    }
};

await write();