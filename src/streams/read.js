import fs from 'node:fs'
import { pipeline } from 'stream/promises'

const read = async () => {
    const reader = fs.createReadStream('src/streams/files/fileToRead.txt')

    await pipeline(reader, process.stdout)
};

await read();
