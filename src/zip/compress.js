import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from 'node:fs';
import { createGzip } from 'node:zlib';

const compress = async () => {
    // Write your code here 
    try {
        const readFile = './src/zip/files/fileToCompress.txt';
        const zipFile = './src/zip/files/archive.gz';

        const readStream = createReadStream(readFile);
        const zipStream = createWriteStream(zipFile);

        pipeline(readStream, createGzip(), zipStream, 
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

await compress();