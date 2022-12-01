import { createWriteStream } from 'fs'
import { getCombinedPath } from '../pathHelper.js'

const write = async () => {
    const pathToFile = getCombinedPath(import.meta.url, 'files', 'fileToWrite.txt')

    const writableStream = createWriteStream(pathToFile)
    process.stdin.pipe(writableStream)
};

await write();