import { createReadStream, createWriteStream, read } from 'fs';
import { createGzip } from 'zlib';
import { join } from 'path';


const compress = async () => {
    // Write your code here 
    const sourceFile = join("files", 'fileToCompress.txt');
    const destinationFile = join("files", 'archive.gz');

    const readStream = createReadStream(sourceFile);
    const gzipStream = createGzip();
    const writeStream = createWriteStream(destinationFile);

    readStream.pipe(gzipStream).pipe(writeStream);

};

await compress();