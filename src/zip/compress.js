import { createGzip  } from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream';

import { getPath } from '../../utils/get.path.js';
import { OperationFailedError } from '../../utils/operation.failed.error.js';

const compress = async () => {
    const inputFileName = getPath(import.meta.url, './files/fileToCompress.txt');
    const outputFileName = getPath(import.meta.url, './files/archive.gz');

    const gzip = createGzip();
    const source = createReadStream(inputFileName);
    const destination = createWriteStream(outputFileName);

    pipeline(source, gzip, destination, (err) => {
        if (err) {
            throw new OperationFailedError();
        }
    });
};

await compress();