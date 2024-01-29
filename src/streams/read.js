import { createReadStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';

const filePath = new URL('files/fileToRead.txt', import.meta.url);
const read = async () => {
    await pipeline(createReadStream(filePath), process.stdout);
};

await read();