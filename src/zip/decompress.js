import { createReadStream, createWriteStream, read } from 'fs';
import { createGzip } from 'zlib';
import { join } from 'path';


const decompress = async () => {
    // Write your code here 
    const sourceFile = join("files", 'archive.gz');
    const destinationFile = join("files", 'fileToCompress.txt');

    const readStream = createReadStream(sourceFile);
    const gzipStream = createGzip();
    const writeStream = createWriteStream(destinationFile);

    readStream.pipe(gzipStream).pipe(writeStream);

};

await decompress();