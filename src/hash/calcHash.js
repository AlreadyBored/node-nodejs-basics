import fs from 'fs';
import {join} from 'path'
import crypto from 'crypto';
import {getExecutedFileDirname} from "../../helpers.js";

const calculateHash = async () => {
    const filePath = join(getExecutedFileDirname(import.meta.url), 'files', 'fileToCalculateHashFor.txt') ;
    try {
        const hash = crypto.createHash('sha256');
        const readStream = fs.createReadStream(filePath);

        readStream.on('data', (chunk)=> {
            hash.update(chunk);
        })

        readStream.on('end', () => {
            console.log(hash.digest('hex'));
        })

        readStream.on('error', (err) => {
            console.log(`Error reading file: ${err}`);
        });

    } catch (err) {
        console.log('ERROR: ', err)
    }

};

await calculateHash();
