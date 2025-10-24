import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'zlib';
import { pipeline } from 'stream/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const decompress = async () => {
    const _filename = fileURLToPath(import.meta.url);
    const _dirname = dirname(_filename);

    const archFileName = 'archive.gz'
    const archFile = join(_dirname, 'files', archFileName);
    const outFileName = 'fileToCompress.txt';
    const outFile = join(_dirname, 'files', outFileName);

    try {
        await pipeline(
            createReadStream(archFile),
            createGunzip(),
            createWriteStream(outFile)
        );
        console.log(`Decompressed to ${outFile}`);
    } catch (error) {
        console.error('Error:', error.message);
        throw error;
    }
};

await decompress();
