// implement function that compresses file fileToCompress.txt to archive.gz using zlib and Streams API
import { resolve } from 'node:path';
import { pipeline } from 'node:stream/promises';
import { createReadStream, createWriteStream , constants} from 'node:fs';
import { createGzip } from 'node:zlib';
import { getDirName } from '../../utils/getDirName.js';
import { checkIfFileExist } from '../../utils/checkIfFileExist.js';

const compress = async () => {
    const gzip = createGzip();
    const __dirname = getDirName(import.meta.url);
    const sourcePath = resolve(__dirname, 'files', 'fileToCompress.txt');

    const isExist = await checkIfFileExist(sourcePath, constants.R_OK);
    if (!isExist) {
        console.log(`File compressing failed:\n\tFile ${sourcePath} doesn't exist.`);
        return;
    }
    
    const destinationPath = resolve(__dirname, 'files', 'archive.gz');
    const readableStream = createReadStream(sourcePath);
    const writableStream = createWriteStream(destinationPath);
    
    await pipeline(
        readableStream,
        gzip,
        writableStream
    )
        .then(() => console.log(`File is compressed in ${destinationPath}`))
        .catch((er) => console.log(`File compressing failed: ${er}`));
};

await compress();