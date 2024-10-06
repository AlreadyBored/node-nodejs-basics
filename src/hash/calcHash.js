import { createReadStream } from 'fs'; 
import { createHash } from 'crypto';  
import path from 'path'; 

// there was error about __dirname, get this solution from gpt
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateHash = async () => {
    // Write your code here 
    const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');

    // create a readable stream from the file
    const fileStream = createReadStream(filePath);

    // create a hash object with SHA256
    const hash = createHash('sha256');

    // pipe the file stream into the hash object
    fileStream.pipe(hash);

    // set encoding to hex for the output
    hash.setEncoding('hex');

    // listen to the stream events
    hash.on('finish', () => {
        console.log(hash.read());
    });

    fileStream.on('error', (error) => {
        console.error('Error reading the file:', error.message);
        throw new Error('FS operation failed');
    });
};

await calculateHash();