import { createReadStream, createWriteStream } from 'fs'
import { createGzip } from 'zlib';
import { getDirname } from '../dirname.js'
import { join } from 'path'

const __dirname = getDirname(import.meta.url)

const compress = async () => {
    const filePath = join(__dirname, 'files', 'fileToCompress.txt')
    const reader = createReadStream(filePath)
    reader
    .pipe(createGzip())
    .pipe(createWriteStream('archive.gz'))
};

await compress();
