import { createReadStream } from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { pipeline } from 'stream/promises';


const filePath = './files/fileToRead.txt';

const read = async (fp) => {
    
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const absolutePath = path.join(__dirname, fp);

    const readStream = createReadStream(absolutePath);
    await pipeline(readStream, process.stdout);
    
};

await read(filePath);