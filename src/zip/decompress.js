import { createReadStream, createWriteStream } from 'fs'
import { createUnzip } from 'zlib';
import { getDirname } from '../dirname.js'
import { join } from 'path'

const __dirname = getDirname(import.meta.url)

const decompress = async () => {
    const filePath = join('archive.gz')
    const reader = createReadStream(filePath)
    reader
    .pipe(createUnzip())
    .pipe(createWriteStream('fileToCompress.txt'))
};

await decompress();