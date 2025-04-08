// implement function that reads file fileToRead.txt content using Readable Stream and prints it's content into process.stdout
import { resolve } from 'node:path';
import { createReadStream, constants } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { getDirName } from '../../utils/getDirName.js';
import { checkIfFileExist } from '../../utils/checkIfFileExist.js';

const read = async () => {
    const __dirname = getDirName(import.meta.url);
    const sourcePath = resolve(__dirname, 'files', 'fileToRead.txt');

    const isExist = await checkIfFileExist(sourcePath, constants.R_OK);
    if (!isExist) {
        console.log(`Reading of the file failed:\nFile ${sourcePath} doesn't exist.`);
        return;
    }

    const readableStream = createReadStream(sourcePath, { encoding: 'utf-8' });
    readableStream.on('end', () => process.stdout.write('\n'));

    await pipeline(
        readableStream,
        process.stdout
    )
        .catch(err => console.log(`Reading of the file failed: ${err}`));
};

await read();