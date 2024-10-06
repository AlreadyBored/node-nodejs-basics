import path from 'path';
import { pipeline } from 'node:stream/promises';
import { createReadStream } from 'node:fs';

const read = async () => {
    const readFilePath = path.resolve('src', 'streams', 'files', 'fileToRead.txt');
    
    await pipeline(
        createReadStream(readFilePath, 'utf8'),
        async function* (source) {
            for await (const chunk of source) {
                yield process.stdout.write(chunk);
            }
        },
    );    

};

await read();