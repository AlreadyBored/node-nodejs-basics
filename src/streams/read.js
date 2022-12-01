import { createReadStream } from 'fs'
import { getCombinedPath } from '../pathHelper.js'

const read = async () => {
    const pathToFile = getCombinedPath(import.meta.url, 'files', 'fileToRead.txt')

    const readableStream = createReadStream(pathToFile)
    readableStream.pipe(process.stdout)
};

await read();