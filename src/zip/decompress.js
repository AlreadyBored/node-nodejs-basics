import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'zlib';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const decompress = async () => {
    const fileToDecompress = join(__dirname, 'files', 'archive.gz');
    const decompressedFile = join(__dirname, 'files', 'fileToCompress.txt');
    const readStream = createReadStream(fileToDecompress);
    const gunzip = createGunzip();
    const writeStream = createWriteStream(decompressedFile);
    
    readStream.pipe(gunzip).pipe(writeStream);
};

await decompress();