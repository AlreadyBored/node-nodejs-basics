import path from 'path';
import { fileURLToPath } from 'url';
import { createGzip  } from 'zlib';
import fs from 'fs';
import { pipeline} from 'stream/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compress = async () => {
    try {
        const fileToCompress = path.join(__dirname, 'files', 'fileToCompress.txt');
        const compressedFile = path.join(__dirname, 'files', 'archive.gz');
        const gzip = createGzip();
        const source = fs.createReadStream(fileToCompress);
        const destination = fs.createWriteStream(compressedFile);

        await pipeline(source, gzip, destination);
    } catch(error) {
        throw new Error(error);
    }
};

await compress();