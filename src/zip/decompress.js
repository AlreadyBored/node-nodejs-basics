import { pipeline } from 'stream/promises';
import { createWriteStream } from 'fs';
import { createUnzip } from 'zlib';
import { open } from 'fs/promises';

const decompress = async () => {
    const unzip = createUnzip();
    const f = await open('src/zip/files/archive.gz');
    const readStream = f.createReadStream();

    const destination = createWriteStream('src/zip/files/fileToCompress.txt');

    await pipeline(readStream, unzip, destination);
};

await decompress();
