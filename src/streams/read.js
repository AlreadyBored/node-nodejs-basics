import { createReadStream } from 'fs'
import { join } from 'path'
import { getDirname } from '../dirname.js'

const __dirname = getDirname(import.meta.url)

const read = async () => {
    const filePath = join(__dirname, 'files', 'fileToRead.txt')
    const reader = createReadStream(filePath, {encoding: 'utf8'}); 

    reader.on('data', function (chunk) { 
        process.stdout.write(chunk);
    }); 
};

await read();

