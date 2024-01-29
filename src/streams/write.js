import { createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';

const filePath = new URL('files/fileToWrite.txt', import.meta.url);
const write = async () => {
    await pipeline(process.stdin, createWriteStream(filePath, {flags: 'a'}));
};

await write();