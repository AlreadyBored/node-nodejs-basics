import { createWriteStream } from 'fs';
import { join } from 'path';


const write = async () => {
    // Write your code here 
    const filePath = join('files', 'fileToWrite.txt');

    const writableStream = createWriteStream(filePath);

    process.stdin.pipe(writableStream)
};

await write();