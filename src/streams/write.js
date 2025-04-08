// implement function that writes process.stdin data into file fileToWrite.txt content using Writable Stream
import { resolve } from 'node:path';
import { createWriteStream, constants } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { getDirName } from '../../utils/getDirName';
import { checkIfFileExist } from '../../utils/checkIfFileExist';

const write = async () => {
    const __dirname = getDirName(import.meta.url);
    const destinationPath = resolve(__dirname, 'files', 'fileToWrite.txt');

    const isExist = await checkIfFileExist(destinationPath, constants.W_OK);     
    if (!isExist) {
        console.log(`Writing to file failed:\nFile ${destinationPath} doesn't exist.`);
        return;
    }

    const writableStream = createWriteStream(destinationPath);

    await pipeline (
        process.stdin,
        writableStream
    )
        .catch(err => console.log(`Writing to file failed: ${err}`));
};

await write();