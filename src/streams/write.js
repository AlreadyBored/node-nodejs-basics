import fs from 'fs'
import {join} from "path";
import {getExecutedFileDirname} from "../../helpers.js";
const write = async () => {
    const filePath = join(getExecutedFileDirname(import.meta.url), 'files', 'fileToWrite.txt');
    try {

        const writeStream = fs.createWriteStream(filePath, {encoding: 'utf8', flags: 'w'})

        process.stdin.pipe(writeStream);

        process.stdin.on('end', () => {
            writeStream.end();
            console.log('Finished writing to file.');
        });

    } catch (err) {
        console.log('[ERROR] ', err)
    }

};

await write();
