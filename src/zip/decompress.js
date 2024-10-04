import path from 'path';
import { fileURLToPath } from 'url';
import { createGunzip  } from 'zlib';
import fs from 'fs';
import { pipeline} from 'stream/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const decompress = async () => {
    try {
        const fileToDecompress = path.join(__dirname, 'files', 'archive.gz');
        const decompressedFile = path.join(__dirname, 'files', 'fileToCompress.txt');
        const gzip = createGunzip();
        const source = fs.createReadStream(fileToDecompress);
        const destination = fs.createWriteStream(decompressedFile);

        await pipeline(source, gzip, destination);
    } catch(error) {
        throw new Error(error);
    }
};

await decompress();