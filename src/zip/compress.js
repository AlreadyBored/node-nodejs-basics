import { access, constants, createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import { pipeline } from 'stream';

const SRC_FILE_NAME = `./files/fileToCompress.txt`;
const DEST_FILE_NAME = `./files/archive.gz`;
const FS_OPERATION_ERROR = 'FS operation failed';

export const compress = async () => {
    access(SRC_FILE_NAME, constants.F_OK, (err) => {
        if (err !== null) {
            throw new Error(FS_OPERATION_ERROR);
        }

        const gzip = createGzip();
        const source = createReadStream(SRC_FILE_NAME);
        const destination = createWriteStream(DEST_FILE_NAME);

        pipeline(source, gzip, destination, (err) => {
            if (err) {
                console.error('An error occurred:', err);
                process.exitCode = 1;
            }

            console.log('Compression is finished successfully')
        });
    });
};

compress();
