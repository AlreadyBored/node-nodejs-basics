import { createWriteStream } from 'fs'
import { join } from 'path'
import { getDirname } from '../dirname.js'

const __dirname = getDirname(import.meta.url)

const write = async () => {
    const filePath = join(__dirname, 'files', 'fileToWrite.txt')
    const writer = createWriteStream(filePath)  

    process.stdin.on('data', (data) => {
        writer.write(data);
    });
}
await write();