import fs, { createReadStream, createWriteStream } from 'fs';
import { constants } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createGzip } from 'zlib';
import { pipeline } from 'stream';

const compress = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const fileToCompress = path.join(__dirname, 'files', 'fileToCompress.txt');
    const archive = path.join(__dirname, 'files', 'archive.gz');


    try {
        await fs.promises.access(fileToCompress, constants.F_OK);

        const gzip = createGzip();
        const source = createReadStream(fileToCompress);
        const destination = createWriteStream(archive);

        pipeline(source, gzip, destination, (err) => {
            if (err) {
                console.error(err);
                process.exitCode = 1;
            }
        });
    } catch (error) {
        console.error('FS operation failed');
    }
};

await compress();