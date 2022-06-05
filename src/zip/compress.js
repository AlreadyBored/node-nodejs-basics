import * as fs from 'fs';
import * as zlib from 'zlib';


export const compress = async () => {
    // Write your code here 
    const path = "src/zip/files/fileToCompress.txt"
    const handleStream = fs.createReadStream(path)
    handleStream
        .pipe(zlib.createGzip())
        // .pipe(fs.createWriteStream(`${path}.gz`))
        .pipe(fs.createWriteStream(`src/zip/files/archive.gz`))
        .on('finish', () => {
            // console.log(`Compression process done: ${path}`)
        })
};

compress()