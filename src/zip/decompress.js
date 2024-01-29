import fs from 'fs';
import zlib from 'zlib';

const decompress = async () => {
    if (fs.existsSync('src/zip/files/archive.gz')) {
        const readStream = fs.createReadStream('src/zip/files/archive.gz');
        const writeStream = fs.createWriteStream('src/zip/files/fileToCompressss.txt');
    
        readStream.pipe(zlib.createGunzip()).pipe(writeStream);

        console.log('delete');
    
        /* fs.rename('src/zip/files/archive.gz', 'src/zip/files/fileToCompress.txt', error => error && console.log(error)); */
    } else {
        console.log(new Error('Decompress operation failed'));
    }
    /* const readStream = fs.createReadStream('src/zip/files/fileToCompress.txt');
    const writeStream = fs.createWriteStream('src/zip/files/fileToCompress.txt');

    readStream.pipe(zlib.createGunzip()).pipe(writeStream); */
};

await decompress();