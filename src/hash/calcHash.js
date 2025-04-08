// implement function that calculates SHA256 hash for file fileToCalculateHashFor.txt and logs it into console as hex using Streams API
import { pipeline } from 'node:stream/promises';
import { createReadStream, constants } from 'node:fs';
import { createHash } from 'node:crypto';
import { resolve } from 'node:path';
import { getDirName } from '../../utils/getDirName.js';
import { checkIfFileExist } from '../../utils/checkIfFileExist.js';

const calculateHash = async () => {  
    const __dirname = getDirName(import.meta.url);
    const sourceFilePath = resolve(__dirname, 'files', 'fileToCalculateHashFor.txt');

    const isExist = await checkIfFileExist(sourceFilePath, constants.R_OK);
    if (!isExist) {
        console.log(`Creating hash failed:\nFile ${sourceFilePath} doesn't exist.`);
        return;
    }
    
    const sourceReadableStream = createReadStream(sourceFilePath);
    const hash = createHash('sha256');

    pipeline (
        sourceReadableStream,
        hash
    )
        .then(() => console.log(`Hash: ${hash.digest('hex')}`))
        .catch((err) => console.log(`Hash creation failed: ${err}`));
};

await calculateHash();