//  implement function that decompresses archive.gz back to the fileToCompress.txt with same content as before compression using zlib and Streams API
import { resolve } from 'node:path';
import { pipeline } from 'node:stream/promises';
import { createReadStream, createWriteStream, constants } from 'node:fs';
import { createGunzip } from 'node:zlib';
import { getDirName } from '../../utils/getDirName.js';
import { checkIfFileExist } from '../../utils/checkIfFileExist.js';

const decompress = async () => {
    const gunzip = createGunzip();
    const __dirname = getDirName(import.meta.url);
    const sourcePath = resolve(__dirname, 'files', 'archive.gz');

    const isExist = await checkIfFileExist(sourcePath, constants.R_OK);
    if (!isExist) {
        console.log(`File parsing failed:\n\tFile ${sourcePath} doesn't exist.`);
        return;
    }

    const destinationPath = resolve(__dirname, 'files', 'fileToCompress.txt');
    const readable = createReadStream(sourcePath);
    const writable = createWriteStream(destinationPath);

    await pipeline (
        readable,
        gunzip,
        writable
    )
        .then(() => console.log(`File has been parsed in ${destinationPath}`))
        .catch((er) => console.log(`File parsing failed: ${er}`));
};

await decompress();