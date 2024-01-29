import path from 'path';
import { pipeline } from 'node:stream/promises';
import { createWriteStream } from 'node:fs';

const write = async () => {
    const writeFilePath = path.resolve('src', 'streams', 'files', 'fileToWrite.txt');
    
    await pipeline(
        process.stdin,
        createWriteStream(writeFilePath, 'utf8'),
    );    
};

await write();