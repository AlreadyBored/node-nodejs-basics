import { getDirname } from '../dirname.js'
import { readFile } from 'fs/promises' 

const __dirname = getDirname(import.meta.url)

const read = async () => {
    try {
        const filePath = `${__dirname}/files/fileToRead.txt`
        const content = await readFile(filePath, 'utf-8')
        console.log(content)
    } catch (err) {
        throw new Error('FS operation failed')
    }
};

await read();
