import { createUnzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';

const decompress = async () => {
    const unzip = createUnzip();
    const source = createReadStream('./files/archive.gz');
    const destination = createWriteStream('./files/fileToCompress.txt');
    source.pipe(unzip).pipe(destination);
};

await decompress();
