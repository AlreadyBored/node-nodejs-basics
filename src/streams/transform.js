import path from 'path';
import { pipeline } from 'node:stream/promises';
import { createWriteStream } from 'node:fs';

const transform = async () => {
    const writeFilePath = path.resolve('src', 'streams', 'files', 'fileToWrite.txt');
    
    await pipeline(
        process.stdin,
        async function* (source) {
            source.setEncoding('utf8');
            for await (const chunk of source) {
                yield chunk.split('').reverse().join('');
            }
        },
        createWriteStream(writeFilePath, 'utf8'),
    );
};

await transform();