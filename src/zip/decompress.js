import { createReadStream, createWriteStream } from 'node:fs';
import { createGunzip } from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
const decompress = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const sourceFile = join(__dirname, 'archive.gz');
    const destinationFile = join(__dirname, "files", 'fileToCompress.txt');

    try {
        const readStream = createReadStream(sourceFile);
        const writeStream = createWriteStream(destinationFile);
        const gunzipStream = createGunzip();

        await pipeline(
            readStream,
            gunzipStream,
            writeStream
        );

        console.log('File decompressed successfully');
    } catch (error) {
        console.error('Decompression failed:', error);
    }
};

await decompress();