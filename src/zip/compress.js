import fs from 'fs';
import zlib from 'zlib';

const compress = async () => {
    if (fs.existsSync('src/zip/files/fileToCompress.txt')) {
        const readStream = fs.createReadStream('src/zip/files/fileToCompress.txt');
        const writeStream = fs.createWriteStream('src/zip/files/archive.gz');
    
        readStream.pipe(zlib.createGzip()).pipe(writeStream);

        console.log('delete');
    
        /* fs.rename('src/zip/files/fileToCompress.txt', 'src/zip/files/archive.gz', error => error && console.log(error)); */
    } else {
        console.log(new Error('Compress operation failed'));
    }
};

await compress();