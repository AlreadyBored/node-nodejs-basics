import fs from 'node:fs'
import { pipeline } from 'stream/promises'

const write = async () => {
    const writer = fs.createWriteStream('src/streams/files/fileToWrite.txt')

    await pipeline(process.stdin, writer)
};

await write();

