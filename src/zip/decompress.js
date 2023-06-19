import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from 'node:fs';
import { createGunzip } from 'node:zlib';

const decompress = async () => {
    // Write your code here 
    try {
        const zipFile = './src/zip/files/archive.gz';
        const writeFile = './src/zip/files/fileToCompress.txt';

        const zipStream = createReadStream(zipFile);
        const writeStream = createWriteStream(writeFile);

        pipeline(zipStream, createGunzip(), writeStream, 
            (err) => {
                if (err) {
                    console.error('Zip failed.', err);
                }
            } 
        );
            
    } catch (error) {
        console.log(error.message);
    }

};

await decompress();