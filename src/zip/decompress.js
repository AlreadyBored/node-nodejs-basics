import { createReadStream, createWriteStream } from 'fs';
import { createUnzip } from 'zlib'


export const decompress = async () => {
    const handleStream = createReadStream('./files/archive.gz')
    handleStream
        .pipe(createUnzip())
        .pipe(createWriteStream('./files/fileToCompress.txt'))
        .on('finish', () => {
            console.log(`Decompression process done: './files/fileToCompress.txt'`)
        })
};

decompress()
