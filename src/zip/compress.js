import { createReadStream, createWriteStream } from 'fs';
import {createGzip} from 'zlib'


export const compress = async () => {
    const handleStream = createReadStream('./files/fileToCompress.txt')
    handleStream
        .pipe(createGzip())
        .pipe(createWriteStream('./files/archive.gz'))
        .on('finish', () => {
            console.log(`Compression process done: './files/archive.gz'`)
        })

};



