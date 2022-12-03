import fs from 'fs'
import { createUnzip } from 'zlib'
import { pipeline } from 'stream'

const decompress = async () => {
    const dest = 'src/zip/files/fileToCompress.txt';
    const src = 'src/zip/files/archive.gz ';

    const unzip = createUnzip();
    const source = fs.createReadStream(src);
    const destination = fs.createWriteStream(dest);

    pipeline(source, unzip, destination, (err) => {
        if (err) {
            console.error('An error occurred:', err);
            process.exitCode = 1;
        }
    });

};

await decompress();