import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream';
import { createUnzip  } from 'node:zlib';

import { getPath } from '../../utils/get.path.js';
import { OperationFailedError } from '../../utils/operation.failed.error.js';

const decompress = async () => {
    const inputFileName = getPath(import.meta.url, './files/archive.gz');
    const outputFileName = getPath(import.meta.url, './files/fileToCompress.txt');

    const gzip = createUnzip();
    const source = createReadStream(inputFileName);
    const destination = createWriteStream(outputFileName);

    pipeline(source, gzip, destination, (err) => {
        if (err) {
            throw new OperationFailedError();
        }
    });
};

await decompress();