import fs, { createReadStream, createWriteStream } from 'fs';
import { constants } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createGunzip } from 'zlib';
import { pipeline } from 'stream';

const decompress = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const archive = path.join(__dirname, 'files', 'archive.gz');
    const fileToCompress = path.join(__dirname, 'files', 'fileToCompress.txt');

    try {
        await fs.promises.access(archive, constants.F_OK);

        const gunzip = createGunzip();
        const source = createReadStream(archive);
        const destination = createWriteStream(fileToCompress);

        pipeline(source, gunzip, destination, async (err) => {
            if (err) {
                console.error(err);
                process.exitCode = 1;
            } else {
                console.log('Decompress completed to fileToCompress.txt');

                try {
                    await fs.promises.unlink(archive);
                    console.log('archive.gz remove completed');
                } catch (deleteError) {
                    console.error(deleteError);
                }
            }
        });
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await decompress();