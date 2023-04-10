import { createUnzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';

const decompress = async () => {
    // Create unzip decompression
    const unzip = createUnzip();

    // Create readable stream for source and writeable stream for destination
    const source = createReadStream('./files/archive.gz');
    const destination = createWriteStream('./files/fileToCompress.txt');

    // Decompress data from source stream to destination stream
    source.pipe(unzip).pipe(destination);
};

await decompress();
