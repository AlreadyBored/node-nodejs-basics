
import fs from 'fs';
import path, { dirname } from 'path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
    const fileForStream = path.join(__dirname, 'files', 'fileToRead.txt')

    const readStream = fs.createReadStream(fileForStream);

     readStream.on('data', (chunk) => {process.stdout.write(chunk)})


    // Write your code here 
};

await read();