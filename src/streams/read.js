import { createReadStream } from 'fs';
import { join } from 'path';

const read = async () => {
    // Write your code here 
    const filePath = join('files', 'fileToRead.txt');

    const readableStream = createReadStream(filePath);

    readableStream.pipe(process.stdout);
    
};

await read();